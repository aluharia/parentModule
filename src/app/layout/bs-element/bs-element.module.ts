import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataService } from '../../shared/services/index'
import { BsElementRoutingModule } from './bs-element-routing.module';
import { BsElementComponent } from './bs-element.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, BsElementRoutingModule, PageHeaderModule],
    declarations: [BsElementComponent],
    providers: [DataService]
})
export class BsElementModule {}
