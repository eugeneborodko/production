import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const ForbiddenPage = () => {
  const { t } = useTranslation('forbidden');

  return <Page data-testid="ForbiddenPage">{t('forbidden')}</Page>;
};

export default ForbiddenPage;
