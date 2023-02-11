import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from 'features/LanguageSwitcher';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonVariants } from 'shared/ui/Button/Button';
import classes from './Sidebar.module.scss';

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

  const onToggle = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <aside
      className={classNames(
        classes.sidebar,
        { [classes.collapsed]: isCollapsed },
        [className],
      )}
    >
      <Button
        className={classes.toggleButton}
        variant={ButtonVariants.CONTAINED}
        onClick={onToggle}
      >
        {t('toggle button')}
      </Button>
      <LanguageSwitcher />
      <ThemeSwitcher />
    </aside>
  );
};
