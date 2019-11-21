import { Injectable } from '@angular/core';

import { COURSES } from '../common/constants/course-page.constants';
import { ICourse } from '../common/course.interface';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  getCourseList(): ICourse[] {
    return COURSES;
  }

}
