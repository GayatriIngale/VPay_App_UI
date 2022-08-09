import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  getWallet(userName : string){
    return this.http.get(`${this.baseUrl}/vpay/wallet/`+userName);
  }

  clearDue(amount: any,mobileNumber : any){
    return this.http.get(`${this.baseUrl}/vPay/lender/clearDue/`+amount+`/`+mobileNumber,{responseType: 'text'});

  }
  
  check(id: number[], amount : number[], balance : any, type : string){
    return this.http.get(`${this.baseUrl}/vPay/lender/clearSelected/`+id+`/`+amount+`/`+balance+`/`+type,{responseType: 'text'});
  }

  savingAccount(id: number[], amount : number[], balance : number,   accountNo: number, pin : string, type : string){
    alert("In service");
    return this.http.get(`${this.baseUrl}/vPay/lender/saving/account/`+id+`/`+amount+`/`+balance+`/`+accountNo+`/`+pin+`/`+type,{responseType: 'text'});

  }

  savingAndwallet(id: number[], amount : number[], savingAmount : number, walletAmount:number,   accountNo: number, pin : string, type: string){
    console.log("In service");
    return this.http.get(`${this.baseUrl}/vPay/lender/saving/wallet/`+id+`/`+amount+`/`+savingAmount+`/`+walletAmount+`/`+accountNo+`/`+pin+`/`+type,{responseType: 'text'})
  }

  //saving/wallet/{id}/{amount}/{savingAmount}/{walletAmount}/{accountNo}/{pin}

  getHistory(referenceNo : any){

  return this.http.get(`${this.baseUrl}/payment/history/get/`+referenceNo);
}

listOfHistory(referenceNo: string | null): Observable<any> {
   
  return this.http.get(`${this.baseUrl}/payment/history/get/${referenceNo}`);
}
}
