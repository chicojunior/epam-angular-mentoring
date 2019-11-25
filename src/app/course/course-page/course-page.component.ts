import { Component, OnInit, Input } from '@angular/core';

import { ICourse } from '../../common/course.interface';

import { COURSES } from '../../common/constants/course-page.constants';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent implements OnInit {
  public courses: ICourse[] = [];
  public courseInput: string;
  public noDataMessage = 'no data, feel free to add new course';

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.courses = this.courseService.getCourseList();
  }

  searchCourse(searchText: string): void {
    this.courses = this.isNotEmptyString(searchText) ? this.courseService.includesText(COURSES, searchText) : COURSES;
  }

  updateCourse(course: ICourse) {
    this.courses = this.courseService.updateCourse(this.courses, course);
  }

  deleteCourse(courseId: string) {
    this.courseService
      .deleteCourse(this.courses, courseId)
      .subscribe(res => {
        if (res) {
          this.courses = res;
        }
      });
  }

  loadMore(evt: MouseEvent) {
    evt.preventDefault();
    console.log(evt);
  }

  isNotEmptyString(str: string): boolean {
    return str.trim().length !== 0;
  }

}
