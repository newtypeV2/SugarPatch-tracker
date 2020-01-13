import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


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
  private BASE_URL: string = 'http://localhost:3000/';
  // private BASE_URL: string = 'https://sugartracker-gg.herokuapp.com/'
  public currentUser;

  constructor(private http: HttpClient) { }

  authenticateUser = (userData) => {
    return this.http.post(this.BASE_URL+'/login',userData, httpOptions)
  }

  getUser = () => {
    return this.http.post(this.BASE_URL+'/login',{token: localStorage.getItem("token")}, httpOptions)
  }

  isAuthenticated = () => {
    return (!!localStorage.getItem("token"));
  }

}
