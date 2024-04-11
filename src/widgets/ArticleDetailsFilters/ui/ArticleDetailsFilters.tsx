import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { FC } from 'react';
import { ArticleSort } from '@/features/ArticleSort';
import { ArticlesSearch } from '@/features/ArticlesSearch';
import { SwitchArticlesType } from '@/features/SwitchArticlesType';
import { SwitchArticlesViewDeprecated } from '@/features/SwitchArticlesView';
import { HStack, VStack } from '@/shared/ui/redesigned';

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
      <SwitchArticlesViewDeprecated />
    </HStack>
    <ArticlesSearch fetchFiltersData={fetchFiltersData} setPage={setPage} />
    <SwitchArticlesType fetchFiltersData={fetchFiltersData} setPage={setPage} />
  </VStack>
);
