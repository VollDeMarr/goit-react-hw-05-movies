import { Routes, Route } from 'react-router-dom';
import Navigation from '../components/Navigation/Navigation';
import HomePage from 'pages/HomePage';
import Movies from 'pages/Movies';
import MoviesDetailsView from 'pages/MoviesDetailsView';
import Casts from './Casts/Casts';
import Reviews from './Reviews/Reviews';

export const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MoviesDetailsView />}>
          <Route path="casts" element={<Casts />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </>
  );
};
