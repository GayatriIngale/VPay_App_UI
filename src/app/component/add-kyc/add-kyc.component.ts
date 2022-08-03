import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/_service/notification.service';
import { Kyc } from '../../_modules/kyc';
import { User } from '../../_modules/user';
import { KycService } from '../../_service/KycService';

@Component({
  selector: 'app-add-kyc',
  templateUrl: './add-kyc.component.html',
  styleUrls: ['./add-kyc.component.css']
})
export class AddKycComponent implements OnInit {

  addKyc: any;
  constructor(private kycService : KycService , private router: Router, private notificationService :NotificationService) { }
//private registerService : RegisterService, private router: Router
  kycs: Kyc = new Kyc();
  //private registerService! : RegisterService
  submitted = false;
   response ! : string;

 
  ngOnInit(): void {
    this.addKyc = new FormGroup({
      "adhaarNumber": new FormControl('',Validators.required),
      "panNumber": new FormControl('',Validators.required),
      "salary": new FormControl('',Validators.required),      
    })
  }
  

  submit() {  
   
this.kycService.saveKyc(this.kycs, localStorage.getItem('username')).subscribe(data => {
  this.notificationService.showSuccess("Kyc Successfull", "");
  console.log(data)


}
, (error: any) =>
this.notificationService.showError("Kyc Successfull", "")
);

// console.log(error));  
    localStorage.setItem('uid',this.addKyc.get('adhaarNumber'));
    // this.router.navigate(['auth']);


  }
  next(){
    this.router.navigate(['auth']);
  }
  get adhaarNumber(){
    return this.addKyc.get('adhaarNumber');
  }
  get panNumber(){
    return this.addKyc.get('panNumber');
  }
  get salary(){
    return this.addKyc.get('salary');
  }
 
  }


