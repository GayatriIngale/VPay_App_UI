import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';

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
  
        return this.http.get(`${this.baseUrl}/vpay/login/user-validation`+'?username='+username +'&password='+password,{responseType: 'text'});
    
}


login1(username: string, password: string): Observable<Object> {
  const data = {  
    username: username,  
    password: password,  
  }; 
  return this.http.post(`${this.baseUrl}/vpay/login/user-validation`, data);
}

private keepAfterRouteChange = false;
private subject = new Subject<any>();

error(message: string, keepAfterRouteChange = false) {
  this.keepAfterRouteChange = keepAfterRouteChange;
  this.subject.next({ type: 'error', text: message });
}
}
