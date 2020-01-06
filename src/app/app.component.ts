import { UserService } from './user.service';
import { User } from './model/user';
import { LoginServiceService } from './login-service.service';
import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Sugar Patch Tracker';
  public currentUser:User;

  constructor(private loginService:LoginServiceService, private router: Router, private userService: UserService){
    userService.userLoggedIn$.subscribe(
      user => {
        this.currentUser = user.user_data;
        console.log(this.currentUser);
      }
    )
  }

  ngOnInit(){
    // if (this.loginService.currentUser === undefined || this.loginService.currentUser.hasOwnProperty('message')){
    if(localStorage.getItem("token")){
      this.router.navigate(['/records']);
    }else{
      this.router.navigate(['/login']);
    }
  }

}
