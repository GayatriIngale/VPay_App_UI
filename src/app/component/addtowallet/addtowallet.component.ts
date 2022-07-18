import { Component, OnInit } from '@angular/core';
import { OfferServiceService } from 'src/app/_service/offer-service.service';

@Component({
  selector: 'app-addtowallet',
  templateUrl: './addtowallet.component.html',
  styleUrls: ['./addtowallet.component.css']
})
export class AddtowalletComponent implements OnInit {

  constructor(private offerService: OfferServiceService) { }
  isSubmitted = false;
isNext = false;
response: any;

  ngOnInit(): void {
this.isSubmitted=true;
    this.isNext = false;

  }

  next(){
    this.isSubmitted=false;
    this.isNext=true;
    this.offerService.addToWallet(localStorage.getItem('username'),100).subscribe(data => {
      this.response = data;
      console.log("DATA: "+data);
      

    })

  }
}


