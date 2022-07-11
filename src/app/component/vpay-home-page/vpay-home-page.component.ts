import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vpay-home-page',
  templateUrl: './vpay-home-page.component.html',
  styleUrls: ['./vpay-home-page.component.css']
})
export class VPayHomePageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  addCards(){
       this.router.navigate(['addCards']);
  }
}
