import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    display: 'block',
    marginRight: '6px',
  },
  tower: {
    marginLeft: '5.2rem',
    display: 'block',
    padding: '1.1rem 2.2rem',
    textAlign: 'center',
    background: 'rgb(255,255 ,255,  .05)',
  },
  title: {
    fontSize: '14px',
    letterSpacing: '0.3px',
  },
  dashboardWrap: {},
  header: {
    background: '#0e1625',
    boxShadow: 'none',
  },
  headerWrap: {
    minHeight: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoWrap: {
    display: 'flex',
    alignItems: 'center',
  },
  userName: {
    '& a': {
      textDecoration: 'none',
      width: '28px',
      height: '28px',
      color: '#fff',
      fontSize: '14px',
      textTransform: 'uppercase',
      borderRadius: '14px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgb(255,255 ,255,  .1)',
    },
  },
  bodyWrap: {
    display: 'flex',
    flexWrap: 'wrap',
    height: '100vh',
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.header}>
      <Toolbar className={classes.headerWrap}>
        <div className={classes.logoWrap}>
          <Link to="/">
            <picture className={classes.logo}>
              <img src="/asset/img/logo-white.svg" alt="logo-white" />
            </picture>
          </Link>
          <Typography variant="h6" className={classes.title}>
            Resource Data Platform
          </Typography>
          <Link to="/">
            <picture className={classes.tower}>
              <img src="/asset/img/tower.svg" alt="tower" />
            </picture>
          </Link>
        </div>
        <div className={classes.userName}>
          <Link to="#">A</Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
