import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ToggleBtn from '../../../../../bits/core/button/ToggleBtn';

interface Props { }
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    googleMap: {
        width: '100%',
        '& iframe': {
            width: '100%',
            height: '100%',
            border: 'none'
        }
    },
    towerBody: {
        paddingTop: '48px',
        width: 'calc(100% - 250px )',
    },
    towerHead: {
        background: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 1.5rem',
        height: '4.2rem',
        fontFamily: 'Roboto',
        '& p': {
            fontSize: '13px',
            color: 'rgb(30 , 36 , 71 , .6)',
            lineHeight: '1',
            fontWeight: theme.spacing(37.5),
        },
    }

}));
const TowerBodyIndex = (props: Props) => {
    const classes = useStyles();

    return (
        <div className={classes.towerBody}>
            <div className={classes.towerHead}>
                <p>Project name 2</p>
                <ToggleBtn />
            </div>
            <div className={classes.googleMap}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d198741.27661489358!2d-77.15500865544465!3d38.89351234684535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c6de5af6e45b%3A0xc2524522d4885d2a!2sWashington%2C%20DC%2C%20USA!5e0!3m2!1sen!2snp!4v1612333021932!5m2!1sen!2snp" width="100%" height="100%" ></iframe>
            </div>
        </div>
    )
};

export default TowerBodyIndex;
