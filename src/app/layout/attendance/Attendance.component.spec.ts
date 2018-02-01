import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceComponent } from './Attendance.component';

describe('BlankPageComponent', () => {
    let component: AttendanceComponent;
    let fixture: ComponentFixture<AttendanceComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [AttendanceComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(AttendanceComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
