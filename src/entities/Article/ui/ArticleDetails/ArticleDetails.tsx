import { memo, useEffect } from 'react';
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
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from 'entities/Article/model/selectors/articleDetails';
import { Avatar, Typography } from 'shared/ui';
import { TextAlign, TextSize } from 'shared/ui/Typography/Typography';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import EyeIcon from 'shared/assets/icons/eye.svg';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import classes from './ArticleDetails.module.scss';
import { ArticleBlock, ArticleBlocksTypes } from '../../model/types/article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const initialReducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

const renderBlock = (block: ArticleBlock) => {
  switch (block.type) {
  case ArticleBlocksTypes.CODE:
    return (
      <ArticleCodeBlockComponent
        block={block}
        key={block.id}
      />
    );
  case ArticleBlocksTypes.IMAGE:
    return (
      <ArticleImageBlockComponent
        className={classes.block}
        block={block}
        key={block.id}
      />
    );
  case ArticleBlocksTypes.TEXT:
    return (
      <ArticleTextBlockComponent
        className={classes.block}
        block={block}
        key={block.id}
      />
    );
  default:
    return null;
  }
};

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);
  const article = useSelector(getArticleDetailsData);

  useDynamicModuleLoader(initialReducers);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id));
    }
  }, [dispatch, id]);

  if (isLoading) {
    return (
      <>
        <Skeleton
          className={classes.avatar}
          width={200}
          height={200}
          borderRadius="50%"
        />
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
      <div className={classes.avatarWrapper}>
        <Avatar className={classes.avatar} src={article?.img} size={200} />
      </div>
      <Typography
        className={classes.title}
        title={article?.title}
        text={article?.subtitle}
        size={TextSize.LARGE}
      />
      <div className={classes.articleInfo}>
        <EyeIcon className={classes.icon} />
        <Typography text={String(article?.views)} />
      </div>
      <div className={classes.articleInfo}>
        <CalendarIcon className={classes.icon} />
        <Typography className={classes.title} date={article?.createdAt} />
      </div>
      {article?.blocks.map(renderBlock)}
    </div>
  );
});
