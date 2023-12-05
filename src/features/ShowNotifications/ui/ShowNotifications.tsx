import { Suspense, useCallback, useState } from 'react';

import { NotificationList } from '@/entities/Notification';
import NotificationIcon from '@/shared/assets/icons/notification.svg';
import { Loader } from '@/shared/ui';
import { Button, ButtonVariants } from '@/shared/ui/Button';

import classes from './ShowNotifications.module.scss';

export const ShowNotifications = () => {
  // TODO: create a custom popover component
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleNotifications = useCallback(() => {
    setShowNotifications((prev) => !prev);
  }, []);

  return (
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
  );
};
