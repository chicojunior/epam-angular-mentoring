import { createAction, props } from '@ngrx/store';
import { Course } from '@app-common/course.interface';

export enum CourseActionTypes {
  GetAllCourses = '[Course] GetAllCourses',
  GetAllCoursesSuccess = '[Course] GetAllCourses Success',
  GetAllCoursesFailure = '[Course] GetAllCourses Failure',
  SearchCourses = '[Course] SearchCourses',
  SearchCoursesSuccess = '[Course] SearchCourses Success',
  SearchCoursesFailure = '[Course] SearchCourses Failure',
  AddCourse = '[Course] AddCourse',
  AddCourseSuccess = '[Course] AddCourse Success',
  AddCourseFailure = '[Course] AddCourse Failure'
}

export const getAllCourses = createAction(
  CourseActionTypes.GetAllCourses
);

export const getAllCoursesSuccess = createAction(
  CourseActionTypes.GetAllCoursesSuccess,
  props<{ payload: Course[] }>()
);

export const getAllCoursesFailure = createAction(
  CourseActionTypes.GetAllCoursesFailure,
  props<{ error: any }>()
);

export const searchCourses = createAction(
  CourseActionTypes.SearchCourses,
  props<{ query: string }>()
);

export const searchCoursesSuccess = createAction(
  CourseActionTypes.SearchCoursesSuccess,
  props<{ payload: Course[] }>()
);

export const searchCoursesFailure = createAction(
  CourseActionTypes.SearchCoursesFailure,
  props<{ error: any }>()
);

export const addCourse = createAction(
  CourseActionTypes.AddCourse,
  props<{ payload: Course }>()
);

export const addCourseSuccess = createAction(
  CourseActionTypes.AddCourseSuccess,
  props<{ payload: Course[] }>()
);

export const addCourseFailure = createAction(
  CourseActionTypes.AddCourseFailure,
  props<{ error: any }>()
);
