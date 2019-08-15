
import { Injectable } from '@angular/core';
import { RequestOptions,Headers, Http } from '@angular/http';

/*
  Generated class for the DataaccessProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataaccessProvider {

  constructor(public http: Http) {
    console.log('Hello DataaccessProvider Provider');
  }
  
  GET(url){
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    const requestOptions = new RequestOptions({ headers: headers });
   return this.http.get(url,requestOptions);

  }
  POST(url,postData){

    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    const requestOptions = new RequestOptions({ headers: headers });
   return this.http.post(url, postData, requestOptions)
  }
  PUT(url,postData){
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    const requestOptions = new RequestOptions({ headers: headers });
   return this.http.put(url, postData, requestOptions)
  }
  DELETE(url){
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    const requestOptions = new RequestOptions({ headers: headers });
   return this.http.delete(url, requestOptions)
  }
}
