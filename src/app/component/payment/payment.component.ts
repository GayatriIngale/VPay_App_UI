import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CardDetails } from 'src/app/_modules/card-details';
import { CardService } from 'src/app/_service/card.service';
import { PaymentService } from 'src/app/_service/payment.service';
import { MatDialog } from '@angular/material/dialog';
import { PayBySavingAccountComponent } from '../pay-by-saving-account/pay-by-saving-account.component';
import { Wallet } from 'src/app/_module/wallet';
import { PaySavingAndWalletComponent } from '../pay-saving-and-wallet/pay-saving-and-wallet.component';
import { PaymentHistoryComponent } from '../payment-history/payment-history.component';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private dialogRef : MatDialog,private paymentService : PaymentService,private router: Router, private cardService: CardService) { }
  totalDue : any;
  minDue : any;
  userName: any;
  mobileNumber : any;
  isChecked ! : boolean;
  cards !: CardDetails[];
   list: number[] = [];
   amountList : number[] = [];
   walletAmount : any;
  selectedCards !: CardDetails[];
  cardDetails: any;
  selectedAmount = 0;

  wallet !: any;


  ngOnInit(): void {

    this.cardDetails = new FormGroup({
      "amount": new FormControl('',Validators.required),
      
    })
    
    this.totalDue = localStorage.getItem("totalDue");
    this.minDue = localStorage.getItem("minDue");
    console.log("totaldue:"+localStorage.getItem("totalDue"));
    this.userName = localStorage.getItem("username");
    this.mobileNumber = localStorage.getItem("mobileNumber");

    this.cardService.listOfCards(this.mobileNumber).subscribe(data =>{
      // data.cardNumber.replace(/.(?=.{4})/g, "#");
      // cc.replace(/.(?=.{4})/g, "#");
      this.cards = data;
      console.log(data);
     })

     this.paymentService.getWalletAmount(this.userName).subscribe(data=>{

      if(this.walletAmount !=" "){
        this.walletAmount=data;
      }
      else
      this.walletAmount=0;
     
     })

     this.paymentService.getWallet(this.userName).subscribe(data =>{
      this.wallet = data;
      console.log("dueDate by wallet"+this.wallet.dueDate);
     })



     this.isChecked = false;


  }

  // Payment(userName: any){
  //   console.log(userName);
  //            this.paymentService.getWalletAmount(userName).subscribe(data =>{
  //             console.log(data);
  //             alert("VPay Wallet amount: "+data);
  //             this.paymentService.clearDue(data,this.mobileNumber).subscribe(data=>
  //               {
  //                 alert(data);
  //               })
  //            })
  // }



  getRow(card: CardDetails, event : any) {

    console.log("Entered amount: "+card.amount);
  if(event.target.checked){
    this.selectedAmount = this.selectedAmount +card.amount;
    console.log("id: "+card.id);
    this.list.push(card.id);
    this.amountList.push(card.amount);
    console.log("amount list:"+this.amountList);
    console.log("int array: "+this.list);

    localStorage.setItem("lists", JSON.stringify(this.list));
    localStorage.setItem("amounts", JSON.stringify(this.amountList));
    localStorage['answer'] = JSON.stringify(this.selectedAmount);
    let saved = JSON.parse(localStorage['answer'])
    localStorage.setItem('selectedvalue', saved);
  }
  else{
  //  alert("unchecked");
  this.selectedAmount = this.selectedAmount - card.amount;
  this.list.forEach((element,index)=>{
    if(element==card.id) this.list.splice(index,1);
    
 });

 this.amountList.forEach((element,index)=>{
  if(element==card.amount) this.amountList.splice(index,1);
  
});
 
  console.log("unchecked");

  // localStorage.setItem('selectedAmount',this.selectedAmount.toString || null);
  localStorage.setItem("selectedAmount", JSON.stringify(this.selectedAmount));
 
  }

 
 
    
    
}

//To show  all details of which  cards are selected 
clearByWallet(){
  this.paymentService.getWalletAmount(this.userName).subscribe(data =>{
    console.log(data);
    if(this.walletAmount<this.selectedAmount){
      alert("insufficient amount in wallet please check offers");
    }
    else{
           if(!!this.amountList  && this.amountList.length==0){
                 alert("please select card and amount");
           }else{
           
            this.paymentService.check(this.list,this.amountList, this.selectedAmount,"Pay For Me").subscribe(data=>
            {
              alert(data);
              localStorage.setItem("referenceNo",data)

              this.dialogRef.open(PaymentHistoryComponent,{
                // data : {cards :this.amountList, ids : this.list, amount: this.selectedAmount}
                
               })

            })
           }

      
    }
   })
}


get amount(){
  return this.cardDetails.get('amount');
}



// open(content: any) {
//   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
//     this.closeResult = `Closed with: ${result}`;
//   }, (reason) => {
//     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
//   });
// }

// private getDismissReason(reason: any): string {
//   if (reason === ModalDismissReasons.ESC) {
//     return 'by pressing ESC';
//   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
//     return 'by clicking on a backdrop';
//   } else {
//     return `with: ${reason}`;
//   }
// }


getUserDetails(){
  alert("In methode");
}

openDialog(){

  if(!!this.amountList  && this.amountList.length==0){
    alert("please select card and amount");
}
   else{
    this.dialogRef.open(PayBySavingAccountComponent,{
      data : {cards :this.amountList, ids : this.list, amount: this.selectedAmount}
      
     }).afterClosed().subscribe(response => {
          console.log(response.cars,response.ids, response.list, response.amount)
        })
   }
   

      
}

openDialogTogether(){

  if(!!this.amountList  && this.amountList.length==0){
    alert("please select card and amount");
}
else{

  this.dialogRef.open(PaySavingAndWalletComponent,{
    data : {cards :this.amountList, ids : this.list, amount: this.selectedAmount}
    
   }).afterClosed().subscribe(response => {
        console.log(response.cars,response.ids, response.list, response.amount)
      })
}

  

     
}
// openDialog() {
//   this.dialog.open(AddChargesComponent, {
//     data: { name: this.name, surname:this.surname, email: this.email, mobile: this.mobile} 
//   }).afterClosed().subscribe(response => {
//     console.log(response.name,response.surname, response.email, response.mobile )
//   })
// }

// openDialog(t1) {
//   const dialogRef = this.dialog.open(NameComponent, {
//     data: { t1 }
//   });
//   dialogRef.afterClosed().subscribe(data => {

// }
}


