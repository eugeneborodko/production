import { FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui';
import { ArticleSortField } from 'entities/Article';
import { SelectOptions } from 'shared/ui/Select/Select';

interface ArticleSortProps {
  className?: string;
  // sort: ArticleSortField
  // order: SortOrder;
  // onChangeSort: (newSort: ArticleSortField) => void;
  // onChangeOrder: (newOrder: SortOrder) => void;
}

export const ArticleSort: FC<ArticleSortProps> = ({ className }) => {
  const { t } = useTranslation('articles');

  const orderOptions = useMemo<SelectOptions[]>(
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

  const sortOptions = useMemo<SelectOptions[]>(
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
      <form>
        <Select label={t('sort by')} options={orderOptions} />
        <Select label={t('by')} options={sortOptions} />
      </form>
    </div>
  );
};
