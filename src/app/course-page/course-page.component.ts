import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { COURSES } from '@app-common/constants/course-page.constants';
import { Course } from '@app-common/course.interface';
import { CourseService } from '@app-common/services/course.service';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})

export class CoursePageComponent implements OnInit {
  public courses: Course[] = [];
  public courseInput: string;

  constructor(private courseService: CourseService, private router: Router) {}

  ngOnInit() {
    this.courseService.courses.subscribe(courses => this.courses = courses);
  }

  addCourse(): void {
    this.router.navigate(['courses/new']);
  }

  searchCourse(searchText: string): void {
    // this.courses = this.isNotEmptyString(searchText) ? this.courseService.includesText(COURSES, searchText) : COURSES;
  }

  updateCourse(course: Course) {
    this.courses = this.courseService.updateCourse(this.courses, course);
  }

  deleteCourse(courseId: string) {
    this.courseService
      .deleteCourse(this.courses, courseId)
      .subscribe(res => this.courses = res);
  }

  loadMore(evt: MouseEvent) {
    evt.preventDefault();
    console.log(evt);
  }

  isNotEmptyString(str: string): boolean {
    return str.trim().length !== 0;
  }

}
