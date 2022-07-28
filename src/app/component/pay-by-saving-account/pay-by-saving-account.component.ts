import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pay-by-saving-account',
  templateUrl: './pay-by-saving-account.component.html',
  styleUrls: ['./pay-by-saving-account.component.css']
})
export class PayBySavingAccountComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  check(){
    alert("It's working");
    //this.router.navigate(['payment']);
    alert("success");
  }
}
