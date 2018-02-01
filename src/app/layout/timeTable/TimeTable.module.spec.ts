import { TimeTableModule } from './TimeTable.module';

describe('BlankPageModule', () => {
    let blankPageModule: TimeTableModule;

    beforeEach(() => {
        blankPageModule = new TimeTableModule();
    });

    it('should create an instance', () => {
        expect(blankPageModule).toBeTruthy();
    });
});
