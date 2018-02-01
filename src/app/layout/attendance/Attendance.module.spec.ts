import { AttendanceModule } from './Attendance.module';

describe('BlankPageModule', () => {
    let blankPageModule: AttendanceModule;

    beforeEach(() => {
        blankPageModule = new AttendanceModule();
    });

    it('should create an instance', () => {
        expect(blankPageModule).toBeTruthy();
    });
});
