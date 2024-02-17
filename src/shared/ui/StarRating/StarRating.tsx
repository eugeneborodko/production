import { FC } from 'react';
import StarIcon from '@/shared/assets/icons/star.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import classes from './StarRating.module.scss';

interface StarRatingProps {
  className?: string;
  onSelect: (star: number) => () => void;
  size?: number;
  selectedStars: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating: FC<StarRatingProps> = ({
  className,
  onSelect,
  size = 30,
  selectedStars = 0,
}) => (
  <div className={classNames(classes.starRating, {}, [className])}>
    {stars.map((star) => (
      <StarIcon
        className={classNames(classes.starIcon, {
          [classes.active]: star <= selectedStars,
        })}
        width={size}
        height={size}
        key={star}
        onClick={onSelect(star)}
        data-testid={`StarRating.rating-${star}`}
        data-selected={star === selectedStars}
      />
    ))}
  </div>
);
