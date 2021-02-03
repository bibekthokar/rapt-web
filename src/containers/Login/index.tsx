import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Button, Grid, Link, Typography } from '@material-ui/core';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import InputField from 'src/components/bits/core/field/InputField';
import { useForm } from 'react-hook-form';
import Spinner from 'src/components/bits/core/Spinner';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  loginForm: {
    // padding: '3.5rem',
    paddingTop: '6.1rem',
    paddingLeft: '5rem',
    paddingBottom: '3rem',
    height: '100vh',
    fontFamily: 'Roboto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  formRoot: {
    flexGrow: 1,
    display: 'flex',
    marginTop: '12.5rem',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  form: {
    flexGrow: 1,
    // maxWidth: '40rem',
    paddingLeft: '5rem',
    paddingRight: '10rem',
    // padding: '0 4rem',
    '& h2': {
      fontSize: '3rem',
      fontWeight: 'bold',
      color: theme.palette.primary.main,
      [theme.breakpoints.down('md')]: {
        fontSize: '2.5rem',
      },
    },
    '& p': {
      marginTop: '1.2rem',
      fontSize: '14px',
      letterSpacing: '.3px',
      color: theme.palette.primary.main,
      [theme.breakpoints.down('md')]: {
        letterSpacing: '0.3px',
      },
    },
  },
  logo: {
    display: 'block',
    cursor: 'pointer',
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
  },
  button: {
    marginTop: '3rem',
  },
  copyright: {
    fontSize: '11px',
    fontFamily: 'Roboto',
    color: 'rgb(30 , 36 , 71 , .5)',
  },
  loginWrap: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
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
  const [serverError, setServerError] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = (value: LoginForm) => {
    setLoading(true);
    setTimeout(() => {
      if (value.email === 'admin@gmail.com' && value.password === '12345678') {
        toggleLogin(true);
        setLoading(false);
      } else {
        setServerError('Bad Email or password');
        setLoading(false);
      }
    }, 1000);
  };
  return (
    <section className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12} md={6} lg={5} className={classes.loginForm}>
          <div className={classes.loginWrap}>
            <Link className={classes.logo}>
              <Avatar alt="Remy Sharp" src="/asset/img/logo.svg" />
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
                    icon={<EmailOutlinedIcon />}
                    inputRef={register({ required: 'required' })}
                    placeholder="Your email address here"
                    error={errors?.email?.message}
                    // error="The input is not a valid email!"
                  />
                  <InputField
                    name="password"
                    fieldName="Password"
                    type="password"
                    icon={<LockOutlinedIcon />}
                    visibleEye={<VisibilityIcon />}
                    hideEye={<VisibilityOffIcon />}
                    placeholder="Your password here"
                    // error="Bad Email or password!"
                    inputRef={register({ required: 'required' })}
                    error={errors?.password?.message || serverError}
                  />
                  <Button
                    color="primary"
                    variant="contained"
                    fullWidth
                    size="large"
                    type="submit"
                    className={classes.button}
                    disabled={loading}
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
        <Grid item xs={undefined} md={6} lg={7}>
          <div className={classes.image}>
            <img src="/asset/img/login-cover.jpg" alt="windTower" />
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default Login;
