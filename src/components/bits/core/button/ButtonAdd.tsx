import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  btn: {
    position: 'absolute',
    right: '3rem',
    bottom: '3rem',
    width: '3.5rem',
    height: '3.5rem',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    justifyContent: 'center',
    borderRadius: '3.2px',
    boxShadow: '0 2px 17px 0 rgba(0, 0, 0, 0.1)',
    background: theme.palette.secondary.main,
    transition: 'all .3s ease-in',
    '&:hover': {
      transform: 'scale(.9)',
      boxShadow: '0 2px 12px 7px rgba(0 , 0 , 0 , .4)',
    },
    '& svg': {
      fill: '#fff',
      width: '1.6rem',
      height: '1.6rem',
    },
  },
}));
const ButtonAdd = () => {
  const classes = useStyles();
  return (
    <div className={classes.btn}>
      <AddIcon />
    </div>
  );
};

export default ButtonAdd;
