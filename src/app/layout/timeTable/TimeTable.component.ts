import { Component, OnInit,NgZone,Input } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { PageHeaderModule } from './../../shared';
import {DataService } from '../../shared/services/index'
import {TimeTableService} from './TimeTable.service'
import { error } from 'selenium-webdriver';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
    selector: 'app-timeTable',
    templateUrl: './TimeTable.component.html',
    styleUrls: ['./TimeTable.component.scss'],
    animations: [routerTransition()],
    providers:[TimeTableService, DataService]
})
export class TimeTableComponent implements OnInit {
    selectedName:any;
    constructor(private zone:NgZone, PageHeaderModule : PageHeaderModule, private data:DataService, private timeTableService: TimeTableService) {
    }
   message:string;
   @Input() tableData:any;
   @Input() tableList:boolean;
   //for table data
   @Input() tableHeader=[];
   @Input() monRow = [];
   @Input() tueRow = [];
   @Input() wedRow = [];
   @Input() thuRow = [];
   @Input() friRow = [];
   @Input() satRow = [];
   
   //Student Data
   @Input() stuData: any;
   //initializing p to one FOR pagination
  p: number = 1;
    ngOnInit() {
        this.data.currentStudent.subscribe(message => this.message = message)
        console.log("getting::"+this.message);
        
        this.callData(JSON.parse(this.message));
    }

    // After StudentChange
    test(msg){ 
        this.callData((msg));
       // console.log("INSIDE TEST::"+JSON.stringify(msg));
        }

        
    //For getting Table data.
    callData(currStu: any){
        this.stuData = currStu;
        //console.log("InsideCalldata:::"+(currStu));
        this.timeTableService.callDataService(currStu).subscribe(data=>{
            this.tableHeader=[];
            this.monRow = [];
            this.tueRow = [];
            this.wedRow = [];
            this.thuRow = [];
            this.friRow = [];
            this.satRow = [];
            this.tableData = data;
            data.forEach(element => {
                
                //for header
                let hObj = {
                    "PERIOD_NO":element.PERIOD_NO,
                    "PERIOD_DURATION":element.PERIOD_DURATION
                };
                this.tableHeader.push(hObj);
                //for mondayRow
                let monObj = {
                    "MON_SUB":element.MON_SUB,
                    "MON_TCH":element.MON_TCH
                };
                this.monRow.push(monObj);
                //for TuesdayRow
                let tueObj = {
                    "TUE_SUB":element.THU_SUB,
                    "TUE_TCH":element.THU_TCH
                };
                this.tueRow.push(tueObj);
                //for WednesdayRow
                let wedObj = {
                    "WED_SUB":element.WED_SUB,
                    "WED_TCH":element.WED_TCH
                };
                this.wedRow.push(wedObj);
                //for ThursdayRow
                let thuObj = {
                    "THU_SUB":element.THU_SUB,
                    "THU_TCH":element.THU_TCH
                };
                this.thuRow.push(thuObj);
                //for FridayRow
                let friObj = {
                    "FRI_SUB":element.FRI_SUB,
                    "FRI_TCH":element.FRI_TCH
                };
                this.friRow.push(friObj);
                //for SaturdayRow
                let satObj = {
                    "SAT_SUB":element.SAT_SUB,
                    "SAT_TCH":element.SAT_TCH
                };
                this.satRow.push(satObj);
            });
            console.log(this.monRow);
           // this.tableHeader.push(monRow)
           // console.log(this.tableData)
            if(this.tableData.length === 0)
                this.tableList = false;
            else
                this.tableList = true;
             //this.tableData.detectChanges();
        },
        (err: HttpErrorResponse)=>{
            if (err.error instanceof Error) {
              // A client-side or network error occurred. Handle it accordingly.
              console.log('An error occurred:', err.error.message);
            } else {
              // The backend returned an unsuccessful response code.
              // The response body may contain clues as to what went wrong,
              console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
            }
          })
    }
    
}
