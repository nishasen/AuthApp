import React from 'react';
import './Styles.css';
import Welcome from '../Assets/Welcome.svg';
import { Hero, UserProfile } from '../Components';

const Profile = () => {
  return (
    <div className="page-body">
      <div className="left-aside">
        <Hero hero={Welcome} />
      </div>
      <div className="right-aside">
        <UserProfile />
      </div>
    </div>
  )
}

export {Profile};