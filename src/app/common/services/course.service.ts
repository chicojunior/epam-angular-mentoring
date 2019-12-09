import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Observable, BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';

import { COURSES } from '../constants/course-page.constants';
import { ICourse } from '../course.interface';

import { CourseDeleteDialogComponent } from '../dialog/course-delete-dialog/course-delete-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  protected courses: BehaviorSubject<ICourse[]> = new BehaviorSubject([]);

  constructor(private dialog: MatDialog) { }

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

  deleteCourseDialog(courseList: ICourse[], courseId: string): Observable<ICourse[]> {
    const dialogRef = this.dialog
      .open(CourseDeleteDialogComponent, {
        data: this.filterCourseList(courseList, courseId)
      });

    return dialogRef.afterClosed();
  }

  getCourseList(): Observable<ICourse[]> {
    return this.courses.asObservable();
  }

  setCourses(courses: ICourse[]): void {
    this.courses.next(courses);
  }

  getCourseById(courseList: ICourse[], courseId: string): ICourse {
    return courseList.find(course => course.id === courseId);
  }

  includesText(list: ICourse[], text: string): ICourse[] {
    const textToSearch = text.toLowerCase();
    return list.filter(item => item.title.includes(textToSearch));
  }

  private filterCourseList(list: ICourse[], id: string): ICourse[] {
    return list.filter(item => item.id !== id);
  }

}
