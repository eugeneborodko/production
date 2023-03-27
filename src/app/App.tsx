import { initAuthData } from 'entities/User';
import { Suspense, useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { LOCAL_STORAGE_USER_KEY } from 'shared/const/localstorage';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { AppRouter } from './providers/router';
import { ThemeContext } from './providers/ThemeProvider/lib/ThemeContext';

const App = () => {
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const user = localStorage.getItem(LOCAL_STORAGE_USER_KEY);

    if (user) {
      dispatch(initAuthData(JSON.parse(user)));
    }
  }, [dispatch]);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

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
