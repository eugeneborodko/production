import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import {
  ReducersList,
  useDynamicModuleLoader,
} from 'shared/lib/hooks/useDynamicModuleLoader';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { useSelector } from 'react-redux';
import {
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from 'entities/Article/model/selectors/articleDetails';
import { Typography } from 'shared/ui';
import { TextAlign } from 'shared/ui/Typography/Typography';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import classes from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const initialReducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);

  useDynamicModuleLoader(initialReducers);

  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  if (isLoading) {
    return (
      <>
        <Skeleton className={classes.avatar} width={200} height={200} borderRadius="50%" />
        <Skeleton className={classes.title} width={300} height={32} />
        <Skeleton className={classes.skeleton} width={600} height={24} />
        <Skeleton className={classes.skeleton} width="100%" height={200} />
        <Skeleton className={classes.skeleton} width="100%" height={200} />
      </>
    );
  }

  if (error) {
    return <Typography title={error} align={TextAlign.CENTER} />;
  }

  return (
    <div className={classNames(classes.articleDetails, {}, [className])}>
      ArticleDetails
    </div>
  );
});
