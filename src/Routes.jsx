import { useAuth } from './hooks/useAuth.js';
import {lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from './redux/auth/operations.js';
import { Layout } from './components/sharedLayout/sharedLayout.jsx';
import { RestrictedRoute } from './components/RestrictedRoute.jsx';
import { PrivateRoute } from './components/PrivateRoute.jsx';
import Loader from './components/Loader/Loader.jsx';


const HomePage = lazy(() => import('./components/pages/Home.jsx'));
const LoginPage = lazy(() => import('./components/pages/Login.jsx'));
const NewsPage = lazy(() => import('./components/pages/News.jsx'));

export const WebRoutes = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader/>
  ) : (
          // return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/table" component={<LoginPage />} />
          }
        />
        <Route
          path="/table"
          element={
            <PrivateRoute redirectTo="/login" component={<NewsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};