import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  public cepUrl = 'https://localhost:44394/api/';
  static logout: any;

  constructor(private http: HttpClient) { }


  // async login(user: any){
  //   const result = await this.http.post<any>(`this.cepUrl/auth/login`, user).toPromise();
  //   if(result && result.access_token){
  //     window.localStorage.setItem('token', result.access_token);
  //     return true;
  //   }
  // }

  login(user: any){
    return new Promise((resolve) => {
      window.localStorage.setItem('token', 'fQCwg+E+iBS0DzqIL8vWSw==');
      resolve(true);
    });
  }

  logout(){
    return new Promise((resolve) => {
      window.localStorage.setItem(null, null);
      resolve(false);
    });
  }


  createAccount(account: any){
    return new Promise((resolve) => {
      resolve(true);
    })
  }

}
