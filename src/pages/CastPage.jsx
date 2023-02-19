// import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { getCastById } from 'components/shared/services/movies-api';

const CastPage = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchCast = async () => {
      try {
        const data = await getCastById(movieId);
        setCast(data.cast);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCast();
  }, [movieId]);

  const elements = cast.map(({ cast_id, name, character, profile_path }) => (
    <li key={cast_id}>
      {profile_path ? (
        <img
          src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${profile_path}`}
          alt=""
        />
      ) : (
        <img src="https://picsum.photos/id/237/320/240" alt="" />
      )}
      <p>{name}</p>
      <p>{character}</p>
    </li>
  ));

  // для кей взят каст_ид
  return (
    <>
      {error && <p>error</p>}
      {isLoading && <p>...Loading</p>}
      {cast.length !== 0 && <ul>{elements}</ul>}
    </>
  );
};
export default CastPage;
