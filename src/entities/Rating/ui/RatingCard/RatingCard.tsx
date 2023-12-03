import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Button,
  Card,
  HStack,
  Input,
  Modal,
  StarRating,
  Typography,
  VStack,
} from '@/shared/ui';
import { ButtonVariants } from '@/shared/ui/Button/Button';

interface RatingCardProps {
  title: string;
  modalTitle: string;
  modalInputLabel: string;
}

export const RatingCard = ({
  title,
  modalTitle,
  modalInputLabel,
}: RatingCardProps) => {
  const { t } = useTranslation('rating');
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [selectedStars, setSelectedStars] = useState(0);

  const onSelectRating = useCallback(
    (stars: number) => () => {
      setIsModalOpened(true);
      setSelectedStars(stars);
    },
    [],
  );

  const onModalClose = useCallback(() => {
    setIsModalOpened(false);
  }, []);

  const onCancel = useCallback(() => {
    onModalClose();
    setSelectedStars(0);
  }, [onModalClose]);

  return (
    <Card fullWidth>
      <VStack gap="16">
        <Typography title={title} />
        <StarRating onSelect={onSelectRating} selectedStars={selectedStars} />
      </VStack>
      <Modal isOpened={isModalOpened} onClose={onCancel}>
        <VStack gap="16">
          <Typography title={modalTitle} />
          <Input label={modalInputLabel} />
          <HStack gap="32" justify="end">
            <Button variant={ButtonVariants.OUTLINED_GREEN}>
              {t('submit')}
            </Button>
            <Button variant={ButtonVariants.OUTLINED_RED} onClick={onCancel}>
              {t('Cancel')}
            </Button>
          </HStack>
        </VStack>
      </Modal>
    </Card>
  );
};
