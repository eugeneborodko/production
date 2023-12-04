import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from '@/entities/Article';
import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import {
  useAddArticleRatingMutation,
  useGetArticleRatingQuery,
} from '../../api/writeArticleReview';

interface WriteArticleReviewProps {
  className?: string;
  articleId: string;
}

export const WriteArticleReview: FC<WriteArticleReviewProps> = ({
  className,
  articleId,
}) => {
  const { t } = useTranslation('rating');
  const [review, setReview] = useState('');

  const article = useSelector(getArticleDetailsData);
  const authData = useSelector(getUserAuthData);

  const { data: rating } = useGetArticleRatingQuery({
    articleId,
    userId: authData?.id ?? '',
  });

  const [addArticleRating] = useAddArticleRatingMutation();

  const onSubmit = useCallback(
    (rating: number) => {
      try {
        addArticleRating({
          articleId: article?.id ?? '',
          userId: authData?.id ?? '',
          rate: rating,
          review,
        });
      } catch (error) {
        console.log(error);
      }
    },
    [addArticleRating, article?.id, authData?.id, review],
  );

  return (
    <RatingCard
      rating={rating?.rate ?? 0}
      title={t('Rate this article')}
      modalTitle={t('Write a review')}
      modalInputLabel={t('Your review')}
      review={review}
      setReview={setReview}
      onSubmit={onSubmit}
    />
  );
};
