import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getArticleDetailsData } from '@/entities/Article';
import { getRouteArticleEdit, getRouteArticles } from '@/shared/consts/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui';
import { ButtonVariants } from '@/shared/ui/Button';
import { getCanEditArticle } from '@/widgets/ArticleDetailsComments';
import classes from './ArticleDetailsPageHeader.module.scss';

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
    navigate(getRouteArticles());
  }, [navigate]);

  const onEditArticle = useCallback(() => {
    navigate(getRouteArticleEdit(article?.id || ''));
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
