import { ArticleDetails } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Typography } from 'shared/ui';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  ReducersList,
  useDynamicModuleLoader,
} from 'shared/lib/hooks/useDynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { AddCommentForm } from 'features/AddCommentForm';
import classes from './ArticleDetailsPage.module.scss';
import {
  articleDetailsCommentsReducer,
  getArticleComments,
} from '../model/slices/articleDetailsCommentSlice';
import { getArticleCommentsLoading } from '../model/selectors/comments';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId';
import { addCommentForArticle } from '../model/services/addCommentForArticle';

interface ArticleDetailsPageProps {
  className?: string;
}

export type ArticleDetailsParams = {
  id: string;
};

const initialReducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => {
  const { t } = useTranslation('article-details');
  const dispatch = useAppDispatch();
  const { id } = useParams<ArticleDetailsParams>();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsLoading);

  useDynamicModuleLoader(initialReducers);
  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

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
    <div className={classNames(classes.articleDetailsPage, {}, [className])}>
      <ArticleDetails id={id} />
      <Typography className={classes.commentTitle} title={t('comments')} />

      <AddCommentForm onSendComment={onSendComment} />
      <CommentList isLoading={commentsIsLoading} comments={comments} />
    </div>
  );
};

export default memo(ArticleDetailsPage);
