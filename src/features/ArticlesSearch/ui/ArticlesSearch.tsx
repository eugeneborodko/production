import { useTranslation } from 'react-i18next';
import SearchIcon from '@/shared/assets/icons/search.svg';
import { Input, Icon } from '@/shared/ui/redesigned';

interface ArticlesSearchProps {
  onChangeSearch: (newSearch: string) => void;
  search: string;
}

export const ArticlesSearch = ({
  search,
  onChangeSearch,
}: ArticlesSearchProps) => {
  const { t } = useTranslation();

  return (
    <Input
      placeholder={t('search')}
      onChange={onChangeSearch}
      value={search}
      addonLeft={<Icon Svg={SearchIcon} />}
    />
  );
};
