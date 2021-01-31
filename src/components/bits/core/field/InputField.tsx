import React, { useState } from 'react';
import { withTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Grid, Link, TextFieldProps, Typography } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },

}));
const InputField = ({ fieldName }: any) => {
    const classes = useStyles();
    const [field, setField] = useState('');
    console.log(fieldName, 'asdddddddddddddddd')
    return (
        <fieldset>
            <label htmlFor="email">{fieldName}</label>
            <input type="text" name="email" id="email" value={field} />
        </fieldset>
    )
};

export default InputField;
