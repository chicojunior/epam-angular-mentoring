import {
  createReducer,
  createSelector,
  createFeatureSelector,
  Action,
  on
} from '@ngrx/store';
import * as AuthActions from './auth.actions';
import { IUser } from '@app-common/user.interface';

export interface AuthState {
  access_token: string;
  user: IUser;
}

const initialState: AuthState = {
  access_token: '',
  user: {
    id: '',
    email: '',
    firstName: '',
    lastName: '',
    password: ''
  }
};

const authReducer = createReducer(
  initialState,
  on(AuthActions.loginSuccess, (state, action) => ({
    ...state,
    access_token: action.payload
  })),
  );

export function reducer(state: AuthState | undefined, action: Action) {
  return authReducer(state, action);
}

export const userSelector = createFeatureSelector('user');
export const tokenFeature = createFeatureSelector('accessToken');

export const authSelector = createSelector(userSelector, (user: IUser) => user);
export const tokenSelector = createSelector(tokenFeature, (token: string) => token);
