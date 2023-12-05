import { useParams } from 'react-router-dom';
import { ArticleDetailsParams } from '../../ArticleDetailsPage/ui/ArticleDetailsPage/ArticleDetailsPage';
import { EditableProfileCard } from '@/features/EditableProfileCard';
import { VStack } from '@/shared/ui';
import { Page } from '@/widgets/Page';

const ProfilePage = () => {
  const { id } = useParams<ArticleDetailsParams>();

  return (
    <Page>
      <VStack gap="16">
        <EditableProfileCard id={id!} />
      </VStack>
    </Page>
  );
};

export default ProfilePage;
