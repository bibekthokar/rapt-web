import { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  viewToggle: {
    background: 'rgb(30 , 36 , 71 , .03)',
    borderRadius: '14px',
    width: '182px',
    '& button': {
      border: 'none',
      background: 'none',
      fontSize: '12px',
      width: '91px',
      lineHeight: '1.33',
      height: '28px',
      cursor: 'pointer',
      letterSpacing: '0.1px',
      textAlign: 'center',
      color: theme.palette.primary.main,
      fontWeight: 'normal',
      fontStretch: 'normal',
      fontStyle: 'normal',
      opacity: '.5',
      '&.active': {
        color: 'var(--white)',
        opacity: '.9',
        letterSpacing: '0.2px',
        background: theme.palette.secondary.main,
        borderRadius: '14px',
        boxShadow: '-3px 0 7px 3px rgba(0, 0, 0, 0.06)',
        lineHeight: 'normal',
      },
    },
  },
}));

const ToggleButton = ({ inactive, active }: any) => {
  const classes = useStyles();
  const [show, setShow] = useState(true);
  const handleChange = () => {
    setShow(!show);
  };
  return (
    <div className={classes.viewToggle}>
      <button className={show ? 'active' : ''} onClick={handleChange}>
        {inactive}
      </button>
      <button className={show ? '' : 'active'} onClick={handleChange}>
        {active}
      </button>
    </div>
  );
};

export default ToggleButton;
