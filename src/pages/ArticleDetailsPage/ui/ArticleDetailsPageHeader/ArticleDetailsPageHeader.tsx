import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui';
import { ButtonVariants } from '@/shared/ui/Button/Button';
import { getArticleDetailsData } from '@/entities/Article';
import { getCanEditArticle } from '@/widgets/ArticleDetailsComments';
import classes from './ArticleDetailsPageHeader.module.scss';
import { RoutePaths } from '@/shared/consts/router';

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader: FC<ArticleDetailsPageHeaderProps> = ({
  className,
}) => {
  const { t } = useTranslation('article-details');
  const navigate = useNavigate();
  const canEdit = useSelector(getCanEditArticle);
  const article = useSelector(getArticleDetailsData);

  const onBackToList = useCallback(() => {
    navigate(RoutePaths.articles);
  }, [navigate]);

  const onEditArticle = useCallback(() => {
    navigate(`${RoutePaths.articles}/${article?.id}/edit`);
  }, [article?.id, navigate]);

  return (
    <div
      className={classNames(classes.articleDetailsPageHeader, {}, [className])}
    >
      <Button variant={ButtonVariants.OUTLINED} onClick={onBackToList}>
        {t('back')}
      </Button>
      {canEdit && (
        <Button
          className={classes.editButton}
          variant={ButtonVariants.OUTLINED}
          onClick={onEditArticle}
        >
          {t('edit')}
        </Button>
      )}
    </div>
  );
};
