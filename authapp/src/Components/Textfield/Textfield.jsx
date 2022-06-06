import React from 'react';
import { Field, useField } from 'formik';
import { TextField } from '@mui/material';

const Textfield = ({label, ...props}) => {
    const [field, meta] = useField(props);
  return (
      <Field
        as={TextField} 
        fullWidth 
        error={meta.touched && meta.error}
        label={label}
        {...field}
        {...props}
        helperText={meta.touched ? meta.error : false}
        color="primary"
        focused               
        required/>
  )
}

export { Textfield };
