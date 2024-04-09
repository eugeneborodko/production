import { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItemDeprecated } from '../SidebarItemDeprecated/SidebarItemDeprecated';
import { LanguageSwitcher } from '@/features/LanguageSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  Button,
  ButtonSizes,
  ButtonVariants,
} from '@/shared/ui/deprecated/Button';
import { VStack } from '@/shared/ui/redesigned';
import classes from './SidebarDeprecated.module.scss';

interface SidebarProps {
  className?: string;
}

export const SidebarDeprecated = memo(({ className }: SidebarProps) => {
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
      <VStack className={classes.links} gap="8">
        {sidebarItemsList.map((item) => (
          <SidebarItemDeprecated
            item={item}
            isCollapsed={isCollapsed}
            key={item.path}
          />
        ))}
      </VStack>
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
    </section>
  );
});
