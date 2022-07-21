import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { CardDetails } from 'src/app/_modules/card-details';
import { CardService } from 'src/app/_service/card.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  constructor(private cardService : CardService ,private router: Router) { }

  // dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any>= new Subject();
  cards !: CardDetails[];

  ngOnInit(): void {
        
    this.cardService.listOfCards(localStorage.getItem("mobileNumber")).subscribe(data =>{
      this.cards = data;
     
    })
  }

}
