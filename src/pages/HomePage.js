import { useState, useEffect } from 'react';
import FilmList from '../components/FilmList/FilmList';
import { FetchTopList } from "../components/Fetch's/Fetch's";
export default function HomePage() {
  const [state, setState] = useState([]);
  useEffect(() => {
    FetchTopList().then(response => setState(response));
  });

  return (
    <div>
      <h1>Trending today</h1>
      {<FilmList state={state} />}
    </div>
  );
}
