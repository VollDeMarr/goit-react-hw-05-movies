import { Link } from 'react-router-dom';
export default function FilmList({ data, state }) {
  if (!data) {
    return;
  }

  const elements = data.map(ell => {
    return (
      <li key={ell.id}>
        <Link to={`/movies/${ell.id}`} state={{ from: state }}>
          {ell.title}
        </Link>
      </li>
    );
  });
  return <ul>{elements}</ul>;
}
