import { FC } from 'react';
import { Notification } from '../../model/types/notification';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeature } from '@/shared/lib/featureFlags';
import {
  Card as CardDeprecated,
  Typography as TypographyDeprecated,
} from '@/shared/ui/deprecated';
import { Card, Typography } from '@/shared/ui/redesigned';
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
    <ToggleFeature
      feature="isAppRedesigned"
      on={(
        <Card
          className={classNames(classes.notificationItem, {}, [className])}
          padding="8"
        >
          <Typography
            className={classes.text}
            title={title}
            text={description}
          />
          {href && (
            <a className={classes.link} href={href} target="_blank" rel="noreferrer">
              {href}
            </a>
          )}
        </Card>
      )}
      off={(
        <CardDeprecated
          className={classNames(classes.notificationItem, {}, [className])}
        >
          <TypographyDeprecated
            className={classes.text}
            title={title}
            text={description}
          />
          {href && (
            <a href={href} target="_blank" rel="noreferrer">
              {href}
            </a>
          )}
        </CardDeprecated>
      )}
    />
  );
};
