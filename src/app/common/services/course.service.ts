import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Course } from '../course.interface';

import { CourseDeleteDialogComponent } from '../dialog/course-delete-dialog/course-delete-dialog.component';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  protected coursesSubject: BehaviorSubject<Course[]> = new BehaviorSubject([]);
  public searchInputSubject: BehaviorSubject<string> = new BehaviorSubject('');

  protected BASE_URL = environment.BASE_URL;

  public courses: Observable<Course[]> = this.coursesSubject.asObservable();
  public searchInput: Observable<string> = this.searchInputSubject.asObservable();

  constructor(
    private http: HttpClient,
    private dialog: MatDialog,
    private utils: UtilsService
  ) {}

  addCourse(course: Course): Observable<any> {
    return this.http.post(`${this.BASE_URL}/courses`, course).pipe(
      map(
        data => {
          console.log('POST call successful value returned in body', data);
        },
        error => console.log('Error', error)
      )
    );
  }

  filterCourses(filterString: string): Observable<Course[]> {
    return this.http
      .get<Course[]>(`${this.BASE_URL}/courses`, {
        params: { title_like: filterString }
      })
      .pipe(
        map(
          data => data,
          error => console.log(error)
        )
      );
  }

  updateCourse(updatedCourse: Course): Observable<Course[]> {
    return this.getCourseList().pipe();
  }

  deleteCourseConfirmation(): Observable<boolean> {
    const dialogRef = this.dialog.open(CourseDeleteDialogComponent);
    return dialogRef.afterClosed();
  }

  deleteCourse(courseId: string): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/courses/${courseId}`).pipe(
      map(
        res => true,
        error => console.log(error)
      )
    );
  }

  getCourseList(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.BASE_URL}/courses`).pipe(
      map(
        data => data,
        error => console.log(error)
      )
    );
  }

  setCourses(courses: Course[]): void {
    this.coursesSubject.next(courses);
  }

  searchCourses(query: string): void {
    this.searchInputSubject.next(query);
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
}
