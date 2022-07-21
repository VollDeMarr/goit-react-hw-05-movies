import { useState, useEffect } from 'react';
import FilmList from '../components/FilmList/FilmList';
import { FetchTopList } from "../components/Fetch's/Fetch's";
export default function HomePage() {
  const [data, setData] = useState([]);
  const from = '/';
  useEffect(() => {
    FetchTopList().then(response => setData(response));
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {<FilmList data={data} state={from} />}
    </div>
  );
}
