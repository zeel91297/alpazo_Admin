import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SignUP, SignUP_RS, LoginR } from 'src/app/models/retailer_class';


@Injectable({
  providedIn: 'root'
})
export class UsersDBService {

  public signup_url = '';
  constructor(private _http: HttpClient) { }


  signupRetailerOnly(usr: SignUP) {
    // tslint:disable-next-line:prefer-const
    let body = JSON.stringify(usr);
    return this._http.post(this.signup_url, body, {headers : new HttpHeaders().set('Content-type' , 'application/json')});
  }

  signUpRetailerAndService(usr: SignUP_RS) {
    // tslint:disable-next-line:prefer-const
    let body = JSON.stringify(usr);
    return this._http.post(this.signup_url, body, {headers : new HttpHeaders().set('Content-type' , 'application/json')});
  }

  loginRetailer(ret: LoginR) {
    // tslint:disable-next-line:prefer-const
    let body = JSON.stringify(ret);
    return this._http.post(this.signup_url, body, {headers : new HttpHeaders().set('Content-type' , 'application/json')});
  }
}
