import { LoginServiceService } from '../../login-service.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() submitEmitter = new EventEmitter();
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })
  
  constructor(private loginService : LoginServiceService) {}

  ngOnInit() {
   
  }

  onSubmit = () => {
    this.loginService.authenticateUser(this.loginForm.value);
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
