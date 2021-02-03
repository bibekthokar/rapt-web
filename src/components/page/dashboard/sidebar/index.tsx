import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
interface Props { }
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
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
        },
        '& > li:not(:first-child)': {
            marginTop: '2rem'
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
    rootTitle: {
        fontSize: '16px',
        textTransform: 'capitalize'
    },
    count: {
        fontStyle: 'italic',
        fontSize: '10px',
        marginLeft: '5px',
        color: 'rgb(255,255 ,255,  .5)'
    }
}));
const IndexSideBar = (props: Props) => {
    const classes = useStyles();
    const projectName = ['Project name 1', 'Project name 2', 'Project name 3', 'Project name 4', 'Project name 5', 'Project name 6', 'Project name 7', 'Project name 8'];
    return (
        <div className={classes.sideBar}>
            <div className={classes.titleWrap}>
                <span className={classes.rootTitle}>Projects</span>
                <span className={classes.count}>(8)</span>
            </div>
            <ul className={classes.sideHead}>
                {
                    projectName.map((items, index) => {
                        return (
                            <li key={index}>
                                <Link className={classes.mainTitle} to="/project/tower">
                                    <FolderOpenIcon />   {items}
                                </Link>

                            </li>
                        )
                    })
                }
            </ul>
        </div >
    )
};

export default IndexSideBar;
