
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import MovieList from 'modules/MovieList/MovieList';
import { searchMovies } from 'components/shared/services/movies-api';


const Movies = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');

  


  useEffect(() => {
    if (search === '' || search === null) {
      return;
    }
    setLoading(true);
    const fetchMovies = async () => {
      try {
        const data  = await searchMovies(search);
       
        setItems([...data.results]);
      } catch (error) {
        setError(<p>error</p>);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
    
  }, [search]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ search: form.elements.search.value });
    
    form.reset();
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor=""> Search movies</label>
        <input
         
          type="text"
          name="search"
          placeholder="Search movies"
        />
        <button type="submit">Search</button>
      </form>
      {isLoading && <p>loading</p>}
      {error && <p>error</p>}

      {items && <MovieList items={items}  />}
    </>
  );
};
export default Movies;
