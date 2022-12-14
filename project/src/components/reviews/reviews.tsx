import {useAppSelector} from '../../hooks';
import ReviewItem from '../review-item/review-item';
import {getReviews} from '../../store/reviews-data/selectors';
import {ReviewsNumber} from '../../const';

function Reviews(): JSX.Element {
  const reviews = useAppSelector(getReviews).slice(ReviewsNumber.MinReviews,ReviewsNumber.MaxReviews);
  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => <ReviewItem key={review.id} review={review} />)}
      </ul>
    </>
  );
}

export default Reviews;
