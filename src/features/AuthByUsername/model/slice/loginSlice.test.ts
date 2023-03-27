import { DeepPartial } from '@reduxjs/toolkit';
import { loginByUsername } from '../services/loginByUsername/loginByUsername';
import { LoginSchema } from '../types/loginSchema';
import {
  loginReducer, resetLoginError, setPassword, setUsername,
} from './loginSlice';

describe('loginSlice', () => {
  it('test set username', () => {
    const state: DeepPartial<LoginSchema> = {
      username: 'username',
    };
    expect(loginReducer(state as LoginSchema, setUsername('newUsername'))).toEqual(
      { username: 'newUsername' },
    );
  });

  it('test set password', () => {
    const state: DeepPartial<LoginSchema> = {
      password: '12345',
    };
    expect(loginReducer(state as LoginSchema, setPassword('newPassword'))).toEqual(
      { password: 'newPassword' },
    );
  });

  it('test reset error', () => {
    const state: DeepPartial<LoginSchema> = {
      error: 'error',
    };
    expect(loginReducer(state as LoginSchema, resetLoginError())).toEqual(
      { error: '' },
    );
  });

  it('test set isLoading', () => {
    const state: DeepPartial<LoginSchema> = {
      isLoading: false,
    };
    expect(loginReducer(state as LoginSchema, loginByUsername.pending)).toEqual(
      { isLoading: true },
    );
    expect(loginReducer(state as LoginSchema, loginByUsername.fulfilled)).toEqual(
      { isLoading: false },
    );
    expect(loginReducer(state as LoginSchema, loginByUsername.rejected)).toEqual(
      { isLoading: false },
    );
  });
});
