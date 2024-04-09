import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/redesigned';

interface LanguageSwitcherProps {
  short?: boolean;
}

type Language = 'en' | 'ru';

export const LanguageSwitcher = memo(({ short }: LanguageSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage((i18n.language as Language) === 'en' ? 'ru' : 'en');
  };

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <Button variant="empty" onClick={toggleLanguage}>
      {short ? t('short language') : t('language')}
    </Button>
  );
});
