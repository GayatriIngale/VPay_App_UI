import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BalanceTermsComponent } from 'src/app/balance-terms/balance-terms.component';
import { LoanTermsComponent } from 'src/app/loan-terms/loan-terms.component';
import { CardDetails } from 'src/app/_modules/card-details';
import { CardService } from 'src/app/_service/card.service';
import { NotificationService } from 'src/app/_service/notification.service';
import { OfferServiceService } from 'src/app/_service/offer-service.service';

export interface DialogData {
  isBalanceFlag: string;
  isLoanFlag: boolean;
}


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
  isBalanceFlag: String = "False";
  isLoanFlag: boolean = false;
  isbalaceOffer: boolean = false;
  loanForm: any;
  interestRate: any;
  selectedAmount: any;
  list: any;
  amountList: any;
  //cards !: CardDetails[];
  mobileNumber : any;
  isNext: boolean = false;
  emi: any;
  isConfirm: boolean = false;
  
  constructor(private dialogRef : MatDialog,   private formBuilder : FormBuilder, private router : Router, private offerService: OfferServiceService, private cardService: CardService , private notificationService: NotificationService) {
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
    document1: ['', Validators.required],
    document2: ['', Validators.required],
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
       this.isLoanFlag= false;
      const input = {
        username:localStorage.getItem('username'),
        bankName:this.bankName,
        loanAmount : this.s.amount.value,
        employerName : this.s.employerName.value,
        employeeId : this.s.employeeId.value,
        interestRate: this.interestRate,
        emi: this.emi,

      };
      this.offerService.loanTransfer(input).subscribe(data => {
        // this.accounts =data;
        this.notificationService.showSuccess("SuucessFull","");
      });
     }


next(){
  this.isNext = true;
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


calculateEmi(emiObj: number){
  this.emi = emiObj;
  console.log(this.emi)
  this.offerService.getEmi(emiObj, this.offer.interestRate, this.offer.tennure).subscribe(data => {
this.emi=data;
  });
}

termsForBalance():void{
    const dialogRef1=  this.dialogRef.open(BalanceTermsComponent, {
      width: '500px',
      height: '500px',
      data: {isBalanceFlag: this.isBalanceFlag},

    });

// this.dialogRef.afterAllClosed.subscribe

    dialogRef1.afterClosed().subscribe(result => {
      console.log('The dialog was closed ####################################3');
      this.isBalanceFlag = result;
      console.log(this.isBalanceFlag);
if(this.isBalanceFlag){
      this.isConfirm = true;
}
     

    });


  }


confirm(){
  if(this.isBalanceFlag){
    const data = {
     'mobile': localStorage.getItem('mobileNumber'),
     'amount':this.offer.offerAmt,
     'bankname': this.offer.bankName,
     'cardNumber': this.offer.cardNumber,
     'status':"In Progress"
    }

    this.offerService.balanceTransferOffer(data).subscribe((result: any) => {

      this.notificationService.showSuccess("Your dues hads been cleard. You will get the card in next 3 to 4 working days", "");

    });
     }
}

  loanTerms(){



    const dialogRef1=  this.dialogRef.open(LoanTermsComponent, {
      width: '500px',
      height: '500px',
      data: {isLoanFlag: this.isLoanFlag},

    });

// this.dialogRef.afterAllClosed.subscribe

    dialogRef1.afterClosed().subscribe(result => {
      console.log('The dialog was closed ####################################3');
      this.isLoanFlag = result;
      console.log(this.isLoanFlag);
     

    });






  }

}
