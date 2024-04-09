import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppRouter } from './providers/router';
import { getUserAuthData, getUserMounted, initAuthData } from '@/entities/User';
import { LOCAL_STORAGE_USER_KEY } from '@/shared/consts/localStorage';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeature } from '@/shared/lib/featureFlags';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Navbar } from '@/widgets/Navbar';
import { PageLoader } from '@/widgets/PageLoader';
import { SidebarDeprecated, SidebarRedesigned } from '@/widgets/Sidebar';

const App = () => {
  const dispatch = useAppDispatch();
  const authData = useSelector(getUserAuthData);
  const isMounted = useSelector(getUserMounted);

  useEffect(() => {
    dispatch(initAuthData());
    localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(authData?.id));
  }, [authData?.id, dispatch]);

  if (!isMounted) {
    return <PageLoader />;
  }

  return (
    <ToggleFeature
      feature="isAppRedesigned"
      on={(
        <div className={classNames('app_redesigned', {}, [])}>
          <Suspense fallback="">
            <MainLayout
              header={<Navbar />}
              content={<AppRouter />}
              sidebar={<SidebarRedesigned />}
            />
          </Suspense>
        </div>
      )}
      off={(
        <div className={classNames('app', {}, [])}>
          <Suspense fallback="">
            <Navbar />
            <div className="content-page">
              <SidebarDeprecated />
              <AppRouter />
            </div>
          </Suspense>
        </div>
      )}
    />
  );
};

export default App;
