import React from 'react';
import './Styles.css';
import LoginImage from '../Assets/LoginImage.svg';
import { Hero, LoginForm } from '../Components';

const Login = () => {
  return (
    <div className="page-body">
      <div className="left-aside">
        <Hero hero={LoginImage} />
      </div>
      <div className="right-aside">
        <LoginForm />
      </div>
    </div>
  )
}

export {Login};