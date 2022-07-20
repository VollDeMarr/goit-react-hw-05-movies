import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FetchCast } from "../Fetch's/Fetch's";
import s from './Casts.module.css';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w342/';

export default function Casts() {
  const [state, setState] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    FetchCast(movieId).then(response => {
      setState(response.cast);
    });
  }, [movieId]);

  const elements = state?.map(ell => {
    const alternative = ell.profile_path
      ? `${BASE_IMG_URL}${ell.profile_path}`
      : 'https://i.pinimg.com/564x/7c/ce/30/7cce3030a7b2b9a6e2a41213b5547953.jpg';
    return (
      <li key={ell.id} className={s.item}>
        <img
          className={s.img}
          src={alternative}
          alt={ell.known_for_department}
        />
        <h4>{ell.name}</h4>
        <p>{ell.character}</p>
      </li>
    );
  });
  return (
    <div className={s.container}>
      <ul className={s.list}>{elements}</ul>
    </div>
  );
}
