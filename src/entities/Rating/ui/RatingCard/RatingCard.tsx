import { useCallback, useEffect, useState } from 'react';
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
  rating: number;
  title: string;
  modalTitle: string;
  modalInputLabel: string;
  review: string;
  setReview: (review: string) => void;
  onSubmit: (rating: number) => void;
}

export const RatingCard = ({
  rating,
  title,
  review,
  setReview,
  modalTitle,
  modalInputLabel,
  onSubmit,
}: RatingCardProps) => {
  const { t } = useTranslation('rating');
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [selectedStars, setSelectedStars] = useState(rating);
  const cardTitle = selectedStars ? t('Thank you for your review') : title;

  useEffect(() => {
    setSelectedStars(rating);
  }, [rating]);

  const onChangeReview = useCallback(
    (value: string) => {
      setReview(value);
    },
    [setReview],
  );

  const onSelectRating = useCallback(
    (stars: number) => () => {
      if (rating) return;

      setIsModalOpened(true);
      setSelectedStars(stars);
    },
    [rating],
  );

  const onModalClose = useCallback(() => {
    setIsModalOpened(false);
  }, []);

  const onSubmitRating = useCallback(() => {
    onSubmit(selectedStars);
    setIsModalOpened(false);
  }, [onSubmit, selectedStars]);

  const onCancel = useCallback(() => {
    onModalClose();
    setSelectedStars(0);
  }, [onModalClose]);

  return (
    <Card fullWidth>
      <VStack gap="16" align="center">
        <Typography title={cardTitle} />
        <StarRating onSelect={onSelectRating} selectedStars={selectedStars} />
      </VStack>
      <Modal isOpened={isModalOpened} onClose={onCancel}>
        <VStack gap="16">
          <Typography title={modalTitle} />
          <Input
            label={modalInputLabel}
            onChange={onChangeReview}
            value={review}
          />
          <HStack gap="32" justify="end">
            <Button
              variant={ButtonVariants.OUTLINED_GREEN}
              onClick={onSubmitRating}
            >
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
