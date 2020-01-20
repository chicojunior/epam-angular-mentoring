import { ActionReducerMap } from '@ngrx/store';

import * as fromCourse from './course/course.reducer';

export interface AppState {
  courses: fromCourse.CourseState;
}

export const reducers: ActionReducerMap<AppState> = {
  courses: fromCourse.reducer
};
