import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = () => {
  const { t } = useTranslation('article-details');

  return <div>{t('article details')}</div>;
};

export default memo(ArticleDetailsPage);
