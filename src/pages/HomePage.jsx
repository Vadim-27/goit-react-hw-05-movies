import { useState } from 'react';
import { useEffect } from 'react';
import MovieList from 'modules/MovieList/MovieList';
import { getMostPopular } from 'components/shared/services/movies-api';

const HomePage = () => {
  const [items, setItems] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchMovies = async () => {
      try {
        const data = await getMostPopular();
        setItems([...data.results]);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <>
      <h1>Trending movies today</h1>
      {isLoading && <p>loading</p>}
      {error && <p>error</p>}
      {items && <MovieList items={items} />}
    </>
  );
};

export default HomePage;
