import { LanguageSwitcher } from 'features/LanguageSwitcher';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSizes, ButtonVariants } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import classes from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const sidebarItemsList = useSelector(getSidebarItems);

  const onToggle = useCallback(() => {
    setIsCollapsed((prev) => !prev);
  }, []);

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
        {sidebarItemsList.map((item) => (
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
