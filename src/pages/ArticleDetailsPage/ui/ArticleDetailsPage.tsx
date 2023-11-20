import { ArticleDetails, ArticleList } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Typography } from 'shared/ui';
import { Page } from 'widgets/Page';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  ReducersList,
  useDynamicModuleLoader,
} from 'shared/lib/hooks/useDynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { AddCommentForm } from 'features/AddCommentForm';
import { ButtonVariants } from 'shared/ui/Button/Button';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';
import classes from './ArticleDetailsPage.module.scss';
import { getArticleComments } from '../model/slices/articleDetailsCommentSlice';
import { getArticleCommentsLoading } from '../model/selectors/comments';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId';
import { addCommentForArticle } from '../model/services/addCommentForArticle';
import { getArticleRecommendations } from '../model/slices/articleDetailsRecommendationsSlice';
import { getArticleRecommendationsLoading } from '../model/selectors/recommendations';
import { fetchArticlesRecommendations } from '../model/services/fetchArticlesRecommendations';
import { articleDetailsPageReducer } from '../model/slices';

interface ArticleDetailsPageProps {
  className?: string;
}

export type ArticleDetailsParams = {
  id: string;
};

const initialReducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => {
  const { t } = useTranslation('article-details');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams<ArticleDetailsParams>();
  const comments = useSelector(getArticleComments.selectAll);
  const recommendations = useSelector(getArticleRecommendations.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsLoading);
  const recommendationsIsLoading = useSelector(
    getArticleRecommendationsLoading,
  );

  useDynamicModuleLoader(initialReducers);
  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
    dispatch(fetchArticlesRecommendations());
  });

  const onBackToList = useCallback(() => {
    navigate(RoutePaths.articles);
  }, [navigate]);

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch],
  );

  if (!id) {
    return <h2>{t('article not found')}</h2>;
  }

  return (
    <Page className={classNames(classes.articleDetailsPage, {}, [className])}>
      <Button variant={ButtonVariants.OUTLINED} onClick={onBackToList}>
        {t('back')}
      </Button>
      <ArticleDetails id={id} />
      <Typography
        className={classes.recommendationsTitle}
        title={t('we recommend')}
      />
      <ArticleList
        className={classes.recommendations}
        articles={recommendations}
        isLoading={recommendationsIsLoading}
      />
      <Typography className={classes.commentTitle} title={t('comments')} />
      <AddCommentForm onSendComment={onSendComment} />
      <CommentList isLoading={commentsIsLoading} comments={comments} />
    </Page>
  );
};

export default memo(ArticleDetailsPage);
