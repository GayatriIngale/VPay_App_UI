import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/_service/login.service';


@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
//  loginForm: FormGroup;
loading = false;
loginForm: any;
response: any;
  submitted = false;
  result:any;

  constructor(
    private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private loginService : LoginService
        
  ) {
    
   }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      console.log("Invalid");
        return;
    }

    this.loading = true;
    this.loginService.login(this.f.username.value, this.f.password.value).subscribe(data => {
this.response = data;
alert(data);
      if(this.response=='user login successfully..!!')
              {
               // console.log(this.response); 
                localStorage.setItem('username', this.f.username.value);
                console.log(this.f.username.value)
                this.router.navigateByUrl('/VPay')
              }
              else{
                   console.log("not login");
              }
    });



    //  this.loginService.login1(this.f.username.value, this.f.password.value).subscribe
       
    //     (
    //         data => {
    //           this.response=data;
    //           console.log(data);
    //           //this.result=data.message;
    //           this.result=data;

    //           if(this.response=='success')
    //           {
    //            // console.log(this.response); 
    //             localStorage.setItem('username', this.f.username.value);
    //             console.log(this.f.username.value)
    //             this.router.navigateByUrl('/VPay')
    //           }else{
    //                             this.router.navigateByUrl('/VPay')

    //               alert("user not found");
    //               this.router.navigateByUrl('/login')
                  
    //           }
               
    //         },
    //         error => {
    //             this.loginService.error(error);
    //             this.loading = false;
    //         });

   
}

Register(){
  this.router.navigate(['register']);
}

  get f() { return this.loginForm.controls; }

}
