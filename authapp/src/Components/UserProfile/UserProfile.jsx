import { Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import './UserProfile.css';

const UserProfile = () => {
    const { user } = useSelector(state => state.auth)
  return (
    <>
    {user ? 
        <div className="user-profile">
        <img src={user?.avatar} alt="user" className="profile profile-lg"/>
        <Typography variant="h5">{user?.firstname + " " + user?.lastname}</Typography>
        <Typography variant="body1" sx={{color: "grey"}}>{user?.email}</Typography>
        </div>
        :
        ""}
    </>
  )
}

export {UserProfile};