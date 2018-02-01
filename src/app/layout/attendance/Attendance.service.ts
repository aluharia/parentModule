import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { HttpHeaders,HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators/map';
import { Component } from '@angular/core/src/metadata/directives';
import { AttendanceModule } from './Attendance.module';
import { concat } from 'rxjs/observable/concat';
import { CalendarEvent } from 'angular-calendar';
interface attandence {
    TRDATE:string;
    ATTENDANCE_YN:string;
    HOLIDAY_NAME:string;
  
  }
  

@Injectable()
export class AttendanceService {
      events$: Observable<Array<CalendarEvent<{ film: attandence }>>>;
    Url = "http://192.168.1.84:8090/api/getStudAtt";
    constructor(private http: Http, private http1: HttpClient) {
    }
    public callDataService(currStu: any,year: string,month:string):Observable<any>{
      let currentUser = JSON.parse(localStorage.getItem('currentUser'));
      let result;
      //console.log(currentUser.token);
      let param = new HttpParams() ;
      param = param.append('year', year);
      param = param.append('month', month);
      param = param.append('stuMstId', currStu.STUDENT_MST_ID);
      
      //console.log(JSON.stringify(param));
      let cpHeaders = new Headers({ 'Content-Type': 'application/json','Authorization': 'Bearer ' + currentUser.token});
      let options = new RequestOptions({ 'headers': cpHeaders });

     return this.http1.post(this.Url,null,
          {
              headers: new HttpHeaders().set('Authorization', 'Bearer ' + currentUser.token),
              params: param
          }
      )
  }
  
  private extractData(res: Response) {		
  let body = res.json();
  return body;
}
  
}