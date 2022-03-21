import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
public allContacts:any =[];
public allCurrentContacts: any = [];
  constructor() { }

getAllContacts(){
  this.allContacts = localStorage['localUsers']?JSON.parse(localStorage['localUsers']):[]
  // console.log(this.allContacts);
return this.allContacts
  }

  // getAllCurrentContacts(){
  //   this.allCurrentContacts = localStorage['localUser']=JSON.stringify(this.allCurrentContacts)
  // }

  pushContact(userDetails:any){
    this.allContacts.push(userDetails)
    console.log(this.allContacts);
  }
}
