import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { TowerIcon } from 'src/components/icons';
import ButtonAdd from 'src/components/bits/core/button/ButtonAdd';
interface Props { }
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    'a': {
        textDecoration: 'none'
    },
    sideBar: {
        width: '25rem',
        height: '100vh',
        padding: '25px 20px 29px',
        paddingTop: '73px',
        backgroundColor: '#111b30'
    },
    sideHead: {
        color: '#fff',
        marginTop: '23px',
        '& a': {
            textDecoration: 'none',
            lineHeight: '20px'
        },
        '& > li:not(:first-child)': {
            marginTop: '1.4rem'
        }
    },
    titleWrap: {
        display: 'flex',
        fontFamily: 'Roboto',
        lineHeight: '1.5',
        color: '#fff',
        fontWeight: theme.spacing(60),
        alignItems: 'baseline'
    },
    mainTitle: {
        marginTop: '2rem',
        fontSize: '15px',
        textTransform: 'capitalize',
        color: '#ffff',
        fontWeight: 'normal',
        display: 'flex',
        alignItems: 'center',
        transition: 'all .3s ease-in',
        '&:hover , &.active': {
            color: '#fff'
        },
        '& svg': {
            marginRight: '1rem'
        }

    },
    subTitle: {
        fontSize: '15px',
        textTransform: 'capitalize',
        color: 'rgb(255,255 ,255,  .8)',
        fontWeight: 'normal',
        display: 'flex',
        alignItems: 'center',
        transition: 'all .3s ease-in',
        '&:hover , &.active': {
            color: '#fff'
        },
        '& svg': {
            marginRight: '1rem'
        }
    },
    viewTitle: {
        fontSize: '12px',
        textTransform: 'capitalize',
        lineHeight: '12px',
        letterSpacing: '0.1px',
        textDecoration: 'none',
        color: 'rgb(255,255 ,255,  .5)',
        transition: 'all .3s ease-in',
        '&:hover': {
            color: 'rgb(255,255 ,255,  1)',
        }
    },
    arrowIcon: {
        width: '9px',
        height: '9px'
    },
    projectTitle: {

    }
}));
const TowerSideBar = (props: Props) => {
    const classes = useStyles();
    const towerName = ['Tower name 1', 'Tower name 2', 'Tower name 3', 'Tower name 4', 'Tower name 5', 'Tower name 6', 'Tower name 7', 'Tower name 8']
    return (
        <div className={classes.sideBar}>
            <div className={classes.titleWrap}>
                <Link className={classes.viewTitle} to="/project"><ArrowBackIosIcon className={classes.arrowIcon} /> View Projects</Link>
            </div>
            <div className={classes.projectTitle}>
                <p className={classes.mainTitle} >
                    <FolderOpenIcon />   Project name 1
                </p>
                <ul className={classes.sideHead}>
                    {
                        towerName.map((items, index) => {
                            return (
                                <li key={index}>
                                    <Link className={classes.subTitle} to="#">
                                        <TowerIcon />   {items}
                                    </Link>

                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <ButtonAdd />
        </div >
    )
};

export default TowerSideBar;
