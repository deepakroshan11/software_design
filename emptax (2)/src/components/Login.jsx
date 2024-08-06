import { css, keyframes } from '@emotion/react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Paper, TextField, Typography } from '@mui/material';
import { ErrorMessage, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateY(-10px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Login = () => {
  const navigate = useNavigate();
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [loginType, setLoginType] = useState('username');

  const initialValues = {
    identifier: '',
    password: ''
  };

  const validationSchema = Yup.object({
    identifier: Yup.string().required('Required'),
    password: Yup.string().required('Required')
  });

  const handleSubmit = (values) => {
    console.log(values);
    navigate('/user');
  };

  const handleForgotPassword = (values) => {
    console.log('Forgot Password:', values);
    setIsForgotPasswordOpen(false);
  };

  const handleSignUp = (values) => {
    console.log('Sign Up:', values);
    setIsSignUpOpen(false);
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh" >
      <Paper elevation={3} className="login-box" style={{width:'25rem'}} >
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <Formik  initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit} >
          {({ handleChange, handleBlur, values }) => (
            <Form style={{gap:'20px'}}> 
              <Box >
                <TextField
                style={{width:'20rem'}}
                id="identifier"
                name="identifier"
                label={loginType === 'username' ? 'Username' : loginType === 'mobile' ? 'Mobile Number' : 'Policy Number'}
                // fullWidth
                margin="normal"
                value={values.identifier}
                onChange={handleChange}
                onBlur={handleBlur}
                />
                <ErrorMessage name="identifier" component="div" className="error" />
              </Box>
              <Box>
                <TextField
                  id="password"
                  style={{width:'20rem'}}
                  name="password"
                  label="Password"
                  type="password"
                  fullWidth
                  margin="normal"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  />
                <ErrorMessage name="password" component="div" className="error" />
              </Box>
                  
              <Button type="submit" variant="contained" color="primary" style={{width:'20rem'}} >
                Login
              </Button>
            </Form>
          )}
        </Formik>
        <Button onClick={() => setIsForgotPasswordOpen(true)} color="secondary" fullWidth >
          Forgot Password?
        </Button>
        <Button onClick={() => setIsSignUpOpen(true)} color="secondary" fullWidth css={css`animation: ${slideIn} 0.5s ease-in-out 0.8s;`}>
          Sign Up
        </Button>
        <Button onClick={() => setLoginType('mobile')} color="secondary" fullWidth css={css`animation: ${slideIn} 0.5s ease-in-out 1s;`}>
          Login with Mobile Number
        </Button>
        <Button onClick={() => setLoginType('policy')} color="secondary" fullWidth css={css`animation: ${slideIn} 0.5s ease-in-out 1.2s;`}>
          Login with Policy Number
        </Button>

        <Dialog open={isForgotPasswordOpen} onClose={() => setIsForgotPasswordOpen(false)} css={css`animation: ${fadeIn} 0.5s ease-in-out;`}>
          <DialogTitle>Reset Password</DialogTitle>
          <Formik
            initialValues={{ email: '' }}
            validationSchema={Yup.object({ email: Yup.string().email('Invalid email').required('Required') })}
            onSubmit={handleForgotPassword}
          >
            {({ handleChange, handleBlur, values }) => (
              <Form>
                <DialogContent>
                  <TextField
                    id="email"
                    name="email"
                    label="Email"
                    type="email"
                    // fullWidth
                    margin="normal"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <ErrorMessage name="email" component="div" className="error" />
                </DialogContent>
                <DialogActions>
                  <Button onClick={() => setIsForgotPasswordOpen(false)} color="primary">
                    Close
                  </Button>
                  <Button type="submit" variant="contained" color="primary">
                    Reset Password
                  </Button>
                </DialogActions>
              </Form>
            )}
          </Formik>
        </Dialog>

        <Dialog open={isSignUpOpen} onClose={() => setIsSignUpOpen(false)} css={css`animation: ${fadeIn} 0.5s ease-in-out;`}>
          <DialogTitle>Sign Up</DialogTitle>
          <Formik
            initialValues={{ username: '', email: '', password: '', confirmPassword: '' }}
            validationSchema={Yup.object({
              username: Yup.string().required('Required'),
              email: Yup.string().email('Invalid email').required('Required'),
              password: Yup.string().required('Required'),
              confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Required')
            })}
            onSubmit={handleSignUp}
          >
            {({ handleChange, handleBlur, values }) => (
              <Form>
                <DialogContent>
                  <TextField
                    id="username"
                    name="username"
                    label="Username"
                    fullWidth
                    margin="normal"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <ErrorMessage name="username" component="div" className="error" />
                  <TextField
                    id="email"
                    name="email"
                    label="Email"
                    type="email"
                    fullWidth
                    margin="normal"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <ErrorMessage name="email" component="div" className="error" />
                  <TextField
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    fullWidth
                    margin="normal"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <ErrorMessage name="password" component="div" className="error" />
                  <TextField
                    id="confirmPassword"
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    fullWidth
                    margin="normal"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <ErrorMessage name="confirmPassword" component="div" className="error" />
                </DialogContent>
                <DialogActions>
                  <Button onClick={() => setIsSignUpOpen(false)} color="primary">
                    Close
                  </Button>
                  <Button type="submit" variant="contained" color="primary">
                    Sign Up
                  </Button>
                </DialogActions>
              </Form>
            )}
          </Formik>
        </Dialog>
      </Paper>
    </Box>
  );
};

export default Login;