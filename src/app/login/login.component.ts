import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
  
  constructor() { 
    
  }

  ngOnInit() {
  }

  onSubmit = () => {
    this.submitEmitter.emit(this.loginForm.value);
    // fetch('http://localhost:3000/login',{
    //   method: 'POST',
    //   headers: {'Content-Type' : 'application/json'},
    //   body: JSON.stringify(this.loginForm.value)
    // })
    // .then(res => res.json())
    // .then(console.log)
  }

}
