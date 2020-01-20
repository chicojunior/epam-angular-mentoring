import {
  createReducer,
  on,
  createFeatureSelector,
  createSelector,
  Action
} from '@ngrx/store';
import * as CourseActions from './course.actions';
import { Course } from '@app-common/course.interface';

export interface CourseState {
  courseList: Course[];
}

const initialState: CourseState = {
  courseList: []
};

const courseReducer = createReducer(
  initialState,
  on(CourseActions.getAllCoursesSuccess, (state, action) => ({
    ...state,
    courseList: action.payload
  })),
  on(CourseActions.searchCoursesSuccess, (state, action) => ({
    ...state,
    courseList: action.payload
  }))
);

export function reducer(state: CourseState | undefined, action: Action) {
  return courseReducer(state, action);
}

export const allCoursesSelector = createFeatureSelector('courses');
export const coursesSelector = createSelector(
  allCoursesSelector,
  (courses: CourseState) => courses.courseList
);
