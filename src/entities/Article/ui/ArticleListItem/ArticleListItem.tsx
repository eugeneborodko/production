import { FC, HTMLAttributeAnchorTarget } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  AppLink, Avatar, Button, Card, Typography,
} from 'shared/ui';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { ButtonVariants } from 'shared/ui/Button/Button';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';
import type {
  Article,
  ArticleTextBlock,
  ArticleView,
} from '../../../Article/model/types/article';
import { ArticleBlocksTypes } from '../../../Article/model/consts/consts';
import classes from './ArticleListItem.module.scss';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem: FC<ArticleListItemProps> = ({
  className,
  article,
  view = 'tile',
  target = '_self',
}) => {
  const { t } = useTranslation();

  const types = (
    <Typography className={classes.types} text={article.type.join(', ')} />
  );

  const views = (
    <>
      <Typography className={classes.views} text={String(article.views)} />
      <EyeIcon className={classes.icon} />
    </>
  );

  if (view === 'grid') {
    const textBlock = article.blocks.find(
      (block) => block.type === ArticleBlocksTypes.TEXT,
    ) as ArticleTextBlock;

    return (
      <div
        className={classNames(classes.articleListItem, {}, [
          className,
          classes[view],
        ])}
      >
        <Card className={classes.card}>
          <header className={classes.header}>
            <Avatar
              className={classes.avatar}
              src={article.user.avatar}
              alt={article.title}
              size={30}
            />
            <Typography
              className={classes.username}
              text={article.user.username}
            />
            <Typography className={classes.date} text={article.createdAt} />
          </header>
          <Typography className={classes.title} text={article.title} />
          {types}
          <img
            className={classes.image}
            src={article.img}
            alt={article.title}
            width="100%"
            height="250"
          />
          {textBlock && (
            <ArticleTextBlockComponent
              className={classes.textBlock}
              block={textBlock}
            />
          )}
          <footer className={classes.footer}>
            <AppLink
              to={RoutePaths.article_details + article.id}
              target={target}
            >
              <Button variant={ButtonVariants.OUTLINED}>
                {t('read more')}
              </Button>
            </AppLink>

            {views}
          </footer>
        </Card>
      </div>
    );
  }

  return (
    <AppLink
      className={classNames(classes.articleListItem, {}, [
        className,
        classes[view],
      ])}
      to={RoutePaths.article_details + article.id}
      target={target}
    >
      <Card className={classes.card}>
        <div className={classes.imageWrapper}>
          <img
            className={classes.image}
            src={article.img}
            alt={article.title}
            width={200}
            height={200}
          />
          <Typography className={classes.date} date={article.createdAt} />
        </div>
        <div className={classes.infoWrapper}>
          {types}
          {views}
        </div>
        <Typography className={classes.title} text={article.title} />
      </Card>
    </AppLink>
  );
};
