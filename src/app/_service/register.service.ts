import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  baseUrl!:string;

  constructor(private http:HttpClient) { 
    this.baseUrl = environment.baseUrl;
  }

  registerUser(user : any){
    alert("In service");
    console.log(user);
     return this.http.post(`${this.baseUrl}/vpay/login/registerUser`,user);
  }

  get(){
    return this.http.get(`${this.baseUrl}/vpay/login/get`);
  }
}
