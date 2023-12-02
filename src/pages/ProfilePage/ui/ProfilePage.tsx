import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { EditableProfileCard } from '@/features/EditableProfileCard';
import { Typography, VStack } from '@/shared/ui';
import { Page } from '@/widgets/Page';
import { ArticleDetailsParams } from '../../ArticleDetailsPage/ui/ArticleDetailsPage/ArticleDetailsPage';

const ProfilePage = () => {
  const { t } = useTranslation('profile');
  const { id } = useParams<ArticleDetailsParams>();

  if (!id) {
    return <Typography title={t('article does not exist')} />;
  }

  return (
    <Page>
      <VStack gap="16">
        <EditableProfileCard id={id} />
      </VStack>
    </Page>
  );
};

export default ProfilePage;
