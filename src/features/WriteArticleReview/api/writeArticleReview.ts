import { rtkApi } from '@/shared/api/rtkApi';
import { Rating } from '@/entities/Rating';

interface ArticleRatingRequest {
  articleId: string;
  userId: string;
}

interface AddArticleRatingRequest {
  userId: string;
  articleId: string;
  rate: number;
  review: string;
}

const writeArticleReviewApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRating: build.query<Rating, ArticleRatingRequest>({
      query: ({ articleId, userId }) => ({
        url: '/article-ratings',
        params: {
          articleId,
          userId,
        },
      }),
      transformResponse: (response: Rating[]) => response[0],
    }),
    addArticleRating: build.mutation<void, AddArticleRatingRequest>({
      query: ({
        articleId, userId, rate, review,
      }) => ({
        url: '/article-ratings',
        method: 'POST',
        body: {
          articleId,
          userId,
          rate,
          review,
        },
      }),
    }),
  }),
});

export const { useGetArticleRatingQuery, useAddArticleRatingMutation } = writeArticleReviewApi;
