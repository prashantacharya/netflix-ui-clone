import { AiFillStar, AiFillCalendar } from 'react-icons/ai';

const Card = ({ movie }) => {
  const placeholderImage =
    'https://www.safbonwater.com/wp-content/uploads/2017/09/image-placeholder.jpg';

  const backdropPath = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
    : placeholderImage;

  return (
    <div className="card">
      <div className="backdrop-wrapper">
        <img src={backdropPath} alt={`${movie.title} backdrop`} />
      </div>
      <div className="card-content">
        <h3>{movie.title}</h3>
        <div className="rating-release">
          <div>
            <AiFillStar /> {movie.vote_average || 'N/A'}
          </div>
          <div>
            <AiFillCalendar /> {movie.release_date || 'Unknown'}
          </div>
        </div>
        <p className="overview">{movie.overview}</p>
      </div>
    </div>
  );
};

export default Card;
