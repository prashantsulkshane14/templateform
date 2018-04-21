import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  

  constructor() { }

  ngOnInit() {
  }

  submitForm(myForm) {
   let formData: User;
    formData = myForm.value;
     console.log(formData);
  }

}
