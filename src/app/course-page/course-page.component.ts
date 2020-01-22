import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { select, Store } from '@ngrx/store';

import { Subscription, Observable } from 'rxjs';
import { switchMap, filter, debounceTime, tap } from 'rxjs/operators';

import { Course } from '@app-common/course.interface';
import { CourseService } from '@app-common/services/course.service';
import { UtilsService, AuthService } from '@app-common/services';

import { coursesSelector } from '@app-common/state/course/course.reducer';
import { getAllCourses, searchCourses, deleteCourse } from '@app-common/state/course/course.actions';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent implements OnInit {
  public courses: Course[] = [];
  public courses$: Observable<Course[]>;
  subscriptions: Subscription[] = [];

  constructor(
    private courseService: CourseService,
    private router: Router,
    private authService: AuthService,
    private utilsService: UtilsService,
    private store: Store<any>
  ) {}

  ngOnInit() {
    this.store.dispatch(getAllCourses());
    this.courses$ = this.store.pipe(select(coursesSelector));
  }

  addCourse(): void {
    this.router.navigate(['courses/new']);
  }

  deleteCourse(courseId: string) {
    this.courseService
      .deleteCourseConfirmation()
      .pipe(
        filter(canDelete => canDelete),
        tap(() => this.store.dispatch(deleteCourse({ payload: courseId })))
      ).subscribe(console.log, console.error);
  }

  search(query: string) {
    this.courseService.searchCourses(query);
  }

  search$(input: string) {
    if (input.length >= 3 || input === '') {
      this.store.dispatch(searchCourses({ query: input }));
    }
  }

  loadMore(evt: MouseEvent) {
    evt.preventDefault();
    console.log(evt);
  }

  isNotEmptyString(str: string): boolean {
    return str.trim().length !== 0;
  }
}
