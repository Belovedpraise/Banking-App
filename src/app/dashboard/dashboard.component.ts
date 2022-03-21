import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public allContacts :any=[];
  public Currentlog:any={};
  public userArray:any;
  public userFirstName:any;
  public userAccountNumber:any;
  public totalAmount:any;
  public fundButtonClicked:any=0
  public fundAmount:any;
  public transferAmount:any;
  public transferButtonClicked:any=0
  public accountNumberEntered:any;
  public accountNumberTester:any;
  public accountNumberReport:any;
  public transferPartnerAccountIndex:any
  public transferPartnerAccountName:any
  public transferDescription:any
  public userWallets:any
  public AcctBalance:any;
  public referenceNumber:any;
  public fundAccountHistory:any
  public userHistory:any
  public reversedHistory:any
  public reversedSlicedHistory:any
  public requestsArray:any
  public reversedRequestsArray:any
  public reversedSlicedRequests:any


  constructor(private router:Router,private _userService:UsersService) { }

  ngOnInit(): void {
    this.allContacts = this._userService.getAllContacts()
    this.Currentlog = JSON.parse(localStorage.getItem('currentContact')!)
    this.allContacts=localStorage.localUser?JSON.parse(localStorage.localUser):[]
    this.userArray = this.allContacts[this.Currentlog]
    this.userFirstName = this.userArray.firstName
    this.userAccountNumber =this.userArray.accountNumber
    this.totalAmount=this.allContacts[this.Currentlog].totalAmount
    this.userWallets=this.allContacts[this.Currentlog].wallet
    this.AcctBalance=this.allContacts[this.Currentlog].AcctBalance
    this.userHistory = this.allContacts[this.Currentlog].history
    this.reversedHistory = this.userHistory.reverse()
    this.reversedSlicedHistory = this.reversedHistory.slice(0,3)
    this.requestsArray= this.allContacts[this.Currentlog].requests
    this.reversedRequestsArray = this.requestsArray.reverse()
    this.reversedSlicedRequests = this.reversedRequestsArray.slice(0,3)
    console.log(this.userWallets)
  }



  fundA(){
    console.log(`ready to fund`)
    // this.router.navigate(["dashboard/fund-account"])
  }
  transferA(){
    this.router.navigate(["/dashboard/transfer"])
  }
  createW(){
    this.router.navigate(["/dashboard/create-wallet"])
  }

  requestF(){
    this.router.navigate(["/dashboard/request-funds"])
  }


  fundMe(){
    console.log(this.fundAmount)
    if(this.fundAmount){
       //Initialise date and time display settings
        var myDate = new Date;
        var allTime = myDate.toLocaleTimeString()
        var allDate =  myDate.toLocaleDateString()

      //Add money to the main account
      this.allContacts[this.Currentlog].mainAccountAmount+=parseFloat(this.fundAmount)
      //Add money to the total amount
      this.totalAmount+=parseFloat(this.fundAmount)
      this.userArray.totalAmount=this.totalAmount
      //Generate Reference number
      this.referenceNumber = Math.round(Math.random()*10000000000000000)
      //Push to history
      this.fundAccountHistory = {
        nameOfReceiver: "Raymond Bank",
        accountNumberOfReceiver:"Debit Card Number",
        date:allDate,
        time:allTime,
        description:"Visa Debit Card withdrawal from Raymond Bank",
        transferAmount:parseFloat(this.fundAmount),
        transactionType:'credit',
        referenceNumber:this.referenceNumber
      }
      this.allContacts[this.Currentlog].history.push(this.fundAccountHistory)
      //push to local storage
      localStorage.setItem("localUser",JSON.stringify(this.allContacts))
      alert(`Account Funded Successfully`)
      this.ngOnInit();
      // this.router.navigate(["/dashboard"])
    }
    else{
      alert("Kindly Enter An Amount")
    }

  }
  routeToMessages(){
    this.router.navigate(['/messages'])
  }
  navigateToTransactions(){
    this.router.navigate(['/history'])
  }

}


