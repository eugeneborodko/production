import { ArticleTypes } from 'entities/Article/model/consts/consts';
import { FC, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import {
  ReducersList,
  useDynamicModuleLoader,
} from 'shared/lib/hooks/useDynamicModuleLoader';
import { Tabs } from 'shared/ui';
import { useSelector } from 'react-redux';
import { Tab } from 'shared/ui/Tabs/Tabs';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import {
  setType,
  switchArticlesTypeReducer,
} from '../../model/slice/switchArticlesTypeSlice';
import { getArticlesType } from '../../model/selectors/switchArticlesTypeSelectors';

interface SwitchArticlesTypeProps {
  className?: string;
  fetchFiltersData: (...args: any[]) => void;
  setPage: ActionCreatorWithPayload<number, 'articlesPageSlice/setPage'>;
}

const reducers: ReducersList = {
  switchArticlesType: switchArticlesTypeReducer,
};

export const SwitchArticlesType: FC<SwitchArticlesTypeProps> = ({
  className,
  fetchFiltersData,
  setPage,
}) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation('articles');
  const type = useSelector(getArticlesType);
  useDynamicModuleLoader(reducers);

  const tabs = useMemo<Tab<ArticleTypes>[]>(
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

    [dispatch, fetchFiltersData, setPage],
  );

  return (
    <div className={classNames('', {}, [className])}>
      <Tabs tabs={tabs} onTabClick={onChangeType} value={type} />
    </div>
  );
};
