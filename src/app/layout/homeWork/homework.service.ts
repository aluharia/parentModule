import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { HttpHeaders,HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Component } from '@angular/core/src/metadata/directives';
import { HomeworkModule } from './homework.module';
import { concat } from 'rxjs/observable/concat';
import {web_url} from '../../globalVar';

@Injectable()
export class HomeworkService {	
    homeworkUrl = web_url+"getHomework";
    constructor(private http: Http, private http1: HttpClient) {
    }
    public callDataService(currStu: any): Observable<any> {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        let result;
        //console.log(currentUser.token);
        let param = new HttpParams() ;
        param = param.append('divId', currStu.DIVISION_MST_ID);
        param = param.append('classId', currStu.CLASS_MST_ID);
        param = param.append('stuMstId', currStu.STUDENT_MST_ID);
        
        //console.log(JSON.stringify(param));
        let cpHeaders = new Headers({ 'Content-Type': 'application/json','Authorization': 'Bearer ' + currentUser.token});
		let options = new RequestOptions({ 'headers': cpHeaders });
	
        return this.http1.post(this.homeworkUrl,null,
            {
                headers: new HttpHeaders().set('Authorization', 'Bearer ' + currentUser.token),
                params: param
            }
        );
			
    }
    
    private extractData(res: Response) {		
		let body = res.json();
		return body;
	}
	private handleError(error: Response | any) {
		console.error(error.message || error);
		return Observable.throw(error);
    }
    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            //console.log("Token::"+currentUser.token);
            let headers = new Headers({ 'Content-Type': 'application/json','Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}