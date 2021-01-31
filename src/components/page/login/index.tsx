import React, { useState } from 'react';
import { withTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Grid, Link, Typography } from '@material-ui/core';
import InputField from '../../bits/core/field/InputField';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
interface Props { }
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    loginForm: {
        padding: "3.5rem",
        height: '100vh',
        fontFamily: 'Roboto',
    },
    form: {
        marginTop: '12.5rem',
        paddingLeft: '4rem',
        '& h2': {
            fontSize: '3rem',
            fontWeight: 'bold',
            color: theme.palette.primary.main,
            // color: '#1e2447',
        },
        '& p': {
            marginTop: '1.2rem',
            fontSize: '14px',
            letterSpacing: '1.86',
            color: theme.palette.primary.main,

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
    }
}));
const Index = (props: Props) => {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    return (
        <section className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={5} className={classes.loginForm}>
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
                                type="text" icon={<EmailOutlinedIcon />} placeholder="Your email address here" />
                            <InputField fieldName="Password"
                                type="password" icon={<LockOutlinedIcon />} placeholder="Your password here" />
                        </div>
                    </div>
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
