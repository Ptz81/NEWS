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
const ChannelPage = lazy(() => import('./components/pages/Channel.jsx'));

export const WebRoutes = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader/>
  ) : (

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/posts" component={<LoginPage />} />
          }
        />
        <Route
          path="/posts"
          element={
            <PrivateRoute redirectTo="/login" component={<ChannelPage />} />
          }
        />
      </Route>
    </Routes>
  );
};