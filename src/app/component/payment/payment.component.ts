import { Component, OnInit } from '@angular/core';
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

  cards !: CardDetails[];

  selectedCards !: CardDetails[];
  ngOnInit(): void {
    
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
  getRow(card: CardDetails) {
    // var row = n.parentNode.parentNode;
    // var cols = row.getElementsByTagName("td");
    // var i = 0;

    // while (i < cols.length) {
    //     var val = cols[i].childNodes[0].nodeValue;
    //     if (val != null) {
    //         alert(val);
    //     }

    //     i++;
    // }

    console.log("bank name:"+card.bankName);
    
}



}
