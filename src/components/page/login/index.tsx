import React, { useState } from 'react';
import { withTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Grid, Link, Typography } from '@material-ui/core';
import InputField from '../../bits/core/field/InputField';

interface Props { }
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    loginForm: {
        padding: "35px",
        height: '100vh'
    },
    form: {
        marginTop: '125px',
        paddingLeft: '40px',
        '& h2': {
            fontSize: '3rem',
            fontWeight: 'bold',
            color: theme.palette.primary.main,
            // color: '#1e2447',
        },
        '& p': {
            marginTop: '1.3%',
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
        marginTop: '4.1%'
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
                            <InputField fieldName="email" />
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
