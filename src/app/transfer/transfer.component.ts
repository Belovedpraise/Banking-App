import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  constructor(public router:Router) { }
  public allContacts:Array<any>=localStorage['localUsers']?JSON.parse(localStorage['localUsers']):[];
  public Currentlog:any=[];
  public userArray:any;
  public userFirstName:any;
  public userAccountNumber:any;
  public totalAmount:any;
  public fundButtonClicked:any=0
  public fundAmount:any;
  public transferAmount:any="";
  public transferButtonClicked:any=0
  public accountNumberEntered:any;
  public accountNumberTester:any;
  public accountNumberReport:any;
  public transferPartnerAccountIndex:any
  public transferPartnerAccountName:any
  public transferDescription:any
  public accountNotFound:any
  public transferTester:any;
  public transferHistorySender:any;
  public transferHistoryReceiver:any;
  public AcctBalance:any;
  public referenceNumber:any;
  ngOnInit(): void {
    this.Currentlog = localStorage.getItem("currentContact")
    this.userArray = this.allContacts[this.Currentlog]
    this.userFirstName = this.userArray.firstName
    this.userAccountNumber =this.userArray.AccNum
    this.AcctBalance=this.allContacts[this.Currentlog].AcctBalance
    this.totalAmount=this.userArray.totalAmount
    console.log(this.userFirstName)
  }
  transferFund(){
     //date and time
     var myDate = new Date;
     var allTime = myDate.toLocaleTimeString()
     var allDate =  myDate.toLocaleDateString()

      if(this.transferAmount>0 &&this.allContacts[this.Currentlog].mainAccountAmount>=this.transferAmount){
        //Add transferred Amount to Receiver's Main Account
        this.allContacts[this.transferPartnerAccountIndex].AcctBalance+=parseFloat(this.transferAmount)
        //Deduct from Sender's main account
        this.allContacts[this.Currentlog].AcctBalance=this.allContacts[this.Currentlog].AcctBalance-parseFloat(this.transferAmount)
        //Add transferred money to total Receiver's money
        this.allContacts[this.transferPartnerAccountIndex].totalAmount+=parseFloat(this.transferAmount)
        //Deduct from Sender's total Amount
        this.allContacts[this.Currentlog].totalAmount=this.allContacts[this.Currentlog].totalAmount-parseFloat(this.transferAmount)
        //Generate Reference number
        this.referenceNumber = Math.round(Math.random()*10000000000000000)
        //For Sender
        this.transferHistorySender = {
          name: this.transferPartnerAccountName,
          AccNum:this.allContacts[this.transferPartnerAccountIndex].AccNum,
          date:allDate,
          time:allTime,
          description:`Transfer to ${this.transferPartnerAccountName}`,
          transferAmount:this.transferAmount,
          transactionType:'debit',
          referenceNumber:this.referenceNumber
        }
        this.allContacts[this.Currentlog].history.push(this.transferHistorySender)

        //For Receiver
        this.transferHistoryReceiver = {
          name: this.userArray.firstName + " " +this.userArray.lastName,
          AccNum:this.userAccountNumber,
          date:allDate,
          time:allTime,
          description:`Transfer from  ${this.userArray.firstName}`,
          transferAmount:this.transferAmount,
          transactionType:'credit',
          referenceNumber:this.referenceNumber
        }
        this.allContacts[this.transferPartnerAccountIndex].history.push(this.transferHistoryReceiver)
        console.log(this.allContacts)
        localStorage.setItem("localUser",JSON.stringify(this.allContacts))
        alert(`You have transferred successfully`)
        this.router.navigate(['/dashboard'])
      }

    }
    canceltransferFund(){
      this.transferButtonClicked=0
      this.router.navigate(["/dashboard"])
    }
    checkAccountNumber(){
      if(this.accountNumberEntered.length===10)
      {
        this.accountNumberTester = this.allContacts.find((val:any,i:any)=> this.allContacts[i].AccNum==this.accountNumberEntered)
        // console.log(this.accountNumberTester);
        if(!this.accountNumberTester){
          this.accountNumberReport=0
        }
        else{
          if(this.accountNumberEntered.length==10){
            this.accountNumberReport=1
            this.transferPartnerAccountIndex=this.allContacts.indexOf(this.accountNumberTester)
            this.transferPartnerAccountName=this.allContacts[this.transferPartnerAccountIndex].firstName + " " + this.allContacts[this.transferPartnerAccountIndex].lastName
            console.log(this.transferPartnerAccountName)
          }
          else{
            this.transferPartnerAccountName=""
            this.accountNumberReport=0
            this.accountNotFound=1
          }

        }
      }
      else{
        this.transferPartnerAccountName=""
        this.accountNumberReport=0
        this.accountNotFound=1
      }
    }
}



