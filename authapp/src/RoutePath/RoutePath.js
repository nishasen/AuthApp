import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { RequireAuth, NoAuth } from '../Components';
import { Login, Signup, Profile, Error } from '../Pages';

const RoutePath = () => {
  return (
    <Routes>
      <Route element={<NoAuth />}>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>  
      <Route element={<RequireAuth />}>
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export {RoutePath};