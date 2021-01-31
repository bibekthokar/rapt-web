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
                border: 'solid 1px rgba(30, 36, 71, 0.8)'
            }
        },

    },
    iconSvg: {
        position: 'absolute',
        top: '15px',
        left: '1.2rem',
        '& svg': {
            width: '30px',
            height: '30px'
        }
    },
    inputField: {
        position: 'relative',
    }
}));
interface InputProps {
    fieldName?: string,
    icon?: string,
    placeholder?: string,
    type?: string
}
const InputField = ({ fieldName, icon, placeholder, type }: any) => {
    const classes = useStyles();
    const [field, setField] = useState('');
    console.log(icon, 'asdddddddddddddddd')
    return (
        <fieldset className={classes.formField}>
            <label htmlFor="email">{fieldName}</label>
            <div className={classes.inputField}>
                <span className={classes.iconSvg}>{icon}</span>
                <input type={type} name="email" id="email" placeholder={placeholder} />
            </div>
        </fieldset>
    )
};

export default InputField;
