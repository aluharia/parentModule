import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http'
import {DataService } from '../../shared/services/index'
import { HomeworkRoutingModule } from './homework-routing.module';
import { HomeworkComponent } from './homework.component';
import { PageHeaderModule } from './../../shared';
import {PageHeaderComponent} from './../../shared/modules/page-header/page-header.component'
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
    imports: [CommonModule, HomeworkRoutingModule,PageHeaderModule,HttpModule,HttpClientModule,NgxPaginationModule],
    declarations: [HomeworkComponent],
    providers: [DataService]
})
export class HomeworkModule {}
