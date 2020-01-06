import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userLoggedInSource = new Subject<any>();
  
  userLoggedIn$ = this.userLoggedInSource.asObservable();

  loggedIn(user){
    this.userLoggedInSource.next(user);
  }

  constructor() { }
}
