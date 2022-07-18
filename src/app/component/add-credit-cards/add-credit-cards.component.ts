import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
    this.addCards = new FormGroup({
      "cardNumber": new FormControl('',Validators.required),      
      "cardHolderName": new FormControl('',Validators.required),
      // "userName": new FormControl('',Validators.required),
      "bankName": new FormControl('', Validators.required)

    })
   
    //let username = localStorage.getItem("username");
  }


  saveCards() {  
    console.log(this.cardDetails);

//alert(localStorage.getItem("panNumber"));
    this.cardService.addCards(this.cardDetails,localStorage.getItem("mobileNumber"))  
      .subscribe((data: any) => alert(data), (error: any) => console.log(error));  
    this.cardDetails= new CardDetails();
    this.router.navigate(['VPay']);

  }
 
 

  get cardNumber(){
    return this.addCards.get('cardNumber');
  }
  
  get cardHolderName(){
    return this.addCards.get('cardHolderName');
  }
  get userName(){
    return this.addCards.get('userName');
  }
  get bankName(){
    return this.addCards.get('bankName');
  }

  
}
