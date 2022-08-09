import { Component, OnInit } from '@angular/core';
import { PaymentHistory } from 'src/app/_modules/payment-history';
import { PaymentService } from 'src/app/_service/payment.service';

@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.component.html',
  styleUrls: ['./payment-history.component.css']
})
export class PaymentHistoryComponent implements OnInit {

  constructor( private payment : PaymentService) { }

  payments !: PaymentHistory[];
 date !: any;
  ngOnInit(): void {

    console.log("Reference Number : "+localStorage.getItem("referenceNo"));


    this.payment.listOfHistory(localStorage.getItem("referenceNo")).subscribe(data =>{
      console.log(data);
      this.payments =  data;
      
     
    })

    this.date=new Date().toLocaleDateString();

  }


}
