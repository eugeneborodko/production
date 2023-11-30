import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { ArticleSort } from 'features/ArticleSort';
import { ArticlesSearch } from 'features/ArticlesSearch';
import { SwitchArticlesType } from 'features/SwitchArticlesType';
import { SwitchArticlesView } from 'features/SwitchArticlesView';
import { FC } from 'react';
import { HStack, VStack } from 'shared/ui';

export interface ArticleDetailsFiltersProps {
  fetchFiltersData: (...args: any[]) => void;
  setPage: ActionCreatorWithPayload<number, 'articlesPageSlice/setPage'>;
}

export const ArticleDetailsFilters: FC<ArticleDetailsFiltersProps> = ({
  fetchFiltersData,
  setPage,
}) => (
  <VStack gap="16">
    <HStack justify="between">
      <ArticleSort fetchFiltersData={fetchFiltersData} setPage={setPage} />
      <SwitchArticlesView />
    </HStack>
    <ArticlesSearch fetchFiltersData={fetchFiltersData} setPage={setPage} />
    <SwitchArticlesType fetchFiltersData={fetchFiltersData} setPage={setPage} />
  </VStack>
);
