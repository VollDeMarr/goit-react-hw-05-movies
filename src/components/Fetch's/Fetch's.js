export async function FetchTopList() {
  const list = await fetch(
    'https://api.themoviedb.org/3/trending/movie/week?api_key=c842d6df69ab537d9e67db332ce4bf5c'
  );
  const request = await list.json();
  // console.log(request.results);
  return request.results;
}
