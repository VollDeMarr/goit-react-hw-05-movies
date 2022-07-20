const KEY = 'c842d6df69ab537d9e67db332ce4bf5c';
export async function FetchTopList() {
  const list = await fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${KEY}`
  );
  const request = await list.json();
  return request.results;
}

export async function FetchByName(name) {
  const response = await fetch(`
    https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${name}`);
  const parsed = await response.json();
  return parsed;
}
export async function FetchById(id) {
  const response = await fetch(`
    https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}`);
  const parsed = await response.json();
  return parsed;
}
export async function FetchCast(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}`
  );
  const parsed = await response.json();
  return parsed;
}
export async function FetchReviews(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${KEY}`
  );
  const parsed = await response.json();
  return parsed;
}
// https://api.themoviedb.org/3/review/{review_id}?api_key=<<api_key>>
