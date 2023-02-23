import { useEffect, useState } from 'react';
import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { getMovieById } from 'components/shared/services/movies-api';
import { Outlet } from 'react-router-dom';
import MovieCard from 'modules/MovieCard/MovieCard';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();

  const navigate = useNavigate();

  const from = location.state?.from ?? '/';

  const [movie, setMovie] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchMovie = async () => {
      try {
        const result = await getMovieById(movieId);

        setMovie(result);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovie();
  }, [movieId]);

  const goBack = useCallback(() => navigate(from), [navigate, from]);

  return (
    <>
      {isLoading && <p>loading</p>}
      {error && <p>error</p>}
      <button onClick={goBack}> Go back</button>

      {movie.length !== 0 && <MovieCard movie={movie} />}
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast" state={{ from }}>
              cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from }}>
              reviews
            </Link>

            <Outlet />
          </li>
        </ul>
      </div>
    </>
  );
};
export default MovieDetails;
