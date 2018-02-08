import { Component,ChangeDetectionStrategy, OnInit,NgZone,Input,EventEmitter,Output } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Subject } from 'rxjs/Subject';
import { PageHeaderModule } from './../../shared';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import {DataService } from '../../shared/services/index'
import {AttendanceService} from './Attendance.service'
import { error } from 'selenium-webdriver';
import {HttpErrorResponse} from '@angular/common/http';
import { CalendarEvent } from 'angular-calendar';
import {
  setHours,
  setMinutes,
  isSameMonth,
  isSameDay,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  startOfDay,
  endOfDay,
  format
} from 'date-fns';

@Component({
    selector: 'app-attendance',
    templateUrl: './Attendance.component.html',
    styleUrls: ['./Attendance.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [routerTransition()],
    providers:[AttendanceService, DataService]
})
export class AttendanceComponent implements OnInit {
  colors: any = {
    red: {
      primary: '#ad2121',
      secondary: '#FAE3E3'
    },
    blue: {
      primary: '#1e90ff',
      secondary: '#D1E8FF'
    },
    yellow: {
      primary: '#e3bc08',
      secondary: '#FDF1BA'
    }
  };

    selectedName:any;
    constructor(private http: HttpClient, private zone:NgZone, PageHeaderModule : PageHeaderModule, private data:DataService, private attendanceService: AttendanceService) {
    }
   message:string;
   @Input() tableData:any;
   @Input() tableList:boolean;
   @Output() viewDateChange: EventEmitter<Date> = new EventEmitter();

   //Student Data
   @Input() stuData: any;
   //initializing p to one FOR pagination
  p: number = 1;
  view: string = 'month';
  currStuData:any;
  viewDate: Date = new Date();

  //events$: Observable<Array<CalendarEvent>>;
  @Input() events=[];
  activeDayIsOpen: boolean = false;
  refresh: Subject<any> = new Subject();
  
    ngOnInit() {
        this.data.currentStudent.subscribe(message => this.message = message)
        console.log("getting::"+this.message);
        
        //this.callData(JSON.parse(this.message),this.viewDate);
        this.currStuData =JSON.parse(this.message);
        this.fetchDate();
        
    }

    // After StudentChange
    test(msg){ 
        //this.callData((msg),this.viewDate);
        this.currStuData = msg;
        this.fetchDate();
       // console.log("INSIDE TEST::"+JSON.stringify(msg));
        }
    fetchDate(){                                    // calling from directive change.
              const getStart: any = {
                month: startOfMonth,
                week: startOfWeek,
                day: startOfDay
              }[this.view];
          
              const getEnd: any = {
                month: endOfMonth,
                week: endOfWeek,
                day: endOfDay
              }[this.view];
              const year: any= format(getStart(this.viewDate), 'YYYY');
              const month: any= format(getStart(this.viewDate), 'MM');
              this.callingData(this.currStuData,year,month);
        }
        
    

    callingData(currStu: any,year:any,month:any)          //for fetching data from service.
    {
      //console.log("data_para::"+month);
      this.stuData = currStu;
      //console.log("InsideCalldata:::"+(currStu));
     // this.events$ = ;
     this.attendanceService.callDataService(currStu,year,month).subscribe(data=>{
       //console.log(data)
       this.events = [];
       data.forEach(element => {
         if(element.ATTENDANCE_YN === "Holiday")
         {
          this.events.push({
            title: element.HOLIDAY_NAME,
            start: new Date(element.TRDATE),
            color: this.colors.blue
          });
         }
         else if(element.ATTENDANCE_YN === "Absent")
         {
          this.events.push({
            title: "Absent",
            start: new Date(element.TRDATE),
            color: this.colors.red
          });
         }
         
       })
       this.refresh.next();
     });
    }
    
    dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
      if (isSameMonth(date, this.viewDate)) {
        if (
          (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
          events.length === 0
        ) {
          this.activeDayIsOpen = false;
        } else {
          this.activeDayIsOpen = true;
          this.viewDate = date;
        }
      }
    }
}
