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
  AddCourseFailure = '[Course] AddCourse Failure',
  UpdateCourse = '[Course] UpdateCourse',
  UpdateCourseSuccess = '[Course] UpdateCourse Success',
  UpdateCourseFailure = '[Course] UpdateCourse Failure',
  DeleteCourse = '[Course] DeleteCourse',
  DeleteCourseSuccess = '[Course] DeleteCourse Success',
  DeleteCourseFailure = '[Course] DeleteCourse Failure',
  DeleteCourseConfirmation = '[Course] DeleteCourseConfirmation',
  DeleteCourseConfirmationSuccess = '[Course] DeleteCourseConfirmation Success',
  DeleteCourseConfirmationFailure = '[Course] DeleteCourseConfirmation Failure'
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

export const updateCourse = createAction(
  CourseActionTypes.UpdateCourse,
  props<{ payload: Course }>()
);

export const updateCourseSuccess = createAction(
  CourseActionTypes.UpdateCourseSuccess,
  props<{ payload: Course[] }>()
);

export const updateCourseFailure = createAction(
  CourseActionTypes.UpdateCourseFailure,
  props<{ error: any }>()
);

export const deleteCourse = createAction(
  CourseActionTypes.DeleteCourse,
  props<{ payload: string }>()
);

export const deleteCourseSuccess = createAction(
  CourseActionTypes.DeleteCourseSuccess,
  props<{ payload: Course[] }>()
);

export const deleteCourseFailure = createAction(
  CourseActionTypes.DeleteCourseFailure,
  props<{ error: any }>()
);

export const deleteCourseConfirmation = createAction(
  CourseActionTypes.DeleteCourseConfirmation,
  props<{ payload: Course }>()
);

export const deleteCourseConfirmationSuccess = createAction(
  CourseActionTypes.DeleteCourseConfirmationSuccess,
  props<{ payload: Course[] }>()
);

export const deleteCourseConfirmationFailure = createAction(
  CourseActionTypes.DeleteCourseConfirmationFailure,
  props<{ error: any }>()
);
