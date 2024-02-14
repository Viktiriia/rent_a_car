import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Loader from 'components/Loader';

import { StyledAppContainer, StyledNavLink } from 'App.styled';

const HomePage = lazy(() => import('pages/HomePage'));
const CarsPage = lazy(() => import('pages/CarsPage'));
const CarDetailsPage = lazy(() => import('pages/CarDetailsPage'));

export const App = () => {
  return (
    <StyledAppContainer>
      <header>
        <nav>
          <StyledNavLink className="header-link" to="/">
            Home
          </StyledNavLink>
          <StyledNavLink className="header-link" to="/cars">
            Cars
          </StyledNavLink>
        </nav>
      </header>

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cars" element={<CarsPage />} />
          <Route path="/car-details/:carId/*" element={<CarDetailsPage />} />
        </Routes>
      </Suspense>
    </StyledAppContainer>
  );
};