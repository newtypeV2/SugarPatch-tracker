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

  constructor(private http: HttpClient) { }

  authenticateUser = (userData) => {
    return this.http.post(this.BASE_URL+'/login',userData, httpOptions)
    
    // this.http.post(this.BASE_URL+'/login',userData, httpOptions).subscribe(data => {
    //   this.currentUser = data;
    //   if(this.currentUser.hasOwnProperty('id')){
    //     this.router.navigate(['/records']);
    //   }
    // });
   
  }

  getUser = () => {
    return this.http.post(this.BASE_URL+'/login',{token: localStorage.getItem("token")}, httpOptions)
  }

}
