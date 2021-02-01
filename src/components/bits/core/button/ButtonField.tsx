import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    btnPrimary: {
        background: theme.palette.primary.main,
        width: '100%',
        padding: '1.2rem 0',
        color: '#fff',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '15px',
        fontFamily: 'Roboto',
        textAlign: 'center',
        border: 'none',
        transition: 'all .3s ease-in',
        '&:hover': {
            background: theme.palette.secondary.main,
        },
        '&:focus': {
            border: 'none'
        }
    }
}));
interface InputProps {
    nameValue?: string,
}
const ButtonField = ({ nameValue }: any) => {
    const classes = useStyles();
    return (
        <button className={classes.btnPrimary}>{nameValue}</button>
    )
};

export default ButtonField;
