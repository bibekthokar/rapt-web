import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { ErrorIcon } from 'src/components/icons';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  formField: {
    '&:not(:first-child)': {
      marginTop: '2rem',
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
      paddingTop: '1.4rem',
      paddingBottom: '1.3rem',
      fontFamily: 'Roboto',
      borderRadius: '4px',
      fontSize: '13px',
      textIndent: '4rem',
      fontWeight: 'normal',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 'normal',
      letterSpacing: 'normal',
      border: `solid 1px rgba(30, 36, 71, 0.15)`,
      color: 'rgba(30, 36, 71, 0.4)',
      '&::placeholder': {
        color: theme.palette.primary.main,
        opacity: 0.4,
        fontSize: '1.3rem',
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
      },
      '&:focus': {
        color: 'rgba(30, 36, 71, 0.7)',
        border: 'solid 1px rgba(30, 36, 71, .8)',
        boxShadow: '0 2px 12px 6px rgba(0, 0, 0, 0.03)',
        '&::placeholder': {
          opacity: '.7',
        },
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
    top: '2rem',
    left: '1.2rem',
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
    lineHeight: '18px',
    alignItems: 'center',
    fontFamily: 'Roboto',
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
