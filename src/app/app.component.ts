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

  constructor(private loginService:LoginServiceService, private router: Router){}

  ngOnInit(){
    if (this.loginService.getCurrentUser() === undefined || this.loginService.getCurrentUser().hasOwnProperty('message')){
      this.router.navigate(['/login']);
    }else{
      this.router.navigate(['/records']);
    }
  }

}
