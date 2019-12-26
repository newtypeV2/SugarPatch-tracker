import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'auth-token'
  })
}

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  BASE_URL: string = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  loginUser = (userData) => {
    return this.http.post(this.BASE_URL+'/login',userData, httpOptions)
  }

}
