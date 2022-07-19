import { Routes, Route } from 'react-router-dom';
import Navigation from '../components/Navigation/Navigation'
import HomePage from 'pages/HomePage';
import Movies from 'pages/Movies';

export const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </>
  );
};
