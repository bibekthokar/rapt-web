import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import AppBarIndex from '../app-bar/AppBarIndex';
import TowerSideBar from './towerSideBar/TowerSideBar';
import TowerSubBody from './towerBody/sub/TowerSubBody';

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
const SubTowerIndex = (props: Props) => {
    const classes = useStyles();
    return (
        <section className={classes.dashboardWrap}>
            <AppBarIndex />
            <div className={classes.bodyWrap}>
                <TowerSideBar />
                <TowerSubBody />
            </div>
        </section>
    )
};

export default SubTowerIndex;
