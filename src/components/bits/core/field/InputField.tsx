import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { ErrorIcon } from 'src/components/icons';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  formField: {
    '&:not(:first-child)': {
      marginTop: '2.5rem',
    },
    '& label': {
      display: 'block',
      fontSize: '13px',
      letterSpacing: '0.2px',
      fontWeight: '500',
      fontFamily: 'Roboto',
      color: theme.palette.primary.main,
    },
    '& input': {
      marginTop: '8px',
      width: '100%',
      padding: '1.2rem',
      fontFamily: 'Roboto',
      border: 'solid 1px rgb(30 , 36 , 71 , .15)',
      borderRadius: '4px',
      fontSize: '13px',
      textIndent: '4rem',
      color: theme.palette.primary.main,
      '&:focus': {
        border: 'solid 1px rgba(30, 36, 71, 0.8)',
        '& ~ span': {
          '& svg': {
            fill: theme.palette.primary.main,
          },
        },
      },
    },
  },
  iconSvg: {
    position: 'absolute',
    top: '15px',
    left: '1.2rem',
    '& svg': {
      width: '30px',
      height: '30px',
      fill: 'rgb(30 , 36 , 71 , .15)',
    },
  },
  visibleHideEye: {
    position: 'absolute',
    top: '18px',
    right: '1.2rem',
    cursor: 'pointer',
    color: 'rgb(30 , 36 , 71 , .15)',
  },
  inputField: {
    position: 'relative',
  },
  error: {
    color: '#ff647c',
    fontSize: '13px',
    marginTop: '10px',
    display: 'flex',
    alignItems: 'center',
    '& svg': {
      marginRight: '8px',
    },
  },
}));
// interface InputProps {
//   fieldName?: string;
//   icon?: string;
//   placeholder?: string;
//   type?: string;
//   error?: string;
//   visibleEye?: string;
//   hideEye?: string;
//   inputRef?: HTMLInputElement;
//   name: string;
// }
const InputField = ({
  fieldName,
  icon,
  placeholder,
  visibleEye,
  hideEye,
  type,
  error,
  name,
  inputRef = null,
}: any) => {
  const classes = useStyles();
  const [visible, setVisible] = useState(false);
  const handleChange = () => {
    setVisible(!visible);
  };

  return (
    <fieldset className={classes.formField}>
      <label htmlFor={type}>{fieldName}</label>
      <div className={classes.inputField}>
        <div className={classes.visibleHideEye} onClick={handleChange}>
          {visible ? <>{hideEye}</> : <> {visibleEye} </>}
        </div>
        <input
          type={visible ? 'text' : `${type}`}
          name={name}
          id={type}
          ref={inputRef}
          placeholder={placeholder}
        />
        <span className={classes.iconSvg}>{icon}</span>
        {error && (
          <div className={classes.error}>
            <ErrorIcon />
            {error}
          </div>
        )}
      </div>
    </fieldset>
  );
};

export default InputField;
