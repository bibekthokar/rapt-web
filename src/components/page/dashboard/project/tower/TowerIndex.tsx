import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import AppBarIndex from '../app-bar/AppBarIndex';
import TowerBodyIndex from './towerBody/TowerBodyIndex';
import TowerSideBar from './towerSideBar/TowerSideBar';

interface Props { }
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    dashboardWrap: {

    },
    bodyWrap: {
        display: 'flex',
        flexWrap: "wrap",
        height: '100vh',

    }
}));
const TowerIndex = (props: Props) => {
    const classes = useStyles();
    return (
        <section className={classes.dashboardWrap}>
            <AppBarIndex />
            <div className={classes.bodyWrap}>
                <TowerSideBar />
                <TowerBodyIndex />
            </div>
        </section>
    )
};

export default TowerIndex;
