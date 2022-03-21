import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  public allContacts:Array<any>=localStorage['localUsers']?JSON.parse(localStorage['localUsers']):[];
  // public allContacts:any=[];
  public firstName:string="";
  public lastName:string="";
  public Email:string="";
  public Password:string="";
  public AcctNum:string = "";
  public AcctBalance:number =50000;
  constructor(private router:Router, private _userService:UsersService) { }

  ngOnInit(): void {
    // if(localStorage['localUsers']){
    //  this.allContacts = JSON.parse(localStorage['localUsers'])
    //  console.log(this.allContacts);

    // }else{
    //   this.allContacts=[]
    //   console.log(this.allContacts);
    // }
    this.allContacts=this._userService.getAllContacts()
    console.log(this.allContacts);
// console.log(this._userService.getAllContacts());

  }

  addSignUp(){
   let {firstName,lastName, Email,Password,AcctNum,AcctBalance}=this
   if(this.allContacts){
    alert(`sign in`)
    this.router.navigate([`signin/`])
    }
   AcctNum = `811${Math.floor(Math.random()*10000000)}`
  //  this._userService.pushContact({Name,Email,Password})
    this.allContacts.push({firstName,lastName,Email,Password,AcctNum,AcctBalance})
    localStorage['localUsers'] =JSON.stringify( this.allContacts)
    this.firstName ="",
    this.lastName ="",
    this.Email ="",
    this.Password=""
    // console.log(allContacts);
  }


}
