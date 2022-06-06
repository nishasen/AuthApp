import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, Outlet, Navigate } from 'react-router-dom';

const NoAuth = () => {
    const location = useLocation();
    const { isLogin } = useSelector(state => state.auth);
  return (
    !isLogin ? <Outlet /> : <Navigate state={{ from: location }} to="/profile" />
  )
}

export {NoAuth};
