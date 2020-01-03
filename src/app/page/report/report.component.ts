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

  dropdownValue: string = "Last 7 days";
  records: Record[];

  ngOnInit() {
      this.recordService.getRecords(this.loginService.currentUser.id).subscribe(data => {
        this.records = data.slice(-7);
      this.records.sort((a:any, b:any) => Date.parse(b.date) - Date.parse(a.date))
      this.generateChart();
      console.log(this.records,"INIT")
    })
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
      })
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
    console.log("GNERATING CHART",'Canvas found', ctx);
  }

  updateDropDown = (e) => {
    this.dropdownValue = e.currentTarget.innerText;
    this.recordService.getRecords(this.loginService.currentUser.id).subscribe(data => {
      switch (this.dropdownValue) {
        case "Last 7 days":
          this.records = data.slice(-7);
          break;
        case "Last 30 days":
          this.records = data.slice(-30);
          break;
        default:
          break;
      }
    this.records.sort((a:any, b:any) => Date.parse(b.date) - Date.parse(a.date))
    this.generateChart();
    console.log(this.records);
   })
  }


}

