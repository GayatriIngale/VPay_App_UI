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
  

  get(){
    return this.http.get(`${this.baseUrl}/vpay/login/get`, {responseType: 'text'});
  }
}
