import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { WalletSaving } from 'src/app/_modules/account-details';
import { PaymentService } from 'src/app/_service/payment.service';
import { PaymentHistoryComponent } from '../payment-history/payment-history.component';

@Component({
  selector: 'app-pay-saving-and-wallet',
  templateUrl: './pay-saving-and-wallet.component.html',
  styleUrls: ['./pay-saving-and-wallet.component.css']
})
export class PaySavingAndWalletComponent implements OnInit {

  constructor(private paymentService : PaymentService,private dialogRef : MatDialog) { }

  
  select : any;
  accountDetails: any;
  account : WalletSaving = new WalletSaving();
  ngOnInit(): void {
    this.accountDetails = new FormGroup({
      "savingAmount": new FormControl('',Validators.required),
      "walletAmount": new FormControl('',Validators.required),
      "accountNo": new FormControl('',Validators.required),
      "pin": new FormControl('',Validators.required),
      
    })

    this.select= localStorage.getItem('selectedvalue');

    console.log("selected value:"+this.select)
  }

  pay(){

    console.log("In methode");
//id: number[], amount : number[], savingAmount : number, walletAmount:number,   accountNo: number, pin : string
       
       console.log("saving amount: "+this.account.savingAmount+" wallet amount: "+this.account.walletAmount,);
       this.paymentService.savingAndwallet(JSON.parse(localStorage["lists"]),
        JSON.parse(localStorage["amounts"]),this.account.savingAmount,
        this.account.walletAmount,this.account.accountNo,this.account.pin,"Lets Pay Together")
        .subscribe(data=>{
          alert(data);

          localStorage.setItem("referenceNo",data)

    this.dialogRef.open(PaymentHistoryComponent,{
      // data : {cards :this.amountList, ids : this.list, amount: this.selectedAmount}
      
     })
        })     
  }
}
