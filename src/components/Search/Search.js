import { useState } from 'react';
export default function Search({ setSearchParams }) {
  const [state, setState] = useState('');

  const changeInput = e => {
    setState(e.currentTarget.value);
  };

  const submitForm = e => {
    e.preventDefault();
    const queryString = state.trim().split(' ').join('+');
    setSearchParams({ query: queryString });
  };
  return (
    <form onSubmit={submitForm}>
      <input onChange={changeInput} type="text" autoFocus/>
      <button type="submit">Search</button>
    </form>
  );
}
