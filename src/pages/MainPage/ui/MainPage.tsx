import { BugButton } from 'app/providers/ErrorBoundary';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <div>
      <div>{t('main page title')}</div>
      <BugButton />
    </div>
  );
};

export default MainPage;
