import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offers } from 'src/app/_modules/Offers';
import { NotificationService } from 'src/app/_service/notification.service';
import { OfferServiceService } from 'src/app/_service/offer-service.service';

@Component({
  selector: 'app-auth-adhaar',
  templateUrl: './auth-adhaar.component.html',
  styleUrls: ['./auth-adhaar.component.css']
})
export class AuthAdhaarComponent implements OnInit {

  constructor(private router: Router, private offerservice: OfferServiceService, private notificationService : NotificationService) { }
  isSubmitted = false;
  isNext = false;
  offers : any;
  ngOnInit(): void {
    this.isSubmitted = false;

  }
  success() {
    
    this.notificationService.showSuccess("Verification done", "");
    // alert("Verification done")
    this.isSubmitted = true;

    // stop here if form is invalid
  }
  next(){
this.isNext=true;

  }

  nextScore(){
// Service to get offers from cibil score
this.offerservice.getOffersFromScore(localStorage.getItem('mobileNumber')).subscribe(data => {

//this.offers = data;
});
this.router.navigateByUrl('/showOffers')

}

  withoutScore(){
    // Service to get all Offers
  }
}
