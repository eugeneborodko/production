import { FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleSortField } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeature } from '@/shared/lib/featureFlags';
import { SortOrder } from '@/shared/types/sort';
import {
  Select as SelectDeprecated,
  SelectOptions,
} from '@/shared/ui/deprecated/Select';
import { Select } from '@/shared/ui/redesigned';
import classes from './ArticleSort.module.scss';

interface ArticleSortProps {
  className?: string;
  order: SortOrder;
  sort: ArticleSortField;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSort: FC<ArticleSortProps> = ({
  className,
  order,
  sort,
  onChangeOrder,
  onChangeSort,
}) => {
  const { t } = useTranslation('articles');

  const orderOptions = useMemo<SelectOptions<SortOrder>[]>(
    () => [
      {
        value: 'asc',
        content: t('ascending'),
      },
      {
        value: 'desc',
        content: t('descending'),
      },
    ],
    [t],
  );

  const sortOptions = useMemo<SelectOptions<ArticleSortField>[]>(
    () => [
      {
        value: ArticleSortField.CREATED_AT,
        content: t('created at'),
      },
      {
        value: ArticleSortField.TITLE,
        content: t('sort title'),
      },
      {
        value: ArticleSortField.VIEWS,
        content: t('views'),
      },
    ],
    [t],
  );

  return (
    <div // TODO: use experimental search tag instead
      className={classNames('', {}, [className])}
      role="search"
    >
      <ToggleFeature
        feature="isAppRedesigned"
        on={(
          <form>
            <label htmlFor="sort-select">
              <span className={classes.label}>
                {t('sort by')}
                :
              </span>
              <Select
                className={classes.sortBy}
                options={sortOptions}
                value={sort}
                onChange={onChangeSort}
                id="sort-select"
              />
            </label>
            <label htmlFor="order-select">
              <span className="visually-hidden">
                {t('order by')}
                :
              </span>
              <Select
                options={orderOptions}
                value={order}
                onChange={onChangeOrder}
                id="order-select"
              />
            </label>
          </form>
        )}
        off={(
          <form>
            <SelectDeprecated<ArticleSortField>
              className={classes.sortBy}
              label={t('sort by')}
              options={sortOptions}
              value={sort}
              onChange={onChangeSort}
            />
            <SelectDeprecated<SortOrder>
              label={t('by')}
              options={orderOptions}
              value={order}
              onChange={onChangeOrder}
            />
          </form>
        )}
      />
    </div>
  );
};
