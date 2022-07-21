import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Offers } from '../_modules/Offers';
import { OfferServiceService } from '../_service/offer-service.service';

@Component({
  selector: 'app-veiwoffer',
  templateUrl: './veiwoffer.component.html',
  styleUrls: ['./veiwoffer.component.css']
})
export class VeiwofferComponent implements OnInit {
  transferForm: any;
accounts:any;
bankName: any;
  constructor(private formBuilder : FormBuilder, private router : Router, private offerService: OfferServiceService,) {
     // should log out 'bar'
     const data = this.router.getCurrentNavigation()?.extras;
    
     console.log(data); 
     this.offer = data;
     this.bankName=this.offer.bankName;
     
   }
  offer: any;
  isApplyOffer : Boolean = false;
  ngOnInit(): void {

    this.transferForm = this.formBuilder.group({
      accountNumber: ['', Validators.required],
      amount: ['', Validators.required]
  });
     }

     apply(){
  // alert(this.bankName);
       this.isApplyOffer = true;
       this.offerService.getAccounts(localStorage.getItem('username')).subscribe(data => {
         this.accounts =data;
       })
     }
     onSubmit(){
      // this.loginService.login1(this.f.username.value, this.f.password.value).subscribe(data => {
        const input = {
          username:localStorage.getItem('username'),
          fromBank:this.bankName,
          toAccount: this.f.accountNumber.value,
          offerDetails :this.offer.offer,
          amount : this.f.amount.value
        };
this.offerService.balanceTransfer(input).subscribe(data => {
  // this.accounts =data;
});

     }
get f() { return this.transferForm.controls; }
}
