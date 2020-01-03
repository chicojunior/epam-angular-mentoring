import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

import { map } from 'rxjs/operators';

import { Course } from '@app-common/course.interface';
import { CourseService } from '@app-common/services/course.service';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})

export class CoursePageComponent implements OnInit, OnChanges {

  public courses: Course[] = [];
  public courseInput: string;

  constructor(private courseService: CourseService, private router: Router) {}

  ngOnInit() {
    this.getList();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.courseInput.length >= 3 || this.courseInput === '') {
      this.searchCourse(this.courseInput);
    }
  }

  getList() {
    this.courseService
      .getCourseList()
      .subscribe(res => this.courses = res);
  }

  addCourse(): void {
    this.router.navigate(['courses/new']);
  }

  deleteCourse(courseId: string) {
    this.courseService
      .deleteCourse(courseId)
      .subscribe(res => this.getList());
  }

  searchCourse(filter: string): void {
    this.courseService
      .filterCourses(filter)
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
