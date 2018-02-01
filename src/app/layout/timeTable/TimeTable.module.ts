import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http'
import { DataService } from '../../shared/services/index'
import { TimeTableRoutingModule } from './TimeTable-routing.module';
import { TimeTableComponent } from './TimeTable.component';
import { PageHeaderModule } from './../../shared';
import {PageHeaderComponent} from './../../shared/modules/page-header/page-header.component'
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
    imports: [CommonModule, TimeTableRoutingModule,PageHeaderModule,HttpModule,HttpClientModule,NgxPaginationModule],
    declarations: [TimeTableComponent],
    providers: [DataService]
})
export class TimeTableModule {}
