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
export class LoginComponent implements OnInit {
  subscription: Subscription;
  currentUser: User;
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })
  
  constructor(private loginService : LoginServiceService, private router : Router) {}

  ngOnInit() {
   
  }

  onSubmit = () => {
    this.loginService.authenticateUser(this.loginForm.value).subscribe(data => {
      if(data.hasOwnProperty("token")){
        localStorage.setItem("token", data["token"])
        this.router.navigate(['/records']);
      }
    });
  }

}
