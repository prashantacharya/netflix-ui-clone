import { useState, useEffect } from 'react';

import CardList from './CardList';

import http from '../utils/http';

const PopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        const data = await http.get(
          '/movie/popular?api_key=a835f6e97d95d6002e03d39613cdc3ac'
        );

        setPopularMovies(data.results);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <div className="popular-movies">
      <h2>Popular Movies</h2>

      <CardList movies={popularMovies} />
    </div>
  );
};

export default PopularMovies;
