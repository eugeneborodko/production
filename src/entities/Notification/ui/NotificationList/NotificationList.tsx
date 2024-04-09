import { FC } from 'react';
import { useGetNotificationsQuery } from '../../api/notificationApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import { ToggleFeature } from '@/shared/lib/featureFlags';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { VStack } from '@/shared/ui/redesigned';
import classes from './NotificationList.module.scss';

interface NotificationListProps {
  className?: string;
}

const NotificationList: FC<NotificationListProps> = ({ className }) => {
  const { data: notifications, isLoading } = useGetNotificationsQuery(null, {
    pollingInterval: 5000,
  });

  if (isLoading) {
    return (
      <VStack className={classes.notificationList} gap="16">
        <Skeleton width="300" height="30" />
        <Skeleton width="300" height="45" />
      </VStack>
    );
  }

  return (
    <ToggleFeature
      feature="isAppRedesigned"
      on={(
        <VStack className={classes.notificationListRedesigned}>
          {notifications?.map((notification) => (
            <NotificationItem
              key={notification.id}
              notification={notification}
            />
          ))}
        </VStack>
      )}
      off={(
        <VStack className={classes.notificationList} gap="16">
          {notifications?.map((notification) => (
            <NotificationItem
              key={notification.id}
              notification={notification}
            />
          ))}
        </VStack>
      )}
    />
  );
};

export default NotificationList;
