import { Link } from 'react-router-dom';
export default function FilmList({ state }) {
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
