import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../../router.animations';

@Component({
    selector: 'app-stat',
    templateUrl: './stat.component.html',
    styleUrls: ['./stat.component.scss'],
    animations: [routerTransition()]
})
export class StatComponent implements OnInit {
    @Input() bgClass: string;
    @Input() icon: string;
    @Input() count: number;
    @Input() label: string;
    @Input() data: number;
    @Output() event: EventEmitter<any> = new EventEmitter();

    constructor(public router: Router) {}

    ngOnInit() {}

    onCardClick()
    {
        
        //this.router.navigate(['/charts']);
        var label: string;
        label = this.label.toLowerCase();
          switch (label) {
            case "homework":
              this.router.navigate(['/homework']);
              break;
            case "teacher remark":
              this.router.navigate(['/tRemark']);
              break;
            case "attendence":
              this.router.navigate(['/attendence']);
              break;
            case "profile":
              this.router.navigate(['/profile']);
              break;
            }
    }
}
