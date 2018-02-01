import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {DataService } from '../../shared/services/data.service'

@Component({
    selector: 'app-bs-element',
    templateUrl: './bs-element.component.html',
    styleUrls: ['./bs-element.component.scss'],
    animations: [routerTransition()]
})
export class BsElementComponent implements OnInit {
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
