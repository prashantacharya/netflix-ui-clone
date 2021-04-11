import Card from './Card';

const CardList = ({ movies }) => (
  <div className="card-container">
    {movies.map((movie) => (
      <Card movie={movie} key={movie.id} />
    ))}
  </div>
);

export default CardList;
