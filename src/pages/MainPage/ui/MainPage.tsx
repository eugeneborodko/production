import { BugButton } from 'app/providers/ErrorBoundary';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <Page>
      <div>{t('main page title')}</div>
      <BugButton />
    </Page>
  );
};

export default MainPage;
