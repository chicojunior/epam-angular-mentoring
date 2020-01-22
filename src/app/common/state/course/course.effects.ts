import { Injectable } from '@angular/core';

import { createEffect, Actions, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';

import { CourseService } from '../../services';

import * as CourseActions from './course.actions';
import { Course } from '@app-common/course.interface';

@Injectable({
  providedIn: 'root'
})
export class CourseEffect {
  constructor(
    private actions$: Actions,
    private courseService: CourseService
  ) {}

  getAllCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType<{ type: any }>(
        CourseActions.CourseActionTypes.GetAllCourses
      ),
      switchMap(() =>
        this.courseService.getCourseList().pipe(
          map(res => ({
            type: CourseActions.CourseActionTypes.GetAllCoursesSuccess,
            payload: res
          })),
          catchError(err =>
            of({
              type: CourseActions.CourseActionTypes.GetAllCoursesFailure,
              payload: err
            })
          )
        )
      )
    )
  );

  searchCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType<{ type: string; query: string }>(
        CourseActions.CourseActionTypes.SearchCourses
      ),
      switchMap(action =>
        this.courseService.filterCourses(action.query).pipe(
          map(res => ({
            type: CourseActions.CourseActionTypes.SearchCoursesSuccess,
            payload: res
          })),
          catchError(err =>
            of({
              type: CourseActions.CourseActionTypes.SearchCoursesFailure,
              payload: err
            })
          )
        )
      )
    )
  );

  updateCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType<{ type: string; payload: Course }>(
        CourseActions.CourseActionTypes.UpdateCourse
      ),
      switchMap(action =>
        this.courseService.updateCourse(action.payload).pipe(
          map(() => ({
            type: CourseActions.CourseActionTypes.GetAllCourses
          })),
          catchError(err =>
            of({
              type: CourseActions.CourseActionTypes.SearchCoursesFailure,
              payload: err
            })
          )
        )
      )
    )
  );

  addCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType<{ type: any; payload: Course }>(
        CourseActions.CourseActionTypes.AddCourse
      ),
      switchMap(action =>
        this.courseService.addCourse(action.payload).pipe(
          map(res => ({
            type: CourseActions.CourseActionTypes.AddCourseSuccess,
            payload: res
          })),
          catchError(err =>
            of({
              type: CourseActions.CourseActionTypes.AddCourseFailure,
              payload: err
            })
          )
        )
      )
    )
  );

  deleteCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType<{ type: any; payload: string }>(
        CourseActions.CourseActionTypes.DeleteCourse
      ),
      switchMap(action =>
        this.courseService.deleteCourse(action.payload).pipe(
          map(() => ({
            type: CourseActions.CourseActionTypes.GetAllCourses
          })),
          catchError(err =>
            of({
              type: CourseActions.CourseActionTypes.DeleteCourseFailure,
              payload: err
            })
          )
        )
      )
    )
  );

  deleteCoursesConfirmation$ = createEffect(() =>
    this.actions$.pipe(
      ofType<{ type: any; }>(
        CourseActions.CourseActionTypes.DeleteCourseConfirmation
      ),
      switchMap(() =>
        this.courseService.deleteCourseConfirmation().pipe(
          map(res => ({
            type: CourseActions.CourseActionTypes.DeleteCourseConfirmationSuccess,
            payload: res
          })),
          catchError(err =>
            of({
              type: CourseActions.CourseActionTypes.DeleteCourseConfirmationFailure,
              payload: err
            })
          )
        )
      )
    )
  );



}
