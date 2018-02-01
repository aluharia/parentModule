import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http'
import { DataService } from '../../shared/services/index'
import { AttendanceRoutingModule } from './Attendance-routing.module';
import { AttendanceComponent } from './Attendance.component';
import { PageHeaderModule } from './../../shared';
import {PageHeaderComponent} from './../../shared/modules/page-header/page-header.component'
import { CalendarModule } from 'angular-calendar';
@NgModule({
    imports: [CommonModule, AttendanceRoutingModule,PageHeaderModule,HttpModule,HttpClientModule,CalendarModule.forRoot()],
    declarations: [AttendanceComponent],
    providers: [DataService]
})
export class AttendanceModule {}
