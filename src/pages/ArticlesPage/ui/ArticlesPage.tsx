import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage: FC<ArticlesPageProps> = () => {
  const { t } = useTranslation('articles');

  return <div>{t('articles page')}</div>;
};

export default memo(ArticlesPage);
