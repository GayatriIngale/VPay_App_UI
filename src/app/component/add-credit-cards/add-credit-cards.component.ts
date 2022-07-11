import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CardDetails } from 'src/app/_modules/card-details';
import { CardService } from 'src/app/_service/card.service';

@Component({
  selector: 'app-add-credit-cards',
  templateUrl: './add-credit-cards.component.html',
  styleUrls: ['./add-credit-cards.component.css']
})
export class AddCreditCardsComponent implements OnInit {

  constructor(private cardService : CardService ,private router: Router) { }
 
  addCards : any;
  submitted = false;

  cardDetails : CardDetails = new CardDetails();
  
  ngOnInit(): void {
    this.addCards = new FormControl({
      "cardNumber": new FormControl('',Validators.required),
      "cvv": new FormControl('',Validators.required),
      "expiryDate": new FormControl('',Validators.required),
      "mobileNumber": new FormControl('',Validators.required),
      "userName": new FormControl('',Validators.required),
      "bankName": new FormControl('', Validators.required)

    })
  }


  saveCards() {  
    console.log(this.cardDetails);
    this.cardService.addCards(this.cardDetails)  
      .subscribe((data: any) => console.log(data), (error: any) => console.log(error));  
    this.router.navigate(['VPay']);

  }

 

  get cardNumber(){
    return this.addCards.get('cardNumber');
  }
  get cvv(){
    return this.addCards.get('cvv');
  }
  get expiryDate(){
    return this.addCards.get('expiryDate');
  }
  get mobileNumber(){
    return this.addCards.get('mobileNumber');
  }
  get userName(){
    return this.addCards.get('userName');
  }
  get bankName(){
    return this.addCards.get('bankName');
  }

}
