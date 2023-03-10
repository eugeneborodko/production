import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, Input } from 'shared/ui';
import classes from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
  const { t } = useTranslation();

  const [loginUsername, setLoginUsername] = useState<string>('');
  const [loginPassword, setLoginPassword] = useState<string>('');

  return (
    <div className={classNames(classes.loginForm, {}, [className])}>
      <Input
        id="login-username"
        label={t('enter username')}
        onChange={setLoginUsername}
        value={loginUsername}
        autoFocus
      />
      <Input
        type="password"
        id="login-password"
        label={t('enter password')}
        onChange={setLoginPassword}
        value={loginPassword}
      />
      <Button className={classes.loginButton}>{t('Log in')}</Button>
    </div>
  );
};
