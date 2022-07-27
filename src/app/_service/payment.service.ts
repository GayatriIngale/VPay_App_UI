import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  baseUrl : any;
  constructor(private http: HttpClient) { 
    this.baseUrl = environment.baseUrl;
  }

  getWalletAmount(userName : string){
    return this.http.get(`${this.baseUrl}/vpay/wallet/amount/`+userName,{responseType: 'text'});
  }

  clearDue(amount: any,mobileNumber : any){
    return this.http.get(`${this.baseUrl}/vPay/lender/clearDue/`+amount+`/`+mobileNumber,{responseType: 'text'});

  }
}
