import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';

import { CourseService } from '../course.service';

import { ICourse } from '../../common/course.interface';
import { COURSES } from '../../common/constants/course-page.constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent implements OnInit {
  public courses: ICourse[] = [];
  public courseInput: string;
  public noDataMessage = 'no data, feel free to add new course';

  constructor(
    private courseService: CourseService,
    private changeDetector: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit() {
    this.courses = this.courseService.getCourseList();
  }

  addCourse(): void {
    this.router.navigate(['add-course']);
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
