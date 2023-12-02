import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Typography } from 'shared/ui';
import { Notification } from '../../model/types/notification';
import classes from './NotificationItem.module.scss';

interface NotificationItemProps {
  className?: string;
  notification: Notification;
}

export const NotificationItem: FC<NotificationItemProps> = ({
  className,
  notification,
}) => {
  const { description, title, href } = notification;

  return (
    <div className={classNames(classes.notificationItem, {}, [className])}>
      <Typography className={classes.text} title={title} text={description} />
      {href && (
        <a href={href} target="_blank" rel="noreferrer">
          {href}
        </a>
      )}
    </div>
  );
};
