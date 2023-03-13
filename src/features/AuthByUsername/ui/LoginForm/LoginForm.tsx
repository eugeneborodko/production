import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Input, Typography } from 'shared/ui';
import { TypographyVariants } from 'shared/ui/Typography/Typography';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { setPassword, setUsername } from '../../model/slice/loginSlice';
import classes from './LoginForm.module.scss';

interface LoginFormProps {}

export const LoginForm: FC<LoginFormProps> = memo(() => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const {
    username, password, isLoading, error,
  } = useSelector(getLoginState);

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

  const onLogin = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  return (
    <div className={classes.loginForm}>
      <Typography title={t('Login')} />
      {error && <Typography variant={TypographyVariants.ERROR} text={t('wrong login or password')} />}
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
