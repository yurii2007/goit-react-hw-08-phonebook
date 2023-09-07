import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from 'redux/selectors';
import { refreshUser } from 'redux/auth/operations';
import { Loader } from './Loader/Loader';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const HomePage = lazy(()=> import('pages/Home'));
const LoginPage = lazy(()=> import('pages/Login'));
const RegisterPage = lazy(()=> import('pages/Register'));
const ContactsPage = lazy(()=> import('pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if(isRefreshing) return <Loader />

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='/login' element={
          <RestrictedRoute redirectTo='/contacts' component={<LoginPage />} />
        } />
        <Route path='/register' element={
          <RestrictedRoute redirectTo='/contacts' component={<RegisterPage />} />
        } />
        <Route path='/contacts' element={
          <PrivateRoute redirectTo='/login' component={<ContactsPage />} />
        } />
      </Route>
      <Route path="*" element={<Navigate to='/' />} />
    </Routes>
  );
};
