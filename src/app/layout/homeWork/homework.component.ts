import { Component, OnInit,NgZone,Input } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { PageHeaderModule } from './../../shared';
import {DataService } from '../../shared/services/data.service'
import {HomeworkService} from './homework.service'
import { error } from 'selenium-webdriver';
import {HttpErrorResponse} from '@angular/common/http';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
    selector: 'app-homework',
    templateUrl: './homework.component.html',
    styleUrls: ['./homework.component.scss'],
    animations: [routerTransition()],
    providers:[HomeworkService]
})
export class HomeworkComponent implements OnInit {
    selectedName:any;
    constructor(private zone:NgZone, PageHeaderModule : PageHeaderModule, private data:DataService, private homeService: HomeworkService,private spinnerService: Ng4LoadingSpinnerService) {
    }
    message:string;
   @Input() tableData:any;
   @Input() tableList:boolean;
   //for model data.
   hDate:string;
   hSub:string;
   hteacher:string;
   hduedate:string;
   hdetails:string;
   hImage:string;
   // for hiding imageModel link 
   hImageValid:boolean = true;
   // for model show and hide
   display='none';
   displayImage = 'none';
   //initializing p to one FOR pagination
  p: number = 1;
    ngOnInit() {
        this.spinnerService.show();
        this.data.currentStudent.subscribe(message => this.message = message)
        //console.log("getting::"+this.message);
        this.callData(JSON.parse(this.message));
        this.spinnerService.hide();
    }
// After StudentChange
    test(msg){
        this.spinnerService.show();
        this.callData((msg));
       // console.log("INSIDE TEST::"+JSON.stringify(msg));
       this.spinnerService.hide();
        }

    callDetails(data:any)
    {
            console.log(data);
            this.display = 'block';
            this.hDate = data.HOMEWORK_DATE;
            this.hSub = data.SUBJECT;
            this.hteacher = data.TEACHER;
            this.hduedate = data.DUE_DATE;
            this.hdetails = data.HOMEWORK_DTL;
            this.hImageValid = (data.WORK_IMAGE==""?false:true);
            this.hImage = data.WORK_IMAGE;
            console.log(this.hImage);
    }
    callImage(){
        this.displayImage = 'block';
    }
    onCloseImage(){
        this.displayImage = 'none';
    }
    onCloseHandled(){
        
               this.display='none'; 
               this.displayImage = 'none';
               this.hDate = '';
               this.hSub = '';
               this.hteacher = '';
               this.hduedate = '';
               this.hdetails = '';
               this.hImage =''
            }
        
    //For getting Table data.
    callData(currStu: any){
        console.log("InsideCalldata:::"+JSON.stringify(currStu));
        this.homeService.callDataService(currStu).subscribe(data=>{
            
            this.tableData = data;
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
