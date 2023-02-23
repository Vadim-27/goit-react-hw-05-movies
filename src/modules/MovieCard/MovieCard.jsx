import PropTypes from 'prop-types';
import css from './movieCard.module.css';
const MovieCard = ({ movie }) => {
  const {
    vote_average,
    genres,
    release_date,
    backdrop_path,
    overview,
    original_title,
  } = movie;

  const rating = (vote_average * 10).toFixed();

  const takeGenre = genres.map(item => item.name).join(', ');

  const releaseDate = release_date.slice(0, 4);

  return (
    <div className={css.singleMovieBox}>
      <div>
        {backdrop_path ? (
          <img
            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${backdrop_path}`}
            alt=""
          />
        ) : (
          <img src={`https://picsum.photos/id/237/320/240`} alt="" />
        )}
      </div>
      <div>
        <h2>
          {original_title}
          <span>{releaseDate}</span>
        </h2>
        <p>
          User score:
          <span>{rating}%</span>
        </p>
        <h3>Overview</h3>
        <p> {overview}</p>
        <h3>Genres</h3>
        <p>{takeGenre}</p>
      </div>
    </div>
  );
};
export default MovieCard;

MovieCard.defaultProps = {
  movie: [],
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    vote_average: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
    release_date: PropTypes.string.isRequired,
    backdrop_path: PropTypes.string,
    overview: PropTypes.string.isRequired,
    original_title: PropTypes.string.isRequired,
  }).isRequired,
};
