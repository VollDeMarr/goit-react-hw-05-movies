import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function FilmList({ state }) {
  const location = useLocation();
  console.log(location);
  if (!state) {
    return;
  }
  const elements = state.map(ell => {
    return (
      <li key={ell.id}>
        <Link to={`/movies/${ell.id}`}>{ell.title} </Link>
      </li>
    );
  });
  return <ul>{elements}</ul>;
}
