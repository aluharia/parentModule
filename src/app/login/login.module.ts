import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
    imports: [CommonModule, LoginRoutingModule,FormsModule,ReactiveFormsModule,HttpModule ],
    declarations: [LoginComponent],
    bootstrap:[LoginComponent]
    
})
export class LoginModule {
    mobile: Number
}



