import { createAction, props } from '@ngrx/store';

export const ActionTypes = {
  Login: '[Login Page] Login',
  LoginSuccess: '[Login Page] Login Success',
  LoginFailed: '[Login Page] Login Failed',
  Register: '[Register Page] Register',
  RegisterSuccess: '[Register Page] Register Success',
  RegisterFailed: '[Register Page] Register Failed',
  Logout: '[Logout Event] Logout',
  LogoutSuccess: '[Logout Event] Logout Success',
  LogoutrFailed: '[Logout Event] Logout Failed'

}

export const login = createAction(ActionTypes.Login, props<{ username: string, password: string }>());
export const loginSuccess = createAction(ActionTypes.LoginSuccess, props<{ username: string, _id: string, admin: boolean, basket: [], favorites: [] }>());
export const loginFailed = createAction(ActionTypes.LoginFailed, props<{ error: any }>());

export const register = createAction(ActionTypes.Register, props<{ username: string, password: string }>());
export const registerSuccess = createAction(ActionTypes.RegisterSuccess);
export const registerFailed = createAction(ActionTypes.RegisterFailed, props<{ error: any }>());

export const logout = createAction(ActionTypes.Logout);
export const logoutSuccess = createAction(ActionTypes.LogoutSuccess);
export const logoutFailed = createAction(ActionTypes.LogoutrFailed, props<{ error: any }>());



