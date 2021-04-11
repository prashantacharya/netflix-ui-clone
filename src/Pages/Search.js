import { parse } from 'query-string';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import CardList from '../Components/CardList';
import http from '../utils/http';

const SearchPage = () => {
  const history = useHistory();
  const { q: query } = parse(window.location.search);
  const [movies, setMovies] = useState([]);

  if (!query) {
    history.push('/');
  }

  useEffect(() => {
    (async function () {
      try {
        const data = await http.get('/search/movie', {
          query: `query=${query}`,
        });

        setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [query]);

  return (
    <div className="search-page">
      <h2>Search results for: {query}</h2>

      <CardList movies={movies} />
    </div>
  );
};

export default SearchPage;
