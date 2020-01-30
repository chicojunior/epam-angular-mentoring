import { createAction, props } from '@ngrx/store';
import { IUser } from '@app-common/user.interface';

export enum AuthActionTypes {
  GetUser = '[Auth] GetUser',
  GetUserSuccess = '[Auth] GetUserSuccess',
  GetUserFailure = '[Auth] GetUserFailure',
  GetToken = '[Auth] GetToken',
  GetTokenSuccess = '[Auth] GetTokenSuccess',
  GetTokenFailure = '[Auth] GetTokenFailure',
  Login = '[Auth] Login',
  LoginSuccess = '[Auth] LoginSuccess',
  LoginFailure = '[Auth] LoginFailure'
}

export const getUser = createAction(AuthActionTypes.GetUser);

export const getUserSuccess = createAction(
  AuthActionTypes.GetUserSuccess,
  props<{ payload: IUser }>()
);

export const getUserFailure = createAction(
  AuthActionTypes.GetUserFailure,
  props<{ payload: Error }>()
);

export const getToken = createAction(
  AuthActionTypes.GetToken,
  props<{ payload: { email: string; password: string } }>()
);

export const getTokenSuccess = createAction(
  AuthActionTypes.GetTokenSuccess,
  props<{ payload: string }>()
);

export const getTokenFailure = createAction(
  AuthActionTypes.GetTokenFailure,
  props<{ payload: Error }>()
);

export const login = createAction(
  AuthActionTypes.Login,
  props<{ email: string; password: string }>()
);

export const loginSuccess = createAction(
  AuthActionTypes.LoginSuccess,
  props<{ payload: string }>()
);

export const loginFailure = createAction(
  AuthActionTypes.LoginFailure,
  props<{ payload: Error }>()
);
