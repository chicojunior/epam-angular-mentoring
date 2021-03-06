import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

import { select, Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

import { Course } from '@app-common/course.interface';
import { CourseService } from '@app-common/services/course.service';
import { coursesSelector } from '@app-common/state/course/course.reducer';
import {
  deleteCourse,
  getAllCourses,
  searchCourses
} from '@app-common/state/course/course.actions';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent implements OnInit {
  public courses$: Observable<Course[]>;
  public searchInput: FormControl = new FormControl('');

  constructor(
    private courseService: CourseService,
    private router: Router,
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
      )
      .subscribe(console.log, console.error);
  }

  search(input: string) {
    if (input.length >= 3 || input === '') {
      this.store.dispatch(searchCourses({ query: input }));
    }
  }
}
