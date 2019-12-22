import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Observable, BehaviorSubject } from 'rxjs';

import { COURSES } from '../constants/course-page.constants';
import { ICourse } from '../course.interface';

import { CourseDeleteDialogComponent } from '../dialog/course-delete-dialog/course-delete-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  public courses: ICourse[];
  protected coursesSubject: BehaviorSubject<ICourse[]> = new BehaviorSubject([]);

  constructor(private dialog: MatDialog) {
    this.setCourses(COURSES);
    this.getCourseList().subscribe(res => this.courses = res);
  }

  addCourse(course: ICourse): void {}

  updateCourse(courseList: ICourse[], updatedCourse: ICourse): ICourse[] {
    return courseList.reduce((agg, cur) => [
      agg,
      cur.id === updatedCourse.id ? updatedCourse : cur
    ], []);
  }

  deleteCourse(courseList: ICourse[], courseId: string): Observable<ICourse[]> {
    return this.deleteCourseDialog(courseList, courseId);
  }

  editCourse(courseId: string): void {

  }

  deleteCourseDialog(courseList: ICourse[], courseId: string): Observable<ICourse[]> {
    const dialogRef = this.dialog
      .open(CourseDeleteDialogComponent, {
        data: this.filterCourseList(courseList, courseId)
      });

    return dialogRef.afterClosed();
  }

  getCourseList(): Observable<ICourse[]> {
    return this.coursesSubject.asObservable();
  }

  setCourses(courses: ICourse[]): void {
    this.coursesSubject.next(courses);
  }

  getCourseById(courseId: string): ICourse {
    return this.courses.find(course => course.id === courseId);
  }

  includesText(list: ICourse[], text: string): ICourse[] {
    const textToSearch = text.toLowerCase();
    return list.filter(item => item.title.includes(textToSearch));
  }

  private filterCourseList(list: ICourse[], id: string): ICourse[] {
    return list.filter(item => item.id !== id);
  }

}
