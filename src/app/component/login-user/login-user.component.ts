import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
//  loginForm: FormGroup;
loading = false;
  submitted = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    
  }

}