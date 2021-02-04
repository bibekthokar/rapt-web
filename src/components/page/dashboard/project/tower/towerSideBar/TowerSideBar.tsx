import React, { useState } from 'react';
import classNames from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import TowerSvg from '../../../../../bits/icons/TowerSvg';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
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
        padding: '25px 0 29px',
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
            marginTop: '1.4rem'
        }
    },
    titleWrap: {
        display: 'flex',
        fontFamily: 'Roboto',
        lineHeight: '1.5',
        color: '#fff',
        padding: '0 20px',
        fontWeight: theme.spacing(60),
        alignItems: 'baseline'
    },
    mainTitle: {
        marginTop: '2rem',
        fontSize: '15px',
        textTransform: 'capitalize',
        color: '#ffff',
        fontWeight: 'normal',
        padding: '0 20px',
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
        cursor: 'pointer',
        padding: '7px 20px',
        transition: 'all .3s ease-in',
        '&:hover , &.active': {
            color: '#fff',
            backgroundColor: 'rgb(255,255 ,255,  .04)',
            borderLeft: '4px solid #00c48c'
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

    },
    subList: {
        display: 'block',
        paddingLeft: '4.5rem',
        '& li': {
            marginTop: '8px',
            lineHeight: '1.71',
            cursor: 'pointer',
            '& .subItem': {
                color: 'rgb(255,255 ,255,  .7)',
                fontSize: '14px',
                letterSpacing: '0.2px',
                '&:hover': {
                    color: theme.palette.secondary.main,
                }
            }
        }

    },
    towerSubList: {
        '& li': {
            marginTop: {
                marginTop: '5px'
            }
        }
    },
    towerSubItem: {
        color: 'rgb(255,255 ,255,  0.56)',
        lineHeight: '1.85',
        letterSpacing: '0.5px',
        fontSize: '13px'
    }
}));
const TowerSideBar = (props: Props) => {
    const classes = useStyles();
    const towerName = ['Tower name 1', 'Tower name 2', 'Tower name 3', 'Tower name 4', 'Tower name 5', 'Tower name 6', 'Tower name 7', 'Tower name 8'];
    const [countIndex, setCountIndex] = useState(0);
    const [TowerSubCountIndex, setTowerSubCountIndex] = useState(0);
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
                                    <div className={`${classes.subTitle} ${countIndex === index ? 'active' : ''}`} onClick={() => setCountIndex(index)}>
                                        <TowerSvg />   {items}
                                    </div>
                                    {
                                        countIndex === index ?
                                            <ul className={classes.subList}>
                                                <li>
                                                    <Link className="subItem" to="#">
                                                        Location Properties
                                                     </Link>
                                                </li>
                                                <li>
                                                    <Link className="subItem" to="#">
                                                        Logger
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="subItem" to="#">
                                                        Measurements
                                                    </Link>
                                                    <ul className={classes.towerSubList}>
                                                        <li>
                                                            <p className={classes.towerSubItem}>
                                                                Wind Speed @ 60m , E
                                                            </p>
                                                        </li>
                                                        <li>
                                                            <p className={classes.towerSubItem}>
                                                                Wind Speed @ 60m , W
                                                            </p>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link className="subItem" to="#">
                                                        Maintenance
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="subItem" to="#">
                                                        Calibration
                                                    </Link>
                                                </li>
                                            </ul> : ''

                                    }

                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div >
    )
};

export default TowerSideBar;
