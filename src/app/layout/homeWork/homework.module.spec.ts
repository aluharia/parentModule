import { HomeworkModule } from './homework.module';

describe('BlankPageModule', () => {
    let blankPageModule: HomeworkModule;

    beforeEach(() => {
        blankPageModule = new HomeworkModule();
    });

    it('should create an instance', () => {
        expect(blankPageModule).toBeTruthy();
    });
});
