import { Suspense, useState } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Modal } from 'shared/ui';
import { AppRouter } from './providers/router';
import './styles/index.scss';

const App = () => {
  const { theme } = useTheme();

  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <button onClick={() => setIsOpened(true)}>toggle</button>
        <Modal isOpened={isOpened} onClose={() => setIsOpened(false)}>
          123
        </Modal>
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
