import { TestBed } from '@angular/core/testing';

import { CoursePageService } from './course-page.service';

describe('CoursePageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoursePageService = TestBed.get(CoursePageService);
    expect(service).toBeTruthy();
  });
});
