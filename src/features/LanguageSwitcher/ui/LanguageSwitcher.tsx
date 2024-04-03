import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonVariants } from '@/shared/ui/deprecated/Button';

interface LanguageSwitcherProps {
  short?: boolean;
}

enum Languages {
  EN = 'en',
  RU = 'ru',
}

export const LanguageSwitcher = memo(({ short }: LanguageSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(
      i18n.language === Languages.EN ? Languages.RU : Languages.EN,
    );
  };

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <div>
      <Button variant={ButtonVariants.CONTAINED} onClick={toggleLanguage}>
        {short ? t('short language') : t('language')}
      </Button>
    </div>
  );
});
