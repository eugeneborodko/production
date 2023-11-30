import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page';

const ForbiddenPage = () => {
  const { t } = useTranslation('forbidden');

  return <Page>{t('forbidden')}</Page>;
};

export default ForbiddenPage;