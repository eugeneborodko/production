import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppRouter } from './providers/router';
import {
  User,
  getUserMounted,
  setAuthData,
  setUserMounted,
} from '@/entities/User';
import { LOCAL_STORAGE_USER_KEY } from '@/shared/consts/localStorage';
import { classNames } from '@/shared/lib/classNames/classNames';
import { setFeatureFlags } from '@/shared/lib/helpers/featureFlags';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';

const App = () => {
  const dispatch = useAppDispatch();
  const isMounted = useSelector(getUserMounted);

  useEffect(() => {
    const user = localStorage.getItem(LOCAL_STORAGE_USER_KEY);

    if (user) {
      const parsedUser = JSON.parse(user) as User;
      dispatch(setAuthData(parsedUser));
      setFeatureFlags(parsedUser.features);
    }
    dispatch(setUserMounted());
  }, [dispatch]);

  return (
    <div className={classNames('app', {}, [])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          {isMounted && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
};

export default App;
