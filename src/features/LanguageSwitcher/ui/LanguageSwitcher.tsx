import { FC, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonVariants } from 'shared/ui/Button/Button'
import classes from './LanguageSwitcher.module.scss'

interface LanguageSwitcherProps {
  className?: string
}

enum Languages {
  EN = 'en',
  RU = 'ru',
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation()

  const toggleLanguage = () => {
    i18n.changeLanguage(
      i18n.language === Languages.EN ? Languages.RU : Languages.EN
    )
  }

  useEffect(() => {
    document.documentElement.lang = i18n.language
  }, [i18n.language])

  return (
    <div className={classNames(classes.languageSwitcher, {}, [className])}>
      <Button variant={ButtonVariants.CONTAINED} onClick={toggleLanguage}>
        {t('language')}
      </Button>
    </div>
  )
}
