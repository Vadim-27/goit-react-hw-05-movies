
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types"
import css from "./movie-list.module.css"


const MovieList = ({ items }) => {
    const location = useLocation();
    const elements = items.map(({ id, title, name }) => (
      <Link
        className={css.item}
        key={id}
        to={`/movies/${id}`}
        state={{ from: location }}
      >
        <li>
          <p>{title || name}</p>
        </li>
      </Link>
    ));

    return <ul className={css.list}>{elements}</ul>;
}
export default MovieList;

MovieList.defaultProps = {
  items: [],
}

MovieList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};
