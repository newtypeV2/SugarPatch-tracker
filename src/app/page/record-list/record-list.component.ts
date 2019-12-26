import { LoginServiceService } from './../../login-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.css']
})
export class RecordListComponent implements OnInit {

  constructor(private loginService : LoginServiceService) { }

  ngOnInit() {
  }

}
