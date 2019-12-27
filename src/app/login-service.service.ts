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
  public currentUser;

  constructor(private http: HttpClient, private router : Router) { }

  authenticateUser = (userData) => {
    this.http.post(this.BASE_URL+'/login',userData, httpOptions).subscribe(data => {
      this.currentUser = data;
      if(this.currentUser.hasOwnProperty('id')){
        this.router.navigate(['/records']);
      }
    });
   
  }

}
