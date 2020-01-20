import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { createEffect, Actions, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';

import { CourseService } from '../../services';

import * as CourseActions from './course.actions';

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
}
