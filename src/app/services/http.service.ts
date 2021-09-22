import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  post(url,body):Observable<any>{
    return this.http.post(url,body, {headers: new HttpHeaders({'Content-Type': 'application/json'})});
  }

}
