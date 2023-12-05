import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getUserMounted, setAuthData, setUserMounted } from '@/entities/User';
import { LOCAL_STORAGE_USER_KEY } from '@/shared/consts/localstorage';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { AppRouter } from './providers/router';

const App = () => {
  const dispatch = useAppDispatch();
  const isMounted = useSelector(getUserMounted);

  useEffect(() => {
    const user = localStorage.getItem(LOCAL_STORAGE_USER_KEY);

    if (user) {
      dispatch(setAuthData(JSON.parse(user)));
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
