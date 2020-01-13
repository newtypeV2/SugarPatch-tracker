import { Record } from './model/record';
import { Comment } from './model/comment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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
  // private BASE_URL: string = 'https://sugartracker-gg.herokuapp.com/'

  constructor(private http : HttpClient) { }

  addRecord = (recordInfo:any):Observable<Record> => {
    return this.http.post<Record>(this.BASE_URL+'record',recordInfo, httpOptions);
  }

  editRecord = (recordObj:Record) => {
    return this.http.patch<Record>(this.BASE_URL+'record/'+recordObj.id, recordObj,httpOptions)
  }

  editComment = (commentObj:Comment) => {
    return this.http.patch<Record>(this.BASE_URL+'comment/'+commentObj.id, commentObj,httpOptions)
  }

  getRecords = (params:string) => {
    // return this.http.get(this.BASE_URL+'/record', { params: params})
    return this.http.get<Record[]>(this.BASE_URL+'/record', {
      params : new HttpParams().set('userId', params)
    })
  }

  }
