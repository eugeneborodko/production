import { ThemeSwitcher } from 'features/ThemeSwitcher'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkVariant } from 'shared/ui/AppLink/AppLink'
import classes from './Navbar.module.scss'

interface NavBarProps {
  className?: string
}

export const Navbar = ({ className }: NavBarProps) => {
  return (
    <div className={classNames(classes.navbar, {}, [className])}>
      <ThemeSwitcher />
      <div className={classes.links}>
        <AppLink to="/" variant={AppLinkVariant.SECONDARY}>
          Main page
        </AppLink>
        <AppLink to="/about" variant={AppLinkVariant.SECONDARY}>
          About page
        </AppLink>
      </div>
    </div>
  )
}
