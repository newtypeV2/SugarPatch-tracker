import { UserService } from './../../user.service';
import { LoginServiceService } from '../../login-service.service';
import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  currentUser: User;
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })
  
  constructor(private loginService : LoginServiceService, private userService : UserService, private router : Router) {
    this.subscription = userService.userLoggedIn$.subscribe( user => {
      this.currentUser = user;
    });
  }

  ngOnInit() {
   
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onSubmit = () => {
    this.loginService.authenticateUser(this.loginForm.value).subscribe(data => {
      console.log(data);
      if(data.hasOwnProperty("token")){
        localStorage.setItem("token", data["token"])
        this.router.navigate(['/records']);
      }
      // localStorage.setItem("token",data.token)
    });
    // this.submitEmitter.emit(this.loginForm.value);
    // fetch('http://localhost:3000/login',{
    //   method: 'POST',
    //   headers: {'Content-Type' : 'application/json'},
    //   body: JSON.stringify(this.loginForm.value)
    // })
    // .then(res => res.json())
    // .then(console.log)
  }

}
