import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BuscarCepService {

  public cepUrl = 'https://localhost:44370/api/';

  public error: any = "";

  constructor(private http: HttpClient) { }
  

  listar(cepvalor){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      })
    };
    return this.http.get(this.cepUrl + 'BuscarCep/' + cepvalor, httpOptions) 
  }

   logar(usuario: string, senha: string){
     const httpOptions = {
       headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
         'Accept': 'application/json'
       })
     };
     return this.http.get(this.cepUrl + 'values?login=' + usuario +'&senha='+ senha, httpOptions) 
   }
}
