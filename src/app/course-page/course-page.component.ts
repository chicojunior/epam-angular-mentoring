import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

import { switchMap, filter, debounceTime } from 'rxjs/operators';

import { Course } from '@app-common/course.interface';
import { CourseService } from '@app-common/services/course.service';
import { UtilsService } from '@app-common/services';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent implements OnInit {
  public courses: Course[] = [];

  constructor(
    private courseService: CourseService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getList();
    this.courseSearchSubscription();
  }

  getList() {
    // this.utilsService.showLoader(true);
    this.courseService.getCourseList().subscribe(res => {
      this.courses = res;
      // this.utilsService.showLoader(false);
    });
  }

  courseSearchSubscription() {
    this.courseService.searchInput
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
      )
      .subscribe(() => this.getList());
  }

  search(query: string) {
    this.courseService.searchCourses(query);
  }

  searchCourse(query: string): void {
    // this.utilsService.showLoader(true);
    this.courseService.filterCourses(query).subscribe(res => {
      this.courses = res;
      // this.utilsService.showLoader(false);
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
