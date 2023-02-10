import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonVariants } from 'shared/ui/Button/Button';

interface LanguageSwitcherProps {
  className?: string
}

enum Languages {
  EN = 'en',
  RU = 'ru',
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = () => {
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
        {t('language')}
      </Button>
    </div>
  );
};
