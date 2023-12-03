import { memo } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import {
  ReducersList,
  useDynamicModuleLoader,
} from '@/shared/lib/hooks/useDynamicModuleLoader';
import {
  Avatar, HStack, Typography, VStack,
} from '@/shared/ui';
import { TextAlign, TextSize } from '@/shared/ui/Typography/Typography';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import CalendarIcon from '@/shared/assets/icons/calendar.svg';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../../Article/model/selectors/articleDetails';
import { articleDetailsReducer } from '../../../Article/model/slice/articleDetailsSlice';
import { fetchArticleById } from '../../../Article/model/services/fetchArticleById/fetchArticleById';
import classes from './ArticleDetails.module.scss';
import type { ArticleBlock } from '../../model/types/article';
import { ArticleBlocksTypes } from '../../model/consts/consts';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { RatingCard } from '@/entities/Rating';

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
    return <ArticleCodeBlockComponent block={block} key={block.id} />;
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
  const { t } = useTranslation('article-details');
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);
  const article = useSelector(getArticleDetailsData);

  useDynamicModuleLoader(initialReducers);
  useInitialEffect(() => {
    dispatch(fetchArticleById(id));
  });

  if (isLoading) {
    return (
      <VStack align="center" gap="16">
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
      </VStack>
    );
  }

  if (error) {
    return <Typography title={error} align={TextAlign.CENTER} />;
  }

  return (
    <VStack
      gap="16"
      className={classNames(classes.articleDetails, {}, [className])}
    >
      <HStack justify="center">
        <Avatar className={classes.avatar} src={article?.img} size={200} />
      </HStack>
      <Typography
        className={classes.title}
        title={article?.title}
        text={article?.subtitle}
        size={TextSize.LARGE}
      />
      <HStack gap="8">
        <EyeIcon className={classes.icon} />
        <Typography text={String(article?.views)} />
      </HStack>
      <HStack gap="8">
        <CalendarIcon className={classes.icon} />
        <Typography className={classes.title} date={article?.createdAt} />
      </HStack>
      {article?.blocks.map(renderBlock)}
      <RatingCard
        title={t('Rate this article')}
        modalTitle={t('Write a review')}
        modalInputLabel={t('Your review')}
      />
    </VStack>
  );
});
