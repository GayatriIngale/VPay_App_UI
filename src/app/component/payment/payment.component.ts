import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CardDetails } from 'src/app/_modules/card-details';
import { CardService } from 'src/app/_service/card.service';
import { PaymentService } from 'src/app/_service/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private paymentService : PaymentService,private router: Router, private cardService: CardService) { }
  totalDue : any;
  minDue : any;
  userName: any;
  mobileNumber : any;
  isChecked ! : boolean;
  cards !: CardDetails[];
   list: number[] = [];
   walletAmount : any;
  selectedCards !: CardDetails[];
  cardDetails: any;


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
     })

     this.paymentService.getWalletAmount(this.userName).subscribe(data=>{
      this.walletAmount=data;
     })

     this.isChecked = false;

  }
  Payment(userName: any){
    console.log(userName);
             this.paymentService.getWalletAmount(userName).subscribe(data =>{
              console.log(data);
              alert("VPay Wallet amount: "+data);
              this.paymentService.clearDue(data,this.mobileNumber).subscribe(data=>
                {
                  alert(data);
                })
             })
  }
  getRow(card: CardDetails, event : any) {

    console.log("Entered amount: "+card.amount);
  if(event.target.checked){
    console.log("id: "+card.id);
    this.list.push(card.id);
    
    console.log("int array: "+this.list);
  }
  else{
  //  alert("unchecked");
  this.list.forEach((element,index)=>{
    if(element==card.id) this.list.splice(index,1);
 });
  console.log("unchecked");
 
  }
 
    
    
}

//To show  all details of which  cards are selected 
getArray(){
  console.log("selected total id: "+this.list);
  this.paymentService.check(this.list).subscribe(data=>{
    console.log(data);
  })

}

get amount(){
  return this.cardDetails.get('amount');
}

}
