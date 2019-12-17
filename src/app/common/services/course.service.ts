import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { COURSES } from '../constants/course-page.constants';
import { Course } from '../course.interface';

import { CourseDeleteDialogComponent } from '../dialog/course-delete-dialog/course-delete-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  protected coursesSubject: BehaviorSubject<Course[]> = new BehaviorSubject([]);
  protected BASE_URL = environment.BASE_URL;

  public courses: Observable<Course[]> = this.coursesSubject.asObservable();

  constructor(private http: HttpClient, private dialog: MatDialog) {
    this.getCourseList().subscribe(courses => this.setCourses(courses));
  }

  addCourse(course: Course): void {}

  updateCourse(courseList: Course[], updatedCourse: Course): Course[] {
    return courseList.reduce((agg, cur) => [
      agg,
      cur.id === updatedCourse.id ? updatedCourse : cur
    ], []);
  }

  deleteCourse(courseList: Course[], courseId: string): Observable<Course[]> {
    return this.deleteCourseDialog(courseList, courseId);
  }

  deleteCourseDialog(courseList: Course[], courseId: string): Observable<Course[]> {
    const dialogRef = this.dialog
      .open(CourseDeleteDialogComponent, {
        data: this.filterCourseList(courseList, courseId)
      });

    return dialogRef.afterClosed();
  }

  getCourseList(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.BASE_URL}/courses`);
  }

  setCourses(courses: Course[]): void {
    this.coursesSubject.next(courses);
  }

  getCourseById(courseId: string): Observable<Course> {
    return this.getCourseList().pipe(
      map(courses => courses.find(course => course.id === courseId))
    );

    // return this.courses.pipe(map(courses => courses.find(course => course.id === courseId)));
  }

  includesText(list: Course[], text: string): Course[] {
    const textToSearch = text.toLowerCase();
    return list.filter(item => item.title.includes(textToSearch));
  }

  private filterCourseList(list: Course[], id: string): Course[] {
    return list.filter(item => item.id !== id);
  }

}
