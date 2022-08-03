import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KycService {

 
  baseUrl!:string;

  constructor(private http:HttpClient) { 
    this.baseUrl = environment.baseUrl;
  }

  kycUser(user : any)  : Observable<any>{
    console.log("In service");
   // console.log(user);
     return this.http.post(`${this.baseUrl}/vpay/login/kycUser`,user);
  }
  saveKyc(kyc : any, userName :any)  : Observable<any>{
    
  const data=  {  
        username: userName, 
        address: kyc.address,
        salary: kyc.salary,
        pan: kyc.panNumber,
        uid:kyc.uid 
      };      return this.http.post(`${this.baseUrl}/vpay/kyc/addKyc`,data);
  }
  
  checkKyceCust(mobileNumber: any) {
   
    return this.http.get(`${this.baseUrl}/vpay/kyc/checkKyc/${mobileNumber}`,{responseType: 'text'});
  }
  checkLoan(mobileNumber: any) {
   
    return this.http.get(`${this.baseUrl}/vpay/kyc/checLoan/${mobileNumber}`,{responseType: 'text'});
  }

  get(){
    return this.http.get(`${this.baseUrl}/vpay/login/get`, {responseType: 'text'});
  }
}
function responseType(arg0: string, responseType: any, arg2: string): Observable<any> {
  throw new Error('Function not implemented.');
}

