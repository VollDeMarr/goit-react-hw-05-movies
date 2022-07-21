// import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function FilmList({ data, state}) {
  // const location = useLocation();

  if (!data) {
    return;
  }
  // console.log(state)
  const elements = data.map(ell => {
    return (
      <li key={ell.id}>
        <Link to={`/movies/${ell.id}`} state={{from:state}}>
          {ell.title} 
        </Link>
      </li>
    );
  });
  return <ul>{elements}</ul>;
}
