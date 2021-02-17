import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, Hidden, Link, Typography } from '@material-ui/core';
import InputField from 'src/components/bits/core/field/InputField';
import { useForm } from 'react-hook-form';
import Spinner from 'src/components/bits/core/Spinner';
import {
  EmailLoginIcon,
  LoginLockIcon,
  PasswordVisibleIcon,
  PasswordInvisibleIcon,
} from 'src/components/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  loginContainer: {
    flexWrap: 'unset',
  },
  loginForm: {
    // padding: '3.5rem',
    paddingTop: '6.1rem',
    paddingLeft: '5rem',
    paddingBottom: '3rem',
    marginLeft: 'auto',
    height: '100vh',
    maxWidth: '62rem',
    fontFamily: 'Roboto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    [theme.breakpoints.down('lg')]: {
      flexBasis: '62rem',
    }
  },
  loginRight: {
    [theme.breakpoints.down('lg')]: {
      maxWidth: 'calc(100% - 62rem)',
      flexBasis: 'calc(100% - 62rem)',
    },
  },
  formRoot: {
    flexGrow: 1,
    display: 'flex',
    marginTop: '12.5rem',
  },
  form: {
    flexGrow: 1,
    paddingLeft: '6rem',
    paddingRight: '11rem',
    '& h2': {
      fontSize: '3rem',
      fontWeight: 'bold',
      lineHeight: '39px',
      color: theme.palette.primary.main,
    },
    '& p': {
      marginTop: '1.2rem',
      fontSize: '14px',
      fontWeight: 'normal',
      fontStretch: 'normal',
      opacity: '.7',
      lineHeight: '26px',
      letterSpacing: 'normal',
      color: theme.palette.primary.main,
    },
  },
  logo: {
    display: 'block',
    cursor: 'pointer',
    width: '5rem',
    height: '5rem',
    '& img': {
      width: '100%',
      height: '100%',
    },
  },
  image: {
    height: '100vh',
    opacity: '.8',
    '& img': {
      height: '100%',
      width: '100%',
      objectFit: 'cover',
    },
  },
  field: {
    marginTop: '3.7rem',

    '& label': {
      fontSize: '1.3rem',
      fontWeight: '500',
      lineHeight: '18px',
      letterSpacing: '0.2px',
      color: theme.palette.primary.main,
      opacity: '.5',
    },
  },
  button: {
    marginTop: '2rem',
    opacity: '0.9',
  },
  copyright: {
    fontSize: '11px',
    fontFamily: 'Roboto',
    color: theme.palette.primary.main,
    opacity: 0.5,
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
  },
  loginWrap: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    minWidth: '57rem',
  },
}));

interface LoginProps {
  toggleLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

interface LoginForm {
  email: string;
  password: string;
}

const Login = ({ toggleLogin }: LoginProps) => {
  const classes = useStyles();
  const { register, errors, handleSubmit } = useForm();
  // const [serverError, setServerError] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = (value: LoginForm) => {
    setLoading(true);
    setTimeout(() => {
      toggleLogin(true);
      setLoading(false);
      // if (value.email === 'admin@gmail.com' && value.password === '12345678') {
      //   toggleLogin(true);
      //   setLoading(false);
      // } else {
      //   setServerError('Bad Email or password');
      //   setLoading(false);
      // }
    }, 1000);
  };
  return (
    <section className={classes.root}>
      <Grid container spacing={0} className={classes.loginContainer}>
        <Grid item xs={12} sm={12} md={6} lg={5} className={classes.loginForm}>
          <div className={classes.loginWrap}>
            <Link className={classes.logo}>
              <img src="/asset/img/logo.svg" alt="logo" />
            </Link>
            <div className={classes.formRoot}>
              <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
                <Typography variant="h2">Login to your account</Typography>
                <p>Login Met Monitoring to manage, view and your projects</p>
                <div className={classes.field}>
                  <InputField
                    name="email"
                    fieldName="Email"
                    type="text"
                    icon={<EmailLoginIcon />}
                    inputRef={register({ required: 'required' })}
                    placeholder="Your email address here"
                    error={errors?.email?.message}
                    // error="The input is not a valid email!"
                  />
                  <InputField
                    name="password"
                    fieldName="Password"
                    type="password"
                    icon={<LoginLockIcon />}
                    visibleEye={<PasswordVisibleIcon />}
                    hideEye={<PasswordInvisibleIcon />}
                    placeholder="Your password here"
                    // error="Bad Email or password!"
                    inputRef={register({ required: 'required' })}
                    error={errors?.password?.message}
                  />
                  <Button
                    color="primary"
                    variant="contained"
                    fullWidth
                    size="large"
                    type="submit"
                    className={classes.button}
                    disabled={loading}
                    disableElevation
                  >
                    {loading && <Spinner size={22} />}
                    Login
                  </Button>
                  {/* <div className={classes.button}>
                  <ButtonField type="submit" nameValue="Login" />
                </div> */}
                </div>
              </form>
            </div>
          </div>
          <p className={classes.copyright}>Met Monitoring ©2021 </p>
        </Grid>
        <Grid item xs={undefined} sm={undefined} md={6} lg={7} className={classes.loginRight}>
          <Hidden smDown>
            <div className={classes.image}>
              <img src="/asset/img/login-cover.jpg" alt="windTower" />
            </div>
          </Hidden>
        </Grid>
      </Grid>
    </section>
  );
};

export default Login;
