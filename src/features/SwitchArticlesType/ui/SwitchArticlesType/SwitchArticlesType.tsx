import { FC, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Tabs } from 'shared/ui';
import { ArticleTypes } from 'entities/Article/model/types/article';
import { ArticlesTabs } from 'shared/ui/Tabs/Tabs';
import { useTranslation } from 'react-i18next';

interface SwitchArticlesTypeProps {
  className?: string;
  onChangeType: (type: ArticleTypes) => void;
}

export const SwitchArticlesType: FC<SwitchArticlesTypeProps> = ({
  className,
  onChangeType,
}) => {
  const { t } = useTranslation('articles');
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

  return (
    <div className={classNames('', {}, [className])}>
      <Tabs tabs={tabs} onTabClick={onChangeType} />
    </div>
  );
};
