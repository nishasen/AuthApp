import { Typography, Skeleton } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import './UserProfile.css';

const UserProfile = () => {
    const { user, loading } = useSelector(state => state.auth)
  return (
    <>
    {loading ? 
        <div className="user-profile">
            <Skeleton animation="wave" variant="circular" width={60} height={60} />
            <Skeleton animation="wave" variant="text" width={100}/>
            <Skeleton animation="wave" variant="text" width={80}/>
        </div>
        :
        <div className="user-profile">
        <img src={user?.avatar} alt="user" className="profile profile-lg"/>
        <Typography variant="h5">{user?.firstname + " " + user?.lastname}</Typography>
        <Typography variant="body1" sx={{color: "grey"}}>{user?.email}</Typography>
        </div>
        }
    </>
  )
}

export {UserProfile};