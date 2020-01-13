import { RecordService } from './../../record.service';
import { LoginServiceService } from './../../login-service.service';
import { Record } from './../../model/record';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Chart from 'chart.js';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor(private loginService : LoginServiceService, private recordService: RecordService, private router : Router) { }

  dropdownValue: string;
  records: Record[];
  currentUser;

  ngOnInit() {
    this.loginService.getUser().subscribe(data => {
      this.currentUser = data;
      this.dropdownValue = "Last 7 days"
      this.updateDropDown(null);
    });
    
  }

  navigateToRecord = () => {
    this.router.navigate(["records"]);
  }

  generateChart = () => {
    let ctx = document.getElementById('myChart');
    ctx.style.marginTop = "1rem";
    let recordData = {
      datasets: [{
        label: this.dropdownValue,
        data: this.records.map(record => record.value),
        backgroundColor: 'rgba(255,0,0,.7)',
        fill: 'false',
        borderColor: 'rgba(0,0,0,.4)',
        showLine: 'true'
      }],
      labels: this.records.map(record => {
        let recDate = new Date(record.date);
        return `${recDate.getMonth()+1}/${recDate.getDate()}/${recDate.getFullYear()}`
      }),
    }
    let myChart = new Chart(ctx, {
      type: 'line',
      data: recordData,
      options: {
        title: {
          display: true,
          text: this.dropdownValue
        },
        point: {
          backgroundColor: 'rgba(255, 0,0, 1)'
        }
        
      }
    });
  }

  updateDropDown = (e) => {
    if(e !== null){
      this.dropdownValue = e.currentTarget.innerText;
    }
    if(this.currentUser !== undefined){
      this.recordService.getRecords(this.currentUser.id).subscribe(data => {
        let dLimit = new Date(Date.now());
        let cDate = new Date(Date.now());
        switch (this.dropdownValue) {
          case "Last 7 days":
            this.setHMS(dLimit,0,0,0);
            dLimit.setDate(dLimit.getDate()-7);
  
            this.records = data.filter(record => {
              if(new Date(record.date) >= dLimit && new Date(record.date) <=cDate){
              return record
              }
            })
  
            break;
          case "Last 30 days":
            this.setHMS(dLimit,0,0,0);
            dLimit.setDate(dLimit.getDate()-30);
            
            this.records = data.filter(record => {
              if(new Date(record.date) >= dLimit && new Date(record.date) <=cDate){
              return record
              }
            })
  
            break;
          default:
            break;
        }
      this.records.sort((a:any, b:any) => Date.parse(a.date) - Date.parse(b.date))
      this.generateChart();
     })
    }
    
  }

  setHMS = (dateObj:Date, h:number, m:number, s:number) => {
    dateObj.setHours(h);
    dateObj.setMinutes(m);
    dateObj.setSeconds(s);
  }


}

