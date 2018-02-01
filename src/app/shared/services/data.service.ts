import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class DataService {
  private Source = new BehaviorSubject<string>("default message");
  currentStudent = this.Source.asObservable();
  constructor() { }
  changeMessage(currStu: string) {
    this.Source.next(currStu)
  }
}