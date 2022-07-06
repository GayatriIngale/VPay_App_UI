import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl!:string;
  constructor(private http:HttpClient) { 
    this.baseUrl = environment.baseUrl;
  }

  login(username: string, password: string) {
    console.log("p"+password+"u"+username);
  
        return this.http.get(`${this.baseUrl}/api/user-validation`+'?username='+username +'&password='+password,{responseType: 'text'});
    
}
}
