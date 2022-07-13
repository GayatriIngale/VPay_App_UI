import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  ngOnInit(): void {

 let username = localStorage.getItem("username");
 this.cardService.cardHolderName(username).subscribe(data =>{

  if(data!== ""){
    console.log("CardHolderName: "+data)
    this.cardHolderName = data;
    
    this.cardService.totalDue(this.cardHolderName).subscribe(data =>{
      if(data!=null){
        this.totalDue= data;
      }
      else{
        this.totalDue= 0;
      }
      })
  
      this.cardService.minDue(this.cardHolderName).subscribe(data =>{
        if(data!=null){
          this.minDue= data;
        }
        else{
          this.minDue = 0;
        }
       })
  }
  else{
   this.totalDue=0;
   this.minDue=0;
  }
  
 })
   
   
  }

  addCards(){
       this.router.navigate(['addCards']);
  }
}
