import { useTranslation } from 'react-i18next';
import { Input } from '@/shared/ui/deprecated';

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
    <Input placeholder={t('search')} onChange={onChangeSearch} value={search} />
  );
};
