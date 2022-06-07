import React, { useState } from 'react';
import { Button, Typography, IconButton } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import LoginIcon from '@mui/icons-material/Login';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link, useNavigate } from 'react-router-dom';
import { Textfield } from '..';
import './Auth.css';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { Avatars } from '../../Utilities';
import { CreateUser } from '../../Services';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

const SignupForm = () => {
  const navigate = useNavigate();  
  const dispatch = useDispatch(); 
  const { loading } = useSelector(state => state.auth);
  const [password, setPassword] = useState('password')
  return (
    <Formik initialValues = {{
      avatar: Avatars[0].url,
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    }}
    validationSchema = {Yup.object({
      firstname: Yup.string()
        .required('Firstname required'),
      lastname: Yup.string()
        .required('Lastname required'),   
      email: Yup.string()
        .email('Invalid email')
        .required('Email required'),
      password: Yup.string()
        .required('Password required')
        .min(8, 'Password is too short, minimum 8 characters required')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
            "Atleast One Uppercase, One Lowercase, One Number and one special case Character"
          ),
    })}
    onSubmit = {(values, actions) => {
      const userData = JSON.parse(JSON.stringify(values, null, 5));
      CreateUser(userData, dispatch, navigate, actions);
    }}>
      {formik => (<Form className="auth-form" onSubmit={formik.handleSubmit}>
          <Typography variant="h4"> Signup</Typography>
          <Typography variant="p">Choose your avatar</Typography>
          <div className="avatar-box">
            {Avatars.map(avatar=>
            <label htmlFor={avatar.name} key={avatar.name}>
              <Field type="radio" id={avatar.name} name="avatar" checked={formik.values.avatar===avatar.url} value={avatar.url} onChange={formik.handleChange}/>
              <span className={formik.values.avatar===avatar.url ? 'avatar avatar-focus' : 'avatar'}>
                <img src={avatar.url} key={avatar.name} alt="avatar" className="profile profile-md" />   
              </span>
            </label>)}
          </div>
          <div className="name-fields">
              <Textfield name="firstname" type="text" label="Firstname"/>
              <Textfield name="lastname" type="text" label="Lastname"/>
          </div>
          <Textfield name="email" type="email" label="Email"/>
          <div className="password-container">
            <Textfield label="Password" name="password" type={password} />
            <div className="password-icons">
              {password==="password" ?
                <IconButton onClick={()=>setPassword('text')}><VisibilityOffIcon /></IconButton>
                :
                <IconButton onClick={()=>setPassword('password')}><VisibilityIcon /></IconButton>
              }
            </div>
          </div>
          <LoadingButton variant="contained" type="submit" endIcon={<LoginIcon />} loading={loading} loadingPosition="end" fullWidth>Signup</LoadingButton>
          <div className="account-check">Already have an acount? <Link to="/" className="link"><Button size="sm" endIcon={<ArrowForwardIosIcon fontSize="small"/>}>Login</Button></Link></div>
      </Form>)}
    </Formik>
  )
}

export { SignupForm };

