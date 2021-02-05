import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ToggleBtn from '../../../../../../bits/core/button/ToggleBtn';

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
        display: 'flex',
        flexWrap: 'wrap'
    },
    towerHead: {
        background: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.7rem 2rem',
        fontFamily: 'Roboto',
        '& p': {
            fontSize: '13px',
            color: 'rgb(30 , 36 , 71 , .6)',
            lineHeight: '1',
            fontWeight: theme.spacing(37.5),
            '& span.active': {
                color: '#1e2447',
                fontWeight: 'normal'
            }
        },
    },
    arrowIcon: {
        width: '8px',
        height: '8px'
    },
    towerBodyLeft: {
        width: 'calc(100% - 25rem)'
    },
    towerBodyRight: {
        width: '25rem'
    },
    towerDetails: {
        background: 'rgba(0, 0, 0, 0.02)',
        padding: '3rem 3.5rem 7rem 3.5rem'
    },
    towerStatus: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    towerStatusName: {

    },
    towerStatusBtn: {

    }
}));
const TowerSubBody = (props: Props) => {
    const classes = useStyles();

    return (
        <div className={classes.towerBody}>
            <div className={classes.towerBodyLeft}>
                <div className={classes.towerHead}>
                    <p>Project name 2 <ArrowForwardIosIcon className={classes.arrowIcon} /> Tower name 1 <ArrowForwardIosIcon className={classes.arrowIcon} /> <span className='active'>Measurements</span></p>
                    <ToggleBtn inactive="Timeline" active="List View" />
                </div>
                <div className={classes.towerDetails}>
                    <div className={classes.towerStatus}>
                        <div className={classes.towerStatusName}>
                            <p>1 Active</p>
                            <h3>Measurement Points</h3>
                        </div>
                        <div className={classes.towerStatusBtn}>
                            btn
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.towerBodyRight}>
                Right
            </div>
        </div>
    )
};

export default TowerSubBody;
