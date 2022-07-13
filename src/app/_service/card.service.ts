import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  baseUrl!:string;

  constructor(private http:HttpClient) { 
    this.baseUrl = environment.baseUrl;
  }

  addCards(cardDetails : any)  : Observable<any>{
    return this.http.post(`${this.baseUrl}/vpay/card/addCard`,cardDetails);
  }

  totalDue(cardHolderName : string){
    //console.log("in total due: "+cardHolderName)
    return this.http.get(`${this.baseUrl}/vPay/banks/totalDue/`+cardHolderName);

  }

  minDue(cardHolderName : string){
    return this.http.get(`${this.baseUrl}/vPay/banks/minDue/`+cardHolderName);

  }

  cardHolderName(userName : any){
    return this.http.get(`${this.baseUrl}/vpay/card/cardHolderName/`+userName,{responseType: 'text'} );
  }

  // getOwnerList(username): Observable<any> {
   
  //   return this.http.get(`${this.baseUrl}/api/owner-List/${username}`);
  // }
}
