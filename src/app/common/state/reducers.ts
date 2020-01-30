import { ActionReducerMap } from '@ngrx/store';

import * as fromCourse from './course/course.reducer';
import * as fromAuth from './auth/auth.reducer';

export interface AppState {
  courses: fromCourse.CourseState;
  auth: fromAuth.AuthState;
}

export const reducers: ActionReducerMap<AppState> = {
  courses: fromCourse.reducer,
  auth: fromAuth.reducer
};
