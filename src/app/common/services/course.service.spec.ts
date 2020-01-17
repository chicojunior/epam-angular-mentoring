import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';

import { COURSES } from '@app-common/mock/courses';

import { CourseService } from './course.service';

xdescribe('CourseService', () => {

  let service: CourseService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule ],
    providers: [
      { provide: MatDialog, useValue: {} }
    ]
  }));

  beforeEach(() => {
    service = TestBed.get(CourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should check if some item in the list contains a text', () => {
    const text = 'some text to find';
    expect(service.includesText(COURSES, text)).toBeTruthy();
  });
});
