import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/_modules/user';
import { RegisterService } from 'src/app/_service/register.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  addUser: any;
  constructor( private registerService : RegisterService) { }

  users: User = new User();
  submitted = false;


 
  ngOnInit(): void {
    this.addUser = new FormGroup({
      "firstName": new FormControl('',Validators.required),
      "lastName": new FormControl('',Validators.required),
      "emailId": new FormControl('',Validators.required),
      "password": new FormControl('',Validators.required),
      "userName": new FormControl('',Validators.required)
      
    })
  }
  register() {
    this.submitted = true;
    if (this.addUser.invalid) {
      return this.addUser();
    }
    else {

      this.registerService.registerUser(this.addUser).subscribe(
        success => alert("Sussessfully Inserted"),
          error => alert("unsuccess")
      );
      
    }
  }

  get firstName(){
    return this.addUser.get('firstName');
  }
  get lastName(){
    return this.addUser.get('lastName');
  }
  get emailId(){
    return this.addUser.get('emailId');
  }
  get password(){
    return this.addUser.get('password');
  }
  get userName(){
    return this.addUser.get('userName');
  }

}
