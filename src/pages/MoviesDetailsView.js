import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { FetchById, FetchCast } from "components/Fetch's/Fetch's";
import s from './MoviesDetailsView.module.css';

export default function MoviesDetailsView() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');
  //   const [cast, setCast] = useState('');

  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w342/';

  useEffect(() => {
    function movieGenres(array) {
      return array
        .map(genre => {
          return genre.name;
        })
        .join(' ');
    }

    FetchById(movieId).then(response => {
      const genres = movieGenres(response.genres);
      console.log(response);
      setMovie({ ...response, genres });
    });

    FetchCast(movieId).then(response => {
      //   console.log(response.cast);
      //   setCast(response.cast);
    });
    // FetchById(movieId).then(response => setMovie(response));
  }, [movieId]);

  if (!movie) {
    return;
  }
  return (
    <>
      <div className={s.wrapper}>
        <button className={s.btn} type="button">
          &#9754; return
        </button>

        <div className={s.container}>
          <img src={`${BASE_IMG_URL}${movie?.poster_path}`} alt={movie.title} />
          <div className={s.descr}>
            <h2>
              {movie.title} ({movie.release_date.slice(0, 4)})
            </h2>
            <p>{movie.tagline}</p>
            <h4>User score: {movie.vote_average}</h4>

            <h4>Overview</h4>
            <p>{movie.overview}</p>

            <h4>Genres</h4>
            <p>{movie.genres}</p>
          </div>
        </div>
      </div>
      <div className={s.outlet}>
        <ul className={s.list}>
          <li>
            <Link to="casts">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
}
