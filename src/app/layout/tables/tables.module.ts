import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataService } from '../../shared/services/index'
import { TablesRoutingModule } from './tables-routing.module';
import { TablesComponent } from './tables.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, TablesRoutingModule, PageHeaderModule],
    declarations: [TablesComponent],
    providers: [DataService]
})
export class TablesModule {}
