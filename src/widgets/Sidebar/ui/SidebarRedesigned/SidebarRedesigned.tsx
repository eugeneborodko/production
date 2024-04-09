import { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItemRedesigned } from '../SidebarItemRedesigned/SidebarItemRedesigned';
import { LanguageSwitcher } from '@/features/LanguageSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import CollapseIcon from '@/shared/assets/icons/arrow-bottom.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLogo, Icon, VStack } from '@/shared/ui/redesigned';
import classes from './SidebarRedesigned.module.scss';

interface SidebarProps {
  className?: string;
}

export const SidebarRedesigned = memo(({ className }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const sidebarItemsList = useSelector(getSidebarItems);

  const onToggle = useCallback(() => {
    setIsCollapsed((prev) => !prev);
  }, []);

  return (
    <section
      className={classNames(
        classes.sidebar,
        { [classes.collapsed]: isCollapsed },
        [className],
      )}
      data-testid="sidebar"
    >
      <AppLogo className={classes.appLogo} />
      <VStack
        className={classNames(classes.links, {}, [classes.linksTopMargin])}
        gap="8"
      >
        {sidebarItemsList.map((item) => (
          <SidebarItemRedesigned
            item={item}
            isCollapsed={isCollapsed}
            key={item.path}
          />
        ))}
      </VStack>
      <Icon
        className={classes.collapseButton}
        Svg={CollapseIcon}
        data-testid="sidebar-toggle-button"
        onClick={onToggle}
        clickable
      />
      <div className={classes.settings}>
        <ThemeSwitcher />
        <LanguageSwitcher short={isCollapsed} />
      </div>
    </section>
  );
});
