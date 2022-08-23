import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //URL DA API JSON
  api: string = 'https://renovaai.developeranddesigner.com.br/api/';

  constructor(
   public http: HttpClient
 ) { }

 postData(body, file){
     let headers = new HttpHeaders({
         'Content-Type': 'application/json; charset=UTF-8'
     });
     let options = {
        headers: headers 
     }

     return this.http.post(this.api + file, JSON.stringify(body), options)
     .timeout(59000) //59 segundos de timeout
     .map(res => res);
 }
 
}
