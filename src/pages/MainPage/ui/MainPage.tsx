import { useTranslation } from 'react-i18next';

// eslint-disable-next-line yauheni-baradzko-path-checker/layer-imports
import { BugButton } from '@/app/providers/ErrorBoundary';
import { Page } from '@/widgets/Page';

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
