import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Loader from 'components/Loader';

import { StyledAppContainer, StyledNavLink } from 'App.styled';

const HomePage = lazy(() => import('pages/HomePage'));
const CarsPage = lazy(() => import('pages/CarsPage'));
const CarDetailsPage = lazy(() => import('pages/CarDetailsPage'));
const FavoritePage = lazy(() => import('pages/FavoritePage'));

export const App = () => {
  return (
    <StyledAppContainer>
      <header>
        <nav>
          <StyledNavLink className="header-link" to="/">
            Home
          </StyledNavLink>
          <StyledNavLink className="header-link" to="/catalog">
            Catalog
          </StyledNavLink>
          <StyledNavLink className="header-link" to="/favorite">
          Favorite
          </StyledNavLink>
        </nav>
      </header>

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CarsPage />} />
          <Route path="/car-details/:carId/*" element={<CarDetailsPage />} />
          <Route path="/favorite" element={<FavoritePage />} />

        </Routes>
      </Suspense>
    </StyledAppContainer>
  );
};