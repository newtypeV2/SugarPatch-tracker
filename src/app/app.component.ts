import { LoginServiceService } from './login-service.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sugar-patch-tracker';
  loggedInUser = null;

  constructor(private loginService : LoginServiceService ){

  }


  handleSubmit = (userData) => {
    this.loginService.loginUser(userData).subscribe(data => {
      this.loggedInUser = data;
      console.log(this.loggedInUser);
    });
  }

}
