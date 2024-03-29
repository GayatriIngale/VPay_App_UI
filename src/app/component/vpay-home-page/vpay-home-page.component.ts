import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardDetails } from 'src/app/_modules/card-details';
import { CardService } from 'src/app/_service/card.service';

@Component({
  selector: 'app-vpay-home-page',
  templateUrl: './vpay-home-page.component.html',
  styleUrls: ['./vpay-home-page.component.css']
})
export class VPayHomePageComponent implements OnInit {

  totalDue : any;
  minDue : any;
  cardHolderName! : string;

  constructor(private router: Router, private cardService: CardService) { }

  cards !: CardDetails[];
  ngOnInit(): void {

 let username = localStorage.getItem("username");
 this.cardService.mobileNumber(username).subscribe(data =>{
  localStorage.setItem('mobileNumber', data);
  if(data!== ""){
    console.log("CardHolderName: "+data)
    this.cardHolderName = data;
    
    this.cardService.totalDue(this.cardHolderName).subscribe(data =>{
      if(data!=null){
        console.log("not null");
        this.totalDue= data;
        localStorage.setItem('totalDue', this.totalDue);
        //localStorage.setItem('totalDue', this.totalDue);
      }
      else{
        console.log(" null");
        this.totalDue= 0;
        localStorage.setItem('totalDue', this.totalDue)
      }
      })
  
      this.cardService.minDue(this.cardHolderName).subscribe(data =>{
        if(data!=null){
          this.minDue= data;
          localStorage.setItem('minDue', this.minDue);
        }
        else{
          this.minDue = 0;
          localStorage.setItem('minDue', this.minDue);
        }
       })
  }
  else{
   this.totalDue=0;
   this.minDue=0;
  }
  
 })

 
 
 this.cardService.listOfCards(localStorage.getItem("mobileNumber")).subscribe(data =>{
  // data.cardNumber.replace(/.(?=.{4})/g, "#");
  // cc.replace(/.(?=.{4})/g, "#");
  this.cards = data;
 })
}
  addCards(){
       this.router.navigate(['addCards']);
  }

  doPayment(){

    
    if( this.cards.length<=0){
       alert("Please add card");
    }
    else{
      this.router.navigate(['payment']);
    }
    
  }

}
