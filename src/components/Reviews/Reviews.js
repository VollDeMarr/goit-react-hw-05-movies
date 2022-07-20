import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import s from './Reviews.module.css';
import { FetchReviews } from "../Fetch's/Fetch's";
export default function Reviews() {
  const [state, setState] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    FetchReviews(movieId).then(response => {
      console.log(response.results);
      setState(response.results);
    });
  }, [movieId]);
  const elements = state?.map(ell => {
    return (
      <li className={s.item} key={ell.id}>
        <h4>{ell.author}</h4>
        <p>{ell.content}</p>
      </li>
    );
  });
  return (
    <div className={s.container}>
      <ul className={s.list}>{elements}</ul>
    </div>
  );
}
