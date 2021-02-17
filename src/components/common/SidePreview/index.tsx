import React, { ReactNode, ReactNodeArray } from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    width: '25rem',
    background: '#fff',
    transition: 'all .3s ease-in',
    '&.active': {
      width: '695px',
      position: 'absolute',
      right: '0',
      height: '100%',
      boxShadow: ' 0 2px 12px 7px rgba(0, 0, 0, 0.04)',
      transition: 'all .3s ease-in',
    },
    '& .control-form': {
      padding: '4px 8px',
      border: 'none',
      marginTop: '4px',
      fontSize: '12px',
      width: '210px',
      overflow: 'hidden',
      outline: 'none',
      opacity: '0.9',
      lineHeight: '1.33',
      background: 'rgba(30 , 36 , 71 , 0.06)',
      borderRadius: '2px',
      '&::before,&::after': {
        display: 'none',
      },
    },
  },
}));

interface Props {
  children: ReactNode | ReactNodeArray;
  expand?: Boolean;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  active?: boolean;
}

const SidePreview = ({ children, expand = false, onClick, active }: Props) => {
  const classes = useStyles();

  const handleActive = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (expand) {
      if (onClick) {
        onClick(e);
      }
    }
  };
  return (
    <div
      className={`${classes.root} ${active ? 'active' : ''}`}
      onClick={handleActive}
    >
      {children}
    </div>
  );
};

export default SidePreview;
