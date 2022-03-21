import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  public allContacts:Array<any>=localStorage['localUsers']?JSON.parse(localStorage['localUsers']):[];
  // public allContacts:any;
  public Email:string="";
  public Password:string="";
  public found:any={};
  public Currentlog:any=[];
  // public AcctNum:string = "";
  constructor(private router:Router, private _userService:UsersService) { }


  ngOnInit(): void {
    this.allContacts = this._userService.getAllContacts()
  }

  addSignIn(){
  this.found = this.allContacts.find((val:any,i:any)=>val.Email==this.Email && val.Password==this.Password)
   if(this.found){
     alert(`you signed in successfully`)
     this.router.navigate(["/dashboard"])
   }else{
     alert(`please enter your details`)
   }
   localStorage.setItem('currentContact',JSON.stringify(this.found))
    // let {Email,Password,allContacts}=this
    // allContacts.push({Email,Password})
    // this.router.navigate([`contact/`])
  }

  currentlog(){
    this.Currentlog=this.allContacts
    console.log(this.Currentlog)
  }


}
