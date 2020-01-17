import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

import { switchMap, filter, debounceTime } from 'rxjs/operators';

import { Course } from '@app-common/course.interface';
import { CourseService } from '@app-common/services/course.service';
import { UtilsService, AuthService } from '@app-common/services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent implements OnInit {
  public courses: Course[] = [];
  subscriptions: Subscription[] = [];

  constructor(
    private courseService: CourseService,
    private router: Router,
    private authService: AuthService,
    private utilsService: UtilsService
  ) {}

  ngOnInit() {
    this.getList();
    this.courseSearchSubscription();
  }

  getList() {
    this.courseService
      .getCourseList()
      .subscribe(res => {
        this.courses = res;
      });
  }

  courseSearchSubscription(): Subscription {
    return this.courseService.searchInput
      .pipe(
        filter(input => input.length >= 3 || input === ''),
        debounceTime(600)
      )
      .subscribe(query => this.searchCourse(query));
  }

  addCourse(): void {
    this.router.navigate(['courses/new']);
  }

  deleteCourse(courseId: string) {
    this.courseService
      .deleteCourseConfirmation()
      .pipe(
        filter(canDelete => canDelete),
        switchMap(() => this.courseService.deleteCourse(courseId))
      ).subscribe(() => this.getList());
  }

  search(query: string) {
    this.courseService.searchCourses(query);
  }

  searchCourse(query: string) {
    this.courseService
      .filterCourses(query)
      .subscribe((courseList: Course[]) => {
        this.courses = courseList;
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
