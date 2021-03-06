import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  baseUrl!:string;

  constructor(private http:HttpClient) { 
    this.baseUrl = environment.baseUrl;
  }

  registerUser(user : any)  : Observable<any>{
    console.log("In service");
   // console.log(user);
     return this.http.post(`${this.baseUrl}/vpay/login/registerUser`,user, {responseType: 'text'});
  }

  

  get(){
    return this.http.get(`${this.baseUrl}/vpay/login/get`, {responseType: 'text'});
  }
}
