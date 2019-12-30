import { Record } from './../../model/record';

import { RecordService } from './../../record.service';
import { LoginServiceService } from './../../login-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.css']
})
export class RecordListComponent implements OnInit {
  records: Record[];

  constructor(private loginService : LoginServiceService, private recordService: RecordService) { }
  
  ngOnInit() {
    // this.records = this.loginService.currentUser.sugar_records;
    this.recordService.getRecords(this.loginService.currentUser.id).subscribe(data => {
      this.records = data;
    })
  }

  editRecord = (recordObj) => {
    let value = prompt("Please enter new Bloodsugar level:",recordObj.value);
    while(!(parseFloat(value) > 0)){
      value = prompt("Please enter new Bloodsugar level:",recordObj.value);
    }
    let record:Record = {
      id: parseInt(recordObj.id),
      value: parseFloat(value),
    }
    this.recordService.editRecord(record).subscribe(data =>{
     this.records = this.records.map(record => record.id === data.id ? data : record)
    })
  }

  editComment = (commentObj) => {
    let text = prompt("Please enter new Comment",commentObj.text);
    let comment = {
      id: commentObj.id,
      text
    }
    debugger
    this.recordService.editComment(comment).subscribe(data =>{
     this.records = this.records.map(record => record.id === data.id ? data : record)
    })
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
