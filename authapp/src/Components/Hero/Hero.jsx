import React from 'react';
import './Hero.css';

const Hero = ({hero}) => {
  return (
    <img src={hero} alt="hero" className="hero"/>
  )
}

export {Hero};