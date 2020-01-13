import { createAction, props } from '@ngrx/store';
import { Course } from '@app-common/course.interface';

export enum CourseActionTypes {
  GetAllCourses = '[Course] GetAllCourses',
  GetAllCoursesSuccess = '[Course] GetAllCourses Success',
  GetAllCoursesFailure = '[Course] GetAllCourses Failure'
}

export const getAllCourses = createAction(
  CourseActionTypes.GetAllCourses
);

export const getAllCoursesSuccess = createAction(
  CourseActionTypes.GetAllCoursesSuccess,
  props<{ allCourses: Course[] }>()
);

export const getAllCoursesFailure = createAction(
  CourseActionTypes.GetAllCoursesFailure,
  props<{ error: any }>()
);
