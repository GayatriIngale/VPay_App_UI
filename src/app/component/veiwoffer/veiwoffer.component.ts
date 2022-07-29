import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CardDetails } from 'src/app/_modules/card-details';
import { CardService } from 'src/app/_service/card.service';
import { OfferServiceService } from 'src/app/_service/offer-service.service';

@Component({
  selector: 'app-veiwoffer',
  templateUrl: './veiwoffer.component.html',
  styleUrls: ['./veiwoffer.component.css']
})
export class VeiwofferComponent implements OnInit {
  transferForm: any;
accounts:any;
bankName: any;
offerAmt: any;
  isbalaceOffer: boolean = false;
  loanForm: any;
  interestRate: any;
  selectedAmount: any;
  list: any;
  amountList: any;
  cards !: CardDetails[];
  mobileNumber : any;
  
  constructor(private formBuilder : FormBuilder, private router : Router, private offerService: OfferServiceService, private cardService: CardService ) {
     // should log out 'bar'
     const data = this.router.getCurrentNavigation()?.extras;
    
     console.log(data); 
     this.offer = data;
     this.bankName=this.offer.bankName;
     this.offerAmt = this.offer.offerAmt;
     this.interestRate =this.offer.interestRate;
     if(this.offer.offerType==="balance transfer"){
       this.isbalaceOffer = true;
     }
     
   }
  offer: any;
  isApplyOffer : Boolean = false;
  ngOnInit(): void {

    this.transferForm = this.formBuilder.group({
      accountNumber: ['', Validators.required],
      amount: ['', Validators.required],
     
  });

  this.loanForm = this.formBuilder.group({
    document: ['', Validators.required],
    amount: ['', Validators.required],
    otp:['', Validators.required],
    employeeId:['', Validators.required],
    employerName:['', Validators.required],

});
     }

     apply(){
  // alert(this.bankName);
       this.isApplyOffer = true;
       this.offerService.getAccounts(localStorage.getItem('username')).subscribe(data => {
         this.accounts =data;
       })
       this.mobileNumber = localStorage.getItem("mobileNumber");

       this.cardService.listOfCards(this.mobileNumber).subscribe((data: any) =>{
        // data.cardNumber.replace(/.(?=.{4})/g, "#");
        // cc.replace(/.(?=.{4})/g, "#");
        this.cards = data;
       })
     }
  
     onSubmit(){
       alert(this.f.amount.value);
      // this.loginService.login1(this.f.username.value, this.f.password.value).subscribe(data => {
        const input = {
          username:localStorage.getItem('username'),
          fromBank:this.bankName,
          toAccount: this.f.accountNumber.value,
          offerDetails :this.offer.offer,
          amount : this.f.amount.value,
        };

this.offerService.balanceTransfer(input).subscribe(data => {
  // this.accounts =data;
});

     }
     onSubmitLoan(){
      const input = {
        username:localStorage.getItem('username'),
        bankName:this.bankName,
        loanAmount : this.s.amount.value,
        employerName : this.s.employerName.value,
        employeeId : this.s.employeeId.value,
        interestRate: this.interestRate,

      };
      this.offerService.loanTransfer(input).subscribe(data => {
        // this.accounts =data;
      });
     }

     get f() { return this.transferForm.controls; }
     get s() { return this.loanForm.controls; }


     getRow(card: CardDetails, event : any) {

      console.log("Entered amount: "+card.amount);
    if(event.target.checked){
      this.selectedAmount = this.selectedAmount +card.amount;
      console.log("id: "+card.id);
      this.list.push(card.id);
      this.amountList.push(card.amount);
      console.log("amount list:"+this.amountList);
      console.log("int array: "+this.list);
    }
    else{
    //  alert("unchecked");
    this.selectedAmount = this.selectedAmount - card.amount;
    this.list.forEach((element: number,index: any)=>{
      if(element==card.id) this.list.splice(index,1);
      
   });
  
   this.amountList.forEach((element: number,index: any)=>{
    if(element==card.amount) this.amountList.splice(index,1);
    
  });
   
    console.log("unchecked");
   
    }
   
      
      
  }

  payDues(){}

}
