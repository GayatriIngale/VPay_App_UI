import { Component, OnInit } from '@angular/core';
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

  constructor(private offerService: OfferServiceService) { }

  ngOnInit(): void {
    this.offerService.getCardDetails(localStorage.getItem('username')).subscribe(
      // (data: any) => console.log("Data##"+data.json()), (error: any) => console.log(error))
      data =>
      {
    this.offers=data;
     
      console.log(data.length+"length");
      },error => console.log(error),
      );

  }
}
