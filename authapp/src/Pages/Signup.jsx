import React from 'react';
import './Styles.css';
import SignupImage from '../Assets/SignupImage.svg';
import { Hero, SignupForm } from '../Components';

const Signup = () => {
  return (
    <div className="page-body">
      <div className="left-aside">
        <Hero hero={SignupImage} />
      </div>
      <div className="right-aside">
        <SignupForm />
      </div>
    </div>
  )
}

export {Signup};