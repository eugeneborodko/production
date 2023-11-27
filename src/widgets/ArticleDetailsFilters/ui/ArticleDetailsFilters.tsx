import { ArticleSort } from 'features/ArticleSort';
import { ArticlesSearch } from 'features/ArticlesSearch';
import { SwitchArticlesType } from 'features/SwitchArticlesType';
import { SwitchArticlesView } from 'features/SwitchArticlesView';
import { FC } from 'react';
import { HStack, VStack } from 'shared/ui';

export interface ArticleDetailsFiltersProps {
  fetchFiltersData: (...args: any[]) => void;
}

export const ArticleDetailsFilters: FC<ArticleDetailsFiltersProps> = ({
  fetchFiltersData,
}) => (
  <VStack gap="16">
    <HStack justify="between">
      <ArticleSort fetchFiltersData={fetchFiltersData} />
      <SwitchArticlesView />
    </HStack>
    <ArticlesSearch fetchFiltersData={fetchFiltersData} />
    <SwitchArticlesType fetchFiltersData={fetchFiltersData} />
  </VStack>
);
