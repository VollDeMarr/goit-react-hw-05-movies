import { useSearchParams,  } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FetchByName } from "../components/Fetch's/Fetch's";
import FilmList from '../components/FilmList/FilmList';
import Search from 'components/Search/Search';
export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState('');
  const [query, setQuery] = useState('')
const from = `/movies/query=${query}`;
  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) {
      return;
    }
    setQuery(query);
    FetchByName(query).then(response => {
      setData(response.results);
    });
  }, [searchParams]);

  return (
    <div>
      <Search setSearchParams={setSearchParams} />
      <FilmList state={{ from: from }} data={data} />
    </div>
  );
}
