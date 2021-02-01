import React, { useState } from 'react';
import { withTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Grid, Link, TextFieldProps, Typography } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    formField: {
        '&:not(:first-child)': {
            marginTop: '2.5rem'
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
                    }
                }
            }
        },

    },
    iconSvg: {
        position: 'absolute',
        top: '15px',
        left: '1.2rem',
        '& svg': {
            width: '30px',
            height: '30px',
            fill: 'rgb(30 , 36 , 71 , .15)'
        }
    },
    visibleHideEye: {
        position: 'absolute',
        top: '18px',
        right: '1.2rem',
        cursor: 'pointer',
        color: 'rgb(30 , 36 , 71 , .15)'
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
            marginRight: '8px'
        }
    }
}));
interface InputProps {
    fieldName?: string,
    icon?: string,
    placeholder?: string,
    type?: string,
    error?: string,
    visibleEye?: string,
    hideEye?: string
}
const InputField = ({ fieldName, icon, placeholder, visibleEye, hideEye, type, error }: any) => {
    const classes = useStyles();
    const [field, setField] = useState('');
    const [visible, setVisible] = useState(false);
    const handleChange = () => {
        setVisible(!visible);
    };

    return (
        <fieldset className={classes.formField}>
            <label htmlFor={type}>{fieldName}</label>
            <div className={classes.inputField}>
                <div className={classes.visibleHideEye} onClick={handleChange}>
                    {
                        visible ? <>{hideEye}</> : <>  {visibleEye} </>
                    }
                </div>
                <input type={visible ? 'text' : `${type}`} name={type} id={type} placeholder={placeholder} />
                <span className={classes.iconSvg}>{icon}</span>
                <div className={classes.error}> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                    <g fill="none" fill-rule="evenodd">
                        <g fill="#FF647C" fill-rule="nonzero">
                            <g>
                                <g>
                                    <path d="M7 0C3.15 0 0 3.15 0 7s3.15 7 7 7 7-3.15 7-7-3.15-7-7-7zm3.063 8.838l-1.226 1.225L7 8.224l-1.838 1.838-1.224-1.226L5.774 7 3.937 5.162l1.225-1.224L7 5.774l1.838-1.838 1.225 1.225L8.224 7l1.838 1.838z" transform="translate(-110 -433) translate(110 431) translate(0 2)" />
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
                    {error}</div>
            </div>
        </fieldset>
    )
};

export default InputField;
