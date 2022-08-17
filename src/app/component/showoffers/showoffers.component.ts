import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offers } from 'src/app/_modules/Offers';
import { KycService } from 'src/app/_service/KycService';
import { OfferServiceService } from 'src/app/_service/offer-service.service';

@Component({
  selector: 'app-showoffers',
  templateUrl: './showoffers.component.html',
  styleUrls: ['./showoffers.component.css']
})
export class ShowoffersComponent implements OnInit {
  dataSource: any;
offers: Offers[] = [];
  isBalance: boolean = false;
  isLoan: boolean = false;
  displayedColumns: string[] = ['Card Number', 'Offer from', 'Total Due', 'Offer Description', 'Select'];
  displayedColumns1: string[] = ['Offer From', 'Offer', 'Select'];
  loanExists: boolean = false;

  constructor(private offerService: OfferServiceService, private kycService: KycService, private router: Router) { }

  ngOnInit(): void {
    
   

  }

  onSelect(selectedItem: any) {
    console.log("Selected item Id: ", selectedItem.id); // You get the Id of the selected item here
    this.router.navigate(['/viewOffer'], selectedItem);

}
balance(){
this.isBalance = true;
this.isLoan = false;
this.offerService.getBalance(localStorage.getItem('username'), localStorage.getItem('mobileNumber')).subscribe(

data =>{
  this.offers=data;
  // localStorage.setItem('offers', this.offers);

    console.log(data.length+"length");
    },(error: any) => console.log(error),
);
}
loan(){
  this.isLoan = true;
  this.isBalance = false;
  this.kycService.checkLoan(localStorage.getItem('mobileNumber')).subscribe(data =>{
    if (data == "Success"){
      this.loanExists = true;
    }
  })


if(!this.loanExists){
  this.offerService.getOffers(localStorage.getItem('username'), localStorage.getItem('mobileNumber')).subscribe(
    // (data: any) => console.log("Data##"+data.json()), (error: any) => console.log(error))
    data =>
    {
  this.offers=data;
  // localStorage.setItem('offers', this.offers);

    console.log(data.length+"length");
    },(error: any) => console.log(error),
    );

  
}
}
}
 


