import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Button, Input, Typography } from 'shared/ui';
import { TypographyVariants } from 'shared/ui/Typography/Typography';
import {
  useDynamicModuleLoader,
  ReducersList,
} from 'shared/lib/hooks/useDynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useNavigate } from 'react-router-dom';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import {
  loginReducer,
  setPassword,
  setUsername,
} from '../../model/slice/loginSlice';
import classes from './LoginForm.module.scss';

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

export interface LoginFormProps {
  onSuccess: () => void;
}

const LoginForm = memo(({ onSuccess }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  useDynamicModuleLoader(initialReducers);
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(setUsername(value));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(setPassword(value));
    },
    [dispatch],
  );

  const onLogin = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
      navigate('/profile');
    }
  }, [dispatch, navigate, onSuccess, password, username]);

  return (
    <div className={classes.loginForm}>
      <Typography title={t('Login')} />
      {error && (
        <Typography
          variant={TypographyVariants.ERROR}
          text={t('wrong login or password')}
        />
      )}
      <Input
        id="login-username"
        label={t('enter username')}
        onChange={onChangeUsername}
        value={username}
        autoFocus
      />
      <Input
        type="password"
        id="login-password"
        label={t('enter password')}
        onChange={onChangePassword}
        value={password}
      />
      <Button
        className={classes.loginButton}
        onClick={onLogin}
        disabled={isLoading}
      >
        {t('Log in')}
      </Button>
    </div>
  );
});

export default LoginForm;
