import { useTranslation } from 'react-i18next';
import { Avatar, Button } from '@/shared/ui/redesigned';
import classes from './ProfileCardHeader.module.scss';

interface ProfileCardHeaderProps {
  avatar: string | undefined;
  username: string | undefined;
  onSave: () => void;
  onCancel: () => void;
  onEdit: () => void;
  readOnly: boolean;
}

export const ProfileCardHeader = ({
  avatar,
  username,
  onSave,
  onCancel,
  onEdit,
  readOnly,
}: ProfileCardHeaderProps) => {
  const { t } = useTranslation('profile');

  return (
    <header className={classes.header}>
      <div className={classes.cancel}>
        {!readOnly && (
          <Button
            variant="cancel"
            onClick={onCancel}
            data-testid="EditableProfileCardHeader.CancelButton"
          >
            {t('cancel')}
          </Button>
        )}
      </div>
      <div className={classes.avatar}>
        {avatar && <Avatar src={avatar} alt={username} />}
      </div>
      <div className={classes.editable}>
        {readOnly ? (
          <Button
            variant="outlined"
            onClick={onEdit}
            data-testid="EditableProfileCardHeader.EditButton"
          >
            {t('edit profile')}
          </Button>
        ) : (
          <Button
            variant="save"
            onClick={onSave}
            data-testid="EditableProfileCardHeader.SaveButton"
          >
            {t('save')}
          </Button>
        )}
      </div>
    </header>
  );
};
