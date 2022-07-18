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

  addCards(cardDetails : any,  panNumber :any )  : Observable<any>{
    return this.http.post(`${this.baseUrl}/vpay/card/save/`+panNumber,cardDetails,{responseType: 'text'} );
  }

  totalDue(cardHolderName : string){
    //console.log("in total due: "+cardHolderName)
   // alert("In service: "+cardHolderName);
    return this.http.get(`${this.baseUrl}/vPay/lender/totalDue/`+cardHolderName);

  }

  minDue(cardHolderName : string){
    return this.http.get(`${this.baseUrl}/vPay/lender/minDue/`+cardHolderName);

  }

  mobileNumber(userName : any){
    return this.http.get(`${this.baseUrl}/vpay/login/mobileNumber/`+userName,{responseType: 'text'} );
  }

  // getOwnerList(username): Observable<any> {
   
  //   return this.http.get(`${this.baseUrl}/api/owner-List/${username}`);
  // }
}
