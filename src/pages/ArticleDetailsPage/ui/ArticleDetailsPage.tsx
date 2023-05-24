import { ArticleDetails } from 'entities/Article';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

interface ArticleDetailsPageProps {
  className?: string;
}

type ArticleDetailsParams = {
  id: string;
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = () => {
  const { t } = useTranslation('article-details');
  const { id } = useParams<ArticleDetailsParams>();

  if (!id) {
    return <h2>{t('article not found')}</h2>;
  }

  return <ArticleDetails id={id} />;
};

export default memo(ArticleDetailsPage);
