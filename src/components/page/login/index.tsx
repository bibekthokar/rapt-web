import React, { useState } from 'react';
import { withTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Grid, Link, Typography } from '@material-ui/core';
import InputField from '../../bits/core/field/InputField';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import ButtonField from '../../bits/core/button/ButtonField';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
interface Props { }
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    loginForm: {
        padding: "3.5rem",
        height: '100vh',
        fontFamily: 'Roboto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'

    },
    form: {
        marginTop: '13.9%',
        padding: '0 4rem',
        '& h2': {
            fontSize: '3rem',
            fontWeight: 'bold',
            color: theme.palette.primary.main,
            [theme.breakpoints.down('md')]: {
                fontSize: '2.5rem',
            },
        },
        '& p': {
            marginTop: '1.2rem',
            fontSize: '14px',
            letterSpacing: '.3px',
            color: theme.palette.primary.main,
            [theme.breakpoints.down('md')]: {
                letterSpacing: '0.3px',
            },

        }
    },
    logo: {
        display: 'block',
    },
    image: {
        height: '100%',
        '& img': {
            height: '100%',
            objectFit: 'cover',
        }
    },
    field: {
        marginTop: '3.7rem'
    },
    button: {
        marginTop: '3rem'
    },
    copyright: {
        fontSize: '11px',
        fontFamily: 'Roboto',
        color: 'rgb(30 , 36 , 71 , .5)',
    },
    loginWrap: {
        display: 'block'
    }
}));
const Index = (props: Props) => {
    const classes = useStyles();
    return (
        <section className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={5} className={classes.loginForm}>
                    <div className={classes.loginWrap}>
                        <Link className={classes.logo}>
                            <Avatar alt="Remy Sharp" src="/asset/img/logo.svg" />
                        </Link>
                        <div className={classes.form}>
                            <Typography variant="h2" >
                                Login to your account
                            </Typography>
                            <p>Login Met Monitoring to manage, view and your projects</p>
                            <div className={classes.field}>
                                <InputField fieldName="Email"
                                    type="text" icon={<EmailOutlinedIcon />} placeholder="Your email address here"
                                    error="The input is not a valid email!" />
                                <InputField fieldName="Password"
                                    type="password" icon={<LockOutlinedIcon />}
                                    visibleEye={<VisibilityIcon />}
                                    hideEye={<VisibilityOffIcon />}
                                    placeholder="Your password here"
                                    error="Bad Email or password!" />
                                <div className={classes.button}>
                                    <ButtonField nameValue="Login" />
                                </div>
                            </div>

                        </div>
                    </div>
                    <p className={classes.copyright}>Met Monitoring ©2021 </p>
                </Grid>
                <Grid item xs={7}>
                    <div className={classes.image}>
                        <img src="/asset/img/windTower.gif" alt="windTower" />
                    </div>
                </Grid>

            </Grid>
        </section>
    )
};

export default Index;
