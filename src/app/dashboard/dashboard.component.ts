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

  }


}


