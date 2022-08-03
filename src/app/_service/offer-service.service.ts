import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OfferServiceService {
 
  baseUrl!:string;

  constructor(private http:HttpClient) { 
    this.baseUrl = environment.baseUrl;
  }
  getCardDetails(username : any)  : Observable<any>{
    console.log("In service");
   // console.log(user);
     return this.http.get(`${this.baseUrl}/vpay/offer/getOffers/${username}`);
  }
  getOffers(username : any, mobileNumber:any)  : Observable<any>{
    console.log("In service");
   // console.log(user);
     return this.http.get(`${this.baseUrl}/vpay/offer/getOffers/score/${mobileNumber}/${username}`);
  }

  addToWallet(username : any, amount : any)  : Observable<any>{
   // console.log(user);
   const data = {  
    username: username,  
    amount: amount,  
  };      return this.http.post(`${this.baseUrl}/vpay/offer/addWallet`, data);
  }

getAccounts(username:any){
  // console.log(user);
    return this.http.get(`${this.baseUrl}/vpay/accounts/getaccounts/${username}`);
 }
 balanceTransfer(input: any) : Observable<any>{
   return this.http.post(`${this.baseUrl}/vpay/accounts/transfer`, input);

 }
 loanTransfer(input: any) : Observable<any>{
  return this.http.post(`${this.baseUrl}/vpay/accounts/loantransfer`, input);

}

getOffersFromScore1(uid:any){
  // console.log(user);
    return this.http.get(`${this.baseUrl}/vpay/offer/getOffers/score/{uid}`);
 }

 getOffersFromScore(mobileNumber:any){
  // console.log(user);
    return this.http.get(`${this.baseUrl}/vpay/offer/saveScore/{mobileNumber}`);
 }
 getEmi(amount:any, rate:any, tennure:any){
  // console.log(user);
    return this.http.get(`${this.baseUrl}/vpay/offer/getOffers/getEmi/${amount}/${rate}/${tennure}`, {responseType :'text'});
 }
}
