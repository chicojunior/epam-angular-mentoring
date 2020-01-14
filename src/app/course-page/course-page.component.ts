import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

import {
  switchMap,
  filter,
  debounceTime
} from 'rxjs/operators';

import { Course } from '@app-common/course.interface';
import { CourseService } from '@app-common/services/course.service';
import { UtilsService } from '@app-common/services';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent implements OnInit, OnChanges {
  public courses: Course[] = [];
  public courseInput: string;

  constructor(
    private courseService: CourseService,
    private router: Router,
    private utilsService: UtilsService
  ) {}

  ngOnInit() {
    this.getList();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.courseInput.length >= 3 || this.courseInput === '') {
      this.searchCourse(this.courseInput);
    }
  }

  getList() {
    this.utilsService.showLoader(true);
    this.courseService.getCourseList().subscribe(res => {
      this.courses = res;
      this.utilsService.showLoader(false);
    });
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
      )
      .subscribe(() => this.getList());
  }

  searchCourse(query: string): void {
    this.utilsService.showLoader(true);
    this.courseService
      .filterCourses(query)
      .pipe(debounceTime(600))
      .subscribe(res => {
        this.courses = res;
        this.utilsService.showLoader(false);
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
