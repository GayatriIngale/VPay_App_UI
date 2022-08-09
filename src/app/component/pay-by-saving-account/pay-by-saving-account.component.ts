import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AccountDetails } from 'src/app/_modules/account-details';
import { PaymentService } from 'src/app/_service/payment.service';
import { PaySavingAndWalletComponent } from '../pay-saving-and-wallet/pay-saving-and-wallet.component';
import { PaymentHistoryComponent } from '../payment-history/payment-history.component';

@Component({
  selector: 'app-pay-by-saving-account',
  templateUrl: './pay-by-saving-account.component.html',
  styleUrls: ['./pay-by-saving-account.component.css']
})
export class PayBySavingAccountComponent implements OnInit {

  constructor( private router: Router, private paymentService: PaymentService,private dialogRef : MatDialog) { }

  submitted = false;
  accountDetails : any;
  select : any;
  //account !: AccountDetails;

  account: AccountDetails = new AccountDetails();
  ngOnInit(): void {


    this.accountDetails = new FormGroup({
      "accountNo": new FormControl('',Validators.required),
      "pin": new FormControl('',Validators.required),
      
    })

    // var storedNames = JSON.parse(localStorage.getItem("lists"));

    console.log("ids list array: "+JSON.parse(localStorage["lists"] ));
    console.log("amount list array: "+JSON.parse(localStorage["amounts"]));
    this.select= localStorage.getItem('selectedvalue');
    // console.log("selected amount: "+JSON.parse(localStorage["selectedAmount"]);
  }

pay(){
  this.submitted = true;
alert("In Pay account");


   this.paymentService.savingAccount(JSON.parse(localStorage["lists"]),JSON.parse(localStorage["amounts"]),this.select,this.account.accountNo, this.account.pin, "I Pay").subscribe(data =>{
    alert(data);

    localStorage.setItem("referenceNo",data)

    this.dialogRef.open(PaymentHistoryComponent,{
      // data : {cards :this.amountList, ids : this.list, amount: this.selectedAmount}
      
     })
    //  .afterClosed().subscribe(response => {
    //   console.log(response.cars,response.ids, response.list, response.amount)
    // })

    
   });
  }

  get accountNo(){
    return this.accountDetails.get('accountNo');
  }
  get pin(){
    return this.accountDetails.get('pin');
  }
  
}
