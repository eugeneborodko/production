import { ArticleTypes } from 'entities/Article/model/types/article';
import { setPage } from 'pages/ArticlesPage/model/slices/articlesPageSlice';
import { FC, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import {
  ReducersList,
  useDynamicModuleLoader,
} from 'shared/lib/hooks/useDynamicModuleLoader';
import { Tabs } from 'shared/ui';
import { ArticlesTabs } from 'shared/ui/Tabs/Tabs';
import {
  setType,
  switchArticlesTypeReducer,
} from '../../model/slice/switchArticlesTypeSlice';

interface SwitchArticlesTypeProps {
  className?: string;
  fetchFiltersData: (...args: any[]) => void;
}

const reducers: ReducersList = {
  switchArticlesType: switchArticlesTypeReducer,
};

export const SwitchArticlesType: FC<SwitchArticlesTypeProps> = ({
  className,
  fetchFiltersData,
}) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation('articles');
  useDynamicModuleLoader(reducers);

  const tabs = useMemo<ArticlesTabs[]>(
    () => [
      {
        value: ArticleTypes.ALL,
        content: t('all'),
      },
      {
        value: ArticleTypes.ECONOMICS,
        content: t('economics'),
      },
      {
        value: ArticleTypes.IT,
        content: t('IT'),
      },
      {
        value: ArticleTypes.MEDICINE,
        content: t('medicine'),
      },
    ],
    [t],
  );

  const onChangeType = useCallback(
    (newType: ArticleTypes) => () => {
      dispatch(setType(newType));
      dispatch(setPage(1)); // TODO: review
      fetchFiltersData();
    },

    [dispatch, fetchFiltersData],
  );

  return (
    <div className={classNames('', {}, [className])}>
      <Tabs tabs={tabs} onTabClick={onChangeType} />
    </div>
  );
};
