import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { IconButton, Typography } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import './Topnav.css'; 
import { loggedOut } from '../../Features';
import { useNavigate } from 'react-router-dom';

const Topnav = () => {
  const { isLogin } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="topnav">
        <Typography variant="h4" sx={{color:"white"}}>AuthApp</Typography>
        {isLogin && 
          <IconButton sx={{color:"white", border: "2px solid white"}} onClick={()=>{
            dispatch(loggedOut())
            navigate('/', {replace: true})}}><LogoutIcon /></IconButton>
        }
    </div>
  )
}

export {Topnav};