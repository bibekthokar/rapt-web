import { makeStyles } from '@material-ui/core';
import React, { ReactNode, ReactNodeArray } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import TowerSideBar from './Sidebar/TowerSidebar';

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
  main: {
    paddingTop: '48px',
    width: 'calc(100% - 250px )',
  },
}));

interface Props {
  children: ReactNode | ReactNodeArray;
  showTower?: boolean;
}

const Layout = ({ children, showTower = false }: Props) => {
  const classes = useStyles();

  return (
    <section className={classes.dashboardWrap}>
      <Header />
      <div className={classes.bodyWrap}>
        {showTower ? <TowerSideBar /> : <Sidebar />}
        <main className={classes.main}>{children}</main>
      </div>
    </section>
  );
};

export default Layout;
