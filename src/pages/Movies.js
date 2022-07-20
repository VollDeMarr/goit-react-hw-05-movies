import { useSearchParams,  } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FetchByName } from "../components/Fetch's/Fetch's";
import FilmList from '../components/FilmList/FilmList';
import Search from 'components/Search/Search';
export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [state, setState] = useState('');

  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) {
      return;
    }
    FetchByName(query).then(response => {
      setState(response.results);
    });
  }, [searchParams]);

  return (
    <div>
      <Search setSearchParams={setSearchParams} />
      <FilmList  state={state} />
    </div>
  );
}
