const KEY = 'c842d6df69ab537d9e67db332ce4bf5c';
export async function FetchTopList() {
  const list = await fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${KEY}`
  );
  const request = await list.json();
  return request.results;
}

export async function FetchByName(name) {
  const list = await fetch(`
    https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${name}`);
  const request = await list.json();
  return request.results;
}
export async function FetchById(id) {
  const response = await fetch(`
    https://api.themoviedb.org/3/movie/507086?api_key=${KEY}`);
  // console.log(list)
  const parsed = await response.json();
  // console.log(parsed);

  return parsed;
}
