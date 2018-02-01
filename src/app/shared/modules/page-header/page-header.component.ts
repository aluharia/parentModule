import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';
import {DataService } from '../../services/index'

@Component({
    selector: 'app-page-header',
    templateUrl: './page-header.component.html',
    styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {
    @Input() heading: string;
    @Input() icon: string;
    lUsers: any[];
    curUser: any;
    constructor(private data: DataService) {
        //console.log(JSON.parse(localStorage.getItem('stuArr')));
        this.lUsers = JSON.parse(localStorage.getItem('stuArr'));
       // console.log("INSIDE"+JSON.stringify(this.lUsers[0]));
        this.curUser= JSON.stringify(this.lUsers[0]);
        this.data.changeMessage((this.curUser));
    }

    ngOnInit() {}

    setNewUser(id: any): void {
        // Match the selected ID with the ID's in array
        this.curUser = this.lUsers.filter(value => value.STUDENT_MST_ID === parseInt(id))[0];
        localStorage.setItem('curUser', JSON.stringify(this.curUser));
        this.data.changeMessage((this.curUser));
        //console.log(this.curUser);
        this.test();
    }

    @Output() childEvent = new EventEmitter();
    test(){
    this.childEvent.emit('this is a test');
    }
}
