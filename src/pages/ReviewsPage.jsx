import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsById } from 'components/shared/services/movies-api';

const ReviewsPage = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchReviews = async () => {
      try {
        const data = await getReviewsById(movieId);
        setReviews(data.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, [movieId]);

  const elements = reviews.map(({ id, author, content }) => {
    return (
      <li key={id}>
        <h4>{author}</h4>
        <p>{content}</p>
      </li>
    );
  });

  return (
    <>
      {error && <p>error message</p>}
      {isLoading && <p>...Loading</p>}
      {reviews.length !== 0 && <ul>{elements}</ul>}
    </>
  );
};
export default ReviewsPage;
