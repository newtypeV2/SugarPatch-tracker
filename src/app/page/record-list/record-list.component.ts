
import { RecordService } from './../../record.service';
import { LoginServiceService } from './../../login-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.css']
})
export class RecordListComponent implements OnInit {
  records: Object[];

  constructor(private loginService : LoginServiceService, private recordService: RecordService) { }
  
  ngOnInit() {
    this.records = this.loginService.currentUser.sugar_records;
    console.log("INIT",this.records);
  }

  addRecord = () => {
    let value = prompt("Please enter the Bloodsugar level:","0.0");
    while(!(parseFloat(value) > 0)){
      value = prompt("Please enter the Bloodsugar level:","0.0");
    }
    let text = prompt("Please enter a comment for this record.");
    let user = this.loginService.currentUser;
    let userData = {
      user_id: user.id,
      value: parseFloat(value),
      comment: text
    }
    this.recordService.addRecord(userData).subscribe(data => {
      // this.loginService.newRecord(data);
      this.records.push(data);
      console.log(this.records)
    });
  }
}
