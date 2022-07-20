import { useState, useEffect } from 'react';
import FilmList from '../components/FilmList/FilmList'
import { FetchTopList } from "../components/Fetch's/Fetch's";
export default function HomePage() {
  const [state, setState] = useState([]);
  useEffect(() => {
    FetchTopList().then(response => setState(response));
  });


  // const elements = state.map(ell => {
  //   return (
  //     <li key={ell.id}>
  //       <Link to={`/movies/${ell.id}`}>{ell.title} </Link>
  //     </li>
  //   );
  // });
  return (
    <div>
      <h1>Trending today</h1>
      {<FilmList state={state} />}
      {/* <ul>{elements}</ul> */}
    </div>
  );
}
