import React from 'react';
import './Styles.css';
import PageNotFound from '../Assets/PageNotFound.svg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Error = () => {
    const { isLogin } = useSelector(state => state.auth);
  return (
    <div className="error-page">
      <img src={PageNotFound} alt="page not found" className="error-image" />
      <Link to={isLogin ? "profile" : "/"}>Go back</Link>
    </div>
  )
}

export {Error};
