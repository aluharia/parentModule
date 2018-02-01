import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {DataService } from '../../shared/services/data.service'

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    animations: [routerTransition()]
})
export class TablesComponent implements OnInit {
    constructor(private data:DataService) {}
    message:string;
    ngOnInit() {

        this.data.currentStudent.subscribe(message => this.message = message)
        console.log("getting::"+this.message);
    }

    test(msg){
        console.log("INSIDE TEST::"+msg);
        }
}
