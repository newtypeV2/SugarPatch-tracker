import { Record } from './model/record';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'auth-token'
  })
}

@Injectable({
  providedIn: 'root'
})



export class RecordService {
  private BASE_URL: string = 'http://localhost:3000/';

  constructor(private http : HttpClient) { }

  addRecord = (recordInfo):Observable<Record> => {
    // console.log('Posting to: ',this.BASE_URL+'record',' Data: ',recordInfo);
    return this.http.post<Record>(this.BASE_URL+'record',recordInfo, httpOptions);
  }

  editRecord = (recordObj) => {
    return this.http.patch(this.BASE_URL+'record/'+recordObj.id, recordObj,httpOptions)
  }

  editComment = (commentObj) => {
    return this.http.patch(this.BASE_URL+'comment/'+commentObj.id, commentObj,httpOptions)
  }

  }
