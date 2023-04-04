import { initAuthData } from 'entities/User';
import { Suspense, useEffect } from 'react';
import { LOCAL_STORAGE_USER_KEY } from 'shared/const/localstorage';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { AppRouter } from './providers/router';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const user = localStorage.getItem(LOCAL_STORAGE_USER_KEY);

    if (user) {
      dispatch(initAuthData(JSON.parse(user)));
    }
  }, [dispatch]);

  return (
    <div className={classNames('app', {}, [])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
