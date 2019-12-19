import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { Observable, BehaviorSubject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { COURSES } from '../constants/course-page.constants';
import { Course } from '../course.interface';

import { CourseDeleteDialogComponent } from '../dialog/course-delete-dialog/course-delete-dialog.component';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  protected coursesSubject: BehaviorSubject<Course[]> = new BehaviorSubject([]);
  protected BASE_URL = environment.BASE_URL;

  public courses: Observable<Course[]> = this.coursesSubject.asObservable();

  constructor(private http: HttpClient, private dialog: MatDialog, private utils: UtilsService) {
    this.updateCourseList();
  }

  addCourse(course: Course): void {
    course.id = this.utils.generateRandomUID();
    this.http
      .post(`${this.BASE_URL}/courses`, JSON.stringify(course))
      .subscribe(data => {
        console.log('POST call successful value returned in body', data);
        this.updateCourseList();
      }, error => console.log('Error', error));
      // .pipe(switchMap(() => this.getCourseList()))
      // .subscribe(courses => this.setCourses(courses));
  }

  updateCourseList(): void {
    this.getCourseList().subscribe(courses => this.setCourses(courses));
  }

  updateCourse(updatedCourse: Course): Observable<Course[]> {
    return this.getCourseList().pipe();
  }

  deleteCourse(courseId: string): Observable<boolean> {
    const dialogRef = this.dialog.open(CourseDeleteDialogComponent, { data: courseId });
    return dialogRef.afterClosed();
  }

  deleteCall(courseId: string): Observable<any> {
    return this.http
      .delete(`${this.BASE_URL}/courses/${courseId}`)
      .pipe(map(res => 'DELETE call sucessfully made!', error => console.log(error)));
  }

  getCourseList(): Observable<Course[]> {
    return this.http
      .get<Course[]>(`${this.BASE_URL}/courses`)
      .pipe(map(data => data, error => console.log(error)));
  }

  setCourses(courses: Course[]): void {
    this.coursesSubject.next(courses);
  }

  getCourseById(courseId: string): Observable<Course> {
    return this.getCourseList().pipe(
      map(courses => courses.find(course => course.id === courseId))
    );
  }

  includesText(list: Course[], text: string): Course[] {
    const textToSearch = text.toLowerCase();
    return list.filter(item => item.title.includes(textToSearch));
  }

  private filterCourseList(list: Course[], id: string): Course[] {
    return list.filter(item => item.id !== id);
  }

}
