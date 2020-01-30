import { Injectable } from '@angular/core';

import { createEffect, Actions, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';

import { AuthService } from '../../services';

import * as AuthActions from './auth.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthEffect {
  constructor(private actions$: Actions, private authService: AuthService) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType<{ type: any; email: string; password: string }>(
        AuthActions.AuthActionTypes.Login
      ),
      switchMap(action =>
        this.authService.login(action.email, action.password).pipe(
          map(res => ({
            type: AuthActions.AuthActionTypes.LoginSuccess,
            payload: res
          })),
          catchError(err =>
            of({
              type: AuthActions.AuthActionTypes.LoginFailure,
              payload: err
            })
          )
        )
      )
    )
  );

  // login$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType<{ type: any }>(
  //       AuthActions.AuthActionTypes.Login
  //     ),
  //     switchMap(() =>
  //       this.authService.login().pipe(
  //         map(res => ({
  //           type: AuthActions.AuthActionTypes.LoginSuccess,
  //           payload: res
  //         })),
  //         catchError(err =>
  //           of({
  //             type: AuthActions.AuthActionTypes.LoginFailure,
  //             payload: err
  //           })
  //         )
  //       )
  //     )
  //   )
  // );

  // searchCourses$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType<{ type: string; query: string }>(
  //       CourseActions.CourseActionTypes.SearchCourses
  //     ),
  //     switchMap(action =>
  //       this.courseService.filterCourses(action.query).pipe(
  //         map(res => ({
  //           type: CourseActions.CourseActionTypes.SearchCoursesSuccess,
  //           payload: res
  //         })),
  //         catchError(err =>
  //           of({
  //             type: CourseActions.CourseActionTypes.SearchCoursesFailure,
  //             payload: err
  //           })
  //         )
  //       )
  //     )
  //   )
  // );

  // updateCourse$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType<{ type: string; payload: Course }>(
  //       CourseActions.CourseActionTypes.UpdateCourse
  //     ),
  //     switchMap(action =>
  //       this.courseService.updateCourse(action.payload).pipe(
  //         map(() => ({
  //           type: CourseActions.CourseActionTypes.GetAllCourses
  //         })),
  //         catchError(err =>
  //           of({
  //             type: CourseActions.CourseActionTypes.SearchCoursesFailure,
  //             payload: err
  //           })
  //         )
  //       )
  //     )
  //   )
  // );

  // addCourses$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType<{ type: any; payload: Course }>(
  //       CourseActions.CourseActionTypes.AddCourse
  //     ),
  //     switchMap(action =>
  //       this.courseService.addCourse(action.payload).pipe(
  //         map(res => ({
  //           type: CourseActions.CourseActionTypes.AddCourseSuccess,
  //           payload: res
  //         })),
  //         catchError(err =>
  //           of({
  //             type: CourseActions.CourseActionTypes.AddCourseFailure,
  //             payload: err
  //           })
  //         )
  //       )
  //     )
  //   )
  // );

  // deleteCourses$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType<{ type: any; payload: string }>(
  //       CourseActions.CourseActionTypes.DeleteCourse
  //     ),
  //     switchMap(action =>
  //       this.courseService.deleteCourse(action.payload).pipe(
  //         map(() => ({
  //           type: CourseActions.CourseActionTypes.GetAllCourses
  //         })),
  //         catchError(err =>
  //           of({
  //             type: CourseActions.CourseActionTypes.DeleteCourseFailure,
  //             payload: err
  //           })
  //         )
  //       )
  //     )
  //   )
  // );

  // deleteCoursesConfirmation$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType<{ type: any; }>(
  //       CourseActions.CourseActionTypes.DeleteCourseConfirmation
  //     ),
  //     switchMap(() =>
  //       this.courseService.deleteCourseConfirmation().pipe(
  //         map(res => ({
  //           type: CourseActions.CourseActionTypes.DeleteCourseConfirmationSuccess,
  //           payload: res
  //         })),
  //         catchError(err =>
  //           of({
  //             type: CourseActions.CourseActionTypes.DeleteCourseConfirmationFailure,
  //             payload: err
  //           })
  //         )
  //       )
  //     )
  //   )
  // );
}
