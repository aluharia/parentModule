import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { Component } from '@angular/core/src/metadata/directives';


@Injectable()
export class LoginService {	
    loginUrl = "http://192.168.1.84:8090/api/login";
    constructor(private http: Http) {
    }
    public login(number: String): Observable<any> {
        
		let cpHeaders = new Headers({ 'Content-Type': 'application/json'});
		let options = new RequestOptions({ 'headers': cpHeaders });
		return this.http.post(this.loginUrl, number, options)
			.map(success => {
				// login successful if there's a jwt token in the response
                let token = success.headers.get("token");
                if (token) {
                   if(success.json().errorMsg == "")
                    {
                        localStorage.setItem('currentUser', JSON.stringify({ parent: success.json().name, token: token }));
                        
                    }
                   
                   return success.json();
                } else {
                    // return false to indicate failed login
                    return success.json();
                }				
			})
			
    }
    
    private extractData(res: Response) {		
		let body = res.json();
		return body;
	}
	private handleError(error: Response | any) {
		console.error(error.message || error);
		return Observable.throw(error);
	}
}