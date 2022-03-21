import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {
  public AccountNumber: string="";
  public AccountName: string = "";
  public AmounttoDeposit : string ="";
  constructor() { }
addDeposit(){

}
  ngOnInit(): void {
  }

}
