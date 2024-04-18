import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleTypes } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeature } from '@/shared/lib/featureFlags';
import { Tab, Tabs as TabsDeprecated } from '@/shared/ui/deprecated/Tabs';
import { Tabs as TabsRedesigned } from '@/shared/ui/redesigned/Tabs';

interface ArticleTabsProps {
  className?: string;
  type: ArticleTypes;
  onChangeType: (newType: ArticleTypes) => void;
}

export const ArticleTabs = ({
  className,
  type,
  onChangeType,
}: ArticleTabsProps) => {
  const { t } = useTranslation('articles');

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

  return (
    <ToggleFeature
      feature="isAppRedesigned"
      on={<TabsRedesigned tabs={tabs} onTabClick={onChangeType} value={type} direction="column" />}
      off={(
        <div className={classNames('', {}, [className])}>
          <TabsDeprecated tabs={tabs} onTabClick={onChangeType} value={type} />
        </div>
      )}
    />
  );
};
