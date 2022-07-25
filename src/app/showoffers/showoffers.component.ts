import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offers } from '../_modules/Offers';
import { OfferServiceService } from '../_service/offer-service.service';

@Component({
  selector: 'app-showoffers',
  templateUrl: './showoffers.component.html',
  styleUrls: ['./showoffers.component.css']
})
export class ShowoffersComponent implements OnInit {
  dataSource: any;
offers: Offers[] = [];

  constructor(private offerService: OfferServiceService, private router: Router) { }

  ngOnInit(): void {
    this.offerService.getCardDetails(localStorage.getItem('username')).subscribe(
      // (data: any) => console.log("Data##"+data.json()), (error: any) => console.log(error))
      data =>
      {
    this.offers=data;
    // localStorage.setItem('offers', this.offers);
      
      console.log(data.length+"length");
      },error => console.log(error),
      );

  }

  onSelect(selectedItem: any) {
    console.log("Selected item Id: ", selectedItem.id); // You get the Id of the selected item here
    this.router.navigate(['/viewOffer'], selectedItem);

}
}
