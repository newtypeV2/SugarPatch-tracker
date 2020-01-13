import { LoginServiceService } from './../../login-service.service';
import { Component, OnInit, DoCheck, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {
  @Input() title:string;
  @Input() currentUser;

  constructor(private loginService:LoginServiceService) { }

  ngOnInit() {
  }

  ngDoCheck() {
    if(this.loginService.isAuthenticated() && !this.currentUser){
      this.loginService.getUser().subscribe(data => {
        this.currentUser = data;
      })
    }
  }

  logoutHandler = () => {
    localStorage.removeItem("token");
  }

}
