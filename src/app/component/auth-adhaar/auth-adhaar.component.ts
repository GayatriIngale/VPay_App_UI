import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-adhaar',
  templateUrl: './auth-adhaar.component.html',
  styleUrls: ['./auth-adhaar.component.css']
})
export class AuthAdhaarComponent implements OnInit {

  constructor(private router: Router) { }
  isSubmitted = false;
  ngOnInit(): void {
    this.isSubmitted = false;

  }
  success() {
    

    alert("Verification done")
    this.isSubmitted = true;

    // stop here if form is invalid
  }
  next(){
    this.router.navigateByUrl('/showOffers')

  }
}
