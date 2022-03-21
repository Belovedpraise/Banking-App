import { Component } from '@angular/core';
import { StudentInterface } from './type/student.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public name:string = '';
  public age :number = 30;
  public line :number = 0;
  public Name:string="";
  public Email:string="";
  public Password:string="";
  public EditIndex:number = 0;
  public EditMode: boolean = false;
  public allContacts:StudentInterface[]=[];
  public clickedName: string = "";

  clickMe (id: string) {
    this.clickedName = id;
  }



addContact(){
let {name}=this
this.allContacts.push({name})
this.name = '';
console.log(this.allContacts);

}


// EditButton(i:number){
// this.EditMode = true;
// this.EditIndex= i;
// this.name = this.allStudents[i].name;
// this.Department = this.allStudents[i].Department;
// this.MatricNumber =this.allStudents[i].MatricNumber;
// this.Course =this.allStudents[i].Course;
// console.log(this.EditIndex)
// }

// AddDelete(i:number){
//   this.allStudents = this.allStudents.filter((_,index)=>index!==i);
// }

// savechanges(){
//   this.allStudents[this.EditIndex]=
//  {name:this.name,Department:this.Department,MatricNumber:this.MatricNumber,Course:this.Course,}
//  this.EditMode = false
// }

// dip(){

// }

}
