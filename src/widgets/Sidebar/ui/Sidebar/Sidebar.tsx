import { LanguageSwitcher } from 'features/LanguageSwitcher';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { memo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSizes, ButtonVariants } from 'shared/ui/Button/Button';
import { SidebarItemsList } from '../../model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import classes from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

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
      data-testid="sidebar"
    >
      <div className={classes.links}>
        {SidebarItemsList.map((item) => (
          <SidebarItem item={item} isCollapsed={isCollapsed} key={item.path} />
        ))}
      </div>
      <Button
        className={classes.toggleButton}
        data-testid="sidebar-toggle-button"
        variant={ButtonVariants.CONTAINED}
        size={ButtonSizes.L}
        square
        onClick={onToggle}
      >
        {isCollapsed ? '>' : '<'}
      </Button>
      <LanguageSwitcher short={isCollapsed} />
      <ThemeSwitcher />
    </aside>
  );
});
