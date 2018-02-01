import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { NgForm } from '@angular/forms';
import { LoginService } from "./login-service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()],
    providers:[LoginService]
})
export class LoginComponent implements OnInit {
    ngOnInit(){}
    name:String;
    errorMessage:String;
    constructor(public router: Router,private LoginService: LoginService) {
       // alert("INSIDE");
        if(localStorage.getItem('isLoggedin'))
        {
            this.router.navigate(['/dashboard']);
        }
    }
    
    keyPress(event: any) {
        const pattern = /[0-9\+\-\ ]/;
    
        let inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
          event.preventDefault();
        }
      }

    onLoggedin(form: NgForm) {
        var credentials:String;
        credentials = JSON.stringify(form.value);
       
    this.LoginService.login(credentials).subscribe(data=>{
        console.log(data)
        if(data.errorMsg == "")
        {
            localStorage.setItem('isLoggedin', 'true');
            localStorage.setItem('address', data.address);
            localStorage.setItem('name', data.name);
            localStorage.setItem('stuArr', JSON.stringify(data.stuArr));
            localStorage.setItem('mobile', data.mobile);
            
            this.router.navigate(['/dashboard']);
        }
        else{
            this.errorMessage = data.errorMsg;
        }
    })
        
    }

}
