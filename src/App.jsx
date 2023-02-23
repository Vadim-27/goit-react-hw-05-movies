import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import { Suspense } from "react";
const Navbar = lazy(() => import("./modules/Navbar/Navbar"));
const HomePage = lazy(() => import('./pages/HomePage'));
const MovieDetails = lazy(() => import('./pages/MoviesDeteilsPage/MovieDetails'));
const CastPage = lazy(() => import('./pages/CastPage'));
const Movies = lazy(() => import('./pages/Movies/Movies'));
const ReviewsPage = lazy(() => import('./pages/ReviewsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));


export const App = () => {
  return (
    <Suspense fallback={<p>...Loading</p>}>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<CastPage />} />
            <Route path="reviews" element={<ReviewsPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
