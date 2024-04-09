import { Suspense, useCallback, useState } from 'react';
import { NotificationList } from '@/entities/Notification';
import NotificationIcon from '@/shared/assets/icons/notification-new.svg';
import { ToggleFeature } from '@/shared/lib/featureFlags';
import { Loader } from '@/shared/ui/deprecated';
import { Button, ButtonVariants } from '@/shared/ui/deprecated/Button';
import { Icon } from '@/shared/ui/redesigned';
import classes from './ShowNotifications.module.scss';

export const ShowNotifications = () => {
  // TODO: create a custom popover component
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleNotifications = useCallback(() => {
    setShowNotifications((prev) => !prev);
  }, []);

  return (
    <ToggleFeature
      feature="isAppRedesigned"
      on={(
        <div className={classes.showNotifications}>
          <Icon
            className={classes.notificationIconRedesigned}
            Svg={NotificationIcon}
            clickable
            onClick={toggleNotifications}
          />
          {showNotifications && (
            <Suspense fallback={<Loader />}>
              <NotificationList />
            </Suspense>
          )}
        </div>
      )}
      off={(
        <div className={classes.showNotifications}>
          <Button variant={ButtonVariants.TEXT} onClick={toggleNotifications}>
            <NotificationIcon className={classes.notificationIcon} />
          </Button>
          {showNotifications && (
            <Suspense fallback={<Loader />}>
              <NotificationList />
            </Suspense>
          )}
        </div>
      )}
    />
  );
};
