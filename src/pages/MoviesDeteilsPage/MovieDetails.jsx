
import { useEffect, useState } from 'react';
import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { useLocation } from 'react-router-dom';

import { getMovieById } from 'components/shared/services/movies-api';
import { Outlet } from 'react-router-dom';
import css from "./movies-deteils-page.module.css"

const MovieDetails = () => {
  const { movieId } = useParams();
    const location = useLocation();
    console.log(location, "location");
    const navigate = useNavigate();

  const from = location.state?.from ?? '/';

  const [movie, setMovie] = useState([]);
  const [error, setError] = useState('');
  const [rating, setRating] = useState(0);
  const [genres, setGenres] = useState('');
  const [year, setYear] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    
 
    
  

  useEffect(() => {
    setIsLoading(true);
    const fetchMovie = async () => {
      try {
        const result = await getMovieById(movieId);
        console.log(result);
        setMovie(result);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovie();
  }, [movieId]);

 
  useEffect(() => {
      if (movie.length !== 0) {
          console.log(movie.vote_average);
          const rating = (movie.vote_average * 10).toFixed();
          setRating(rating);
    
          const genresList = movie.genres;

      
          const takeGenre = genresList.map(item => item.name).join(', ');
          setGenres(takeGenre);
          const releaseDate = movie.release_date.slice(0, 4);
          setYear(releaseDate);
      }
}, [movie]);
    const goBack = useCallback(() => navigate(from), [navigate, from]);
    
  return (
    <>
      {isLoading && <p>loading</p>}
      {error && <p>error</p>}
      <button onClick={goBack}> Go back</button>
      <div className={css.singleMovieBox}>
        <div>
          {movie.backdrop_path ? (
            <img
              src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movie.backdrop_path}`}
              alt=""
            />
          ) : (
            <img src={`https://picsum.photos/id/237/320/240`} alt="" />
          )}
        </div>
        <div>
          <h2>
            {movie?.original_title}
            <span>{year}</span>
          </h2>
          <p>
            User score:
            <span>{rating}%</span>
          </p>
          <h3>Overview</h3>
          <p> {movie?.overview}</p>
          <h3>Genres</h3>
          <p>{genres}</p>
        </div>
      </div>
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
