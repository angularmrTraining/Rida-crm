import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public contacts: Array<contact> = [new contact("Ahmed0", "Ahmed0", "22"), new contact("Ahmed1", "Ahmed1", "23"), new contact("Ahmed2", "Ahmed2", "24")
  , new contact("Ahmed3", "Ahmed3", "25")];

  constructor(){
    
  }
}

class contact{
  firstName : String;
  lastName : String;
  age : String;
  
  constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }


}
