import { LoginServiceService } from './../../login-service.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() title:string;
  currentUser;
  constructor(private loginService:LoginServiceService) { }

  ngOnInit() {
    if(localStorage.getItem("token")){
      this.loginService.getUser().subscribe(data => {
        this.currentUser = data;
      })
    }
  }

  logoutHandler = () => {
    localStorage.removeItem("token");
  }

}
