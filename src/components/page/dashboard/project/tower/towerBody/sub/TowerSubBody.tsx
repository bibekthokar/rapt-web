import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ToggleBtn from '../../../../../../bits/core/button/ToggleBtn';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import SwapHorizOutlinedIcon from '@material-ui/icons/SwapHorizOutlined';
import { Link } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
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
        flexWrap: 'wrap',
        position: 'relative'
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
        width: '25rem',
        background: '#fff',
        transition: 'all .3s ease-in',
        '&.active': {
            width: '695px',
            position: 'absolute',
            right: '0',
            height: '100%',
            boxShadow: ' 0 2px 12px 7px rgba(0, 0, 0, 0.04)',
            transition: 'all .3s ease-in',
        },
        '& .control-form': {
            padding: '4px 8px',
            border: 'none',
            marginTop: '4px',
            fontSize: '12px',
            width: '210px',
            overflow: 'hidden',
            outline: 'none',
            lineHeight: '1.33',
            background: 'rgba(30 , 36 , 71 , 0.06)',
            borderRadius: '2px',
            '&::before,&::after': {
                display: 'none'
            }
        },
    },
    towerDetails: {
        background: 'rgba(0, 0, 0, 0.02)',
        padding: '3rem 3.5rem 7rem 3.5rem',

    },
    towerStatus: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    towerStatusName: {
        fontFamily: 'Roboto',
        '& p': {
            color: 'rgba(30 , 36 , 71 , .3)',
            fontSize: '11px',
            letterSpacing: '0.3px',

        },
        '& h3': {
            marginTop: '3px',
            fontSize: '2rem',
            letterSpacing: '0.2px',
            fontWeight: 'normal',
            lineHeight: '1'
        }
    },
    towerStatusBtn: {
        lineHeight: '1',
        marginBottom: '40px',
        '& button': {
            color: '#fff',
            background: theme.palette.secondary.main,
            transition: 'all .3s ease-in',
            fontSize: '13px',
            '&:hover': {
                background: theme.palette.primary.main,
            }
        }
    },
    towerDetailsCard: {
        '& .items-wrap': {


        }
    },
    towerDetailsItem: {
        background: '#fff',
        borderRadius: '6px',
        color: theme.palette.primary.main,
        transition: 'all .3 ease-in',
        '&:not(:first-child)': {
            marginTop: '2.5rem'
        },
        '&:hover': {
            '& h3': {
                opacity: '1',
            }
        },
        '& h3': {
            fontSize: '14px',
            padding: '14px 15px',
            display: 'flex',
            alignItems: 'center',
            opacity: '0.8',
            '& .icon': {
                marginRight: '10px'
            }
        },
        '& ul': {
            '& li': {
                fontSize: '12px',
                borderTop: '1px solid rgba(0, 0, 0, 0.02)',
                padding: '14px 0',
                paddingLeft: '3rem',
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                trnasition: 'all .3s ease-in',
                '&:hover': {
                    color: '#fff',
                    transform: ' scale(1.05)',
                    borderRadius: '4px',
                    background: theme.palette.secondary.main,
                    '& .icon-add,& strong, & p': {
                        color: '#fff',
                        opacity: '1'
                    },

                },
                '& strong': {
                    fontSize: '13px',
                    color: '#1e2447',
                    opacity: '0.8',
                    letterSpacing: '1.08',
                    marginRight: '8px'
                },
                '& p': {
                    color: '#1e2447',
                    opacity: '0.5',
                },
                '& .icon-add': {
                    color: '#00c48c'
                }
            }
        }

    },
    towerRightHead: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '29px 15px 23px 15px',
        color: theme.palette.primary.main,
        '& h2': {
            fontSize: '2rem',
            letterSpacing: '0.2px',
            fontWeight: 'bold',
        },
        '& p': {
            fontSize: '13px',
            letterSpacing: '0.1px',
            opacity: '0.6'
        }
    },

    towerRighTitle: {

    },
    logoIcon: {
        boxShadow: '0 0 26px 6px rgba(0, 0, 0, 0.05)',
        background: '#fff',
        width: '44px',
        height: ' 44px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& .icon': {
            fill: '#303030',
        }
    },
    towerBodyBasic: {
        padding: '20px 15px 30px 15px',
        borderTop: '1px solid rgb(30 , 36 , 71 , .1)',
        '&.active': {
            paddingRight: '210px'
        },
        '& h3': {
            color: theme.palette.primary.main,
            fontSize: '15px',
            letterSpacing: '1.07px',
        }
    },
    towerBodyBasicForm: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    formField: {
        marginTop: '16px',
        '& p': {
            fontSize: '13px',
            color: '#000',
            opacity: '0.5',
            lineHeight: '1.23'
        },

        '& .date': {
            width: '100px',
            '&:last-child': {
                marginLeft: '10px'
            },
            '& input': {
                width: '100%'
            }
        }
    },
    formFieldDate: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    towerBodyClose: {
        position: 'absolute',
        top: '34px',
        left: '-34px',
        padding: '6px',
        cursor: 'pointer',
        background: '#fff',
        borderRadius: '4px',
        zIndex: theme.spacing(2),
        boxShadow: ' 0 2px 12px 7px rgba(0, 0, 0, 0.04)'
    },
    towerBodySensor: {
        padding: '20px 15px 30px 15px',
        borderTop: '1px solid rgb(30 , 36 , 71 , .1)',
        '& h3': {
            fontSize: '15px',
            letterSpacing: '1.07px',
            color: theme.palette.primary.main,
        },
        '& p': {
            display: 'flex',
            alignItems: 'center',
            fontSize: '12px',
            lineHeight: '1.08',
            cursor: 'pointer',
            color: theme.palette.primary.main,
            '& svg': {
                fill: theme.palette.secondary.main,
            }
        }
    },
    towerBodySensorHead: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    towerBodySensorTable: {
        marginTop: '2rem',
        '& table ': {
            borderCollapse: 'collapse',
            width: '100%',
            '& th': {
                padding: '10px 5px',
                textAlign: 'left',
                fontSize: '12px',
                marginBottom: '10px',
                color: 'rgba(0 , 0 , 0 , .3)',
                borderBottom: ' solid 1px rgb(30 , 36 , 71 , .1)'
            },
            '& td': {
                padding: '5px',
                '& .control-form': {
                    width: '100%'
                }
            }
        }
    },
    towerBodySensorForm: {
        marginTop: '8px',
        '& .control-form_border': {
            marginTop: '10px',
            width: '220px',
            fontSize: '13px',
            padding: '9px 8px',
            borderRadius: '2px',
            color: 'rgba(0 , 0 , 0 , .7)',
            border: 'solid 1px rgba(30 , 36 , 71 , .15)'
        }
    }
}));
const TowerSubBody = (props: Props) => {
    const classes = useStyles();
    const [show, setShow] = useState(false);
    const handleChange = () => {
        setShow(true);
    };
    const handleClose = () => {
        setShow(false);
    };
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
                            <Button variant="contained" startIcon={<AddIcon />} >
                                Measurement
                            </Button>

                        </div>
                    </div>
                    <Grid container spacing={3} className={classes.towerDetailsCard}>
                        <Grid item xs={6} className="items-wrap">
                            <div className={classes.towerDetailsItem}>
                                <h3>  <SwapHorizOutlinedIcon className="icon" />  Wind Speed @ 60m - E</h3>
                                <ul>
                                    <li>
                                        <strong>NRG #40</strong> <p>[1 Jan 2017 to 1 Jan 2018]</p>
                                    </li>
                                    <li>
                                        <strong>Theis  #4A</strong>  <p>[1 Jan 2018 to 1 Jan 2019]</p>
                                    </li>
                                    <li>
                                        <AddIcon className="icon-add" />
                                    </li>
                                </ul>
                            </div>
                            <div className={classes.towerDetailsItem}>
                                <h3>  <SwapHorizOutlinedIcon className="icon" />  Wind Speed @ 60m - E</h3>
                                <ul>
                                    <li>
                                        <strong>NRG #40</strong> <p>[1 Jan 2017 to 1 Jan 2018]</p>
                                    </li>
                                    <li>
                                        <strong>Theis  #4A</strong>  <p>[1 Jan 2018 to 1 Jan 2019]</p>
                                    </li>
                                    <li>
                                        <AddIcon className="icon-add" />
                                    </li>
                                </ul>
                            </div>
                            <div className={classes.towerDetailsItem}>
                                <h3>  <SwapHorizOutlinedIcon className="icon" />  Wind Speed @ 30m - E</h3>
                                <ul>
                                    <li>
                                        <strong>Theis  #4A</strong>  <p>[1 Jan 2018 to 1 Jan 2019]</p>
                                    </li>
                                    <li>
                                        <AddIcon className="icon-add" />
                                    </li>
                                </ul>
                            </div>
                            <div className={classes.towerDetailsItem}>
                                <h3>  <SwapHorizOutlinedIcon className="icon" />  Wind Dir @ 30m - E</h3>
                                <ul>
                                    <li>
                                        <strong>NRG #40</strong>  <p>[1 Jan 2017 to 1 Jan 2018]</p>
                                    </li>
                                    <li>
                                        <strong>Theis  #4A</strong>  <p>[1 Jan 2018 to 1 Jan 2019]</p>
                                    </li>
                                    <li>
                                        <strong>Theis  #4A</strong>  <p>[1 Jan 2018 to 1 Jan 2019]</p>
                                    </li>
                                    <li>
                                        <AddIcon className="icon-add" />
                                    </li>
                                </ul>
                            </div>
                            <div className={classes.towerDetailsItem}>
                                <h3>  <SwapHorizOutlinedIcon className="icon" />  Wind Dir @ 30m - W</h3>
                                <ul>
                                    <li>
                                        <strong>NRG #40</strong>  <p>[1 Jan 2017 to 1 Jan 2018]</p>
                                    </li>
                                    <li>
                                        <strong>Theis  #4A</strong>  <p>[1 Jan 2018 to 1 Jan 2019]</p>
                                    </li>
                                    <li>
                                        <strong>Theis  #4A</strong>  <p>[1 Jan 2018 to 1 Jan 2019]</p>
                                    </li>
                                    <li>
                                        <AddIcon className="icon-add" />
                                    </li>
                                </ul>
                            </div>
                            <div className={classes.towerDetailsItem}>
                                <h3>  <SwapHorizOutlinedIcon className="icon" />  Temperature @ 60m</h3>
                                <ul>
                                    <li>
                                        <strong>Theis  #4A</strong>  <p>[1 Jan 2018 to 1 Jan 2019]</p>
                                    </li>
                                    <li>
                                        <AddIcon className="icon-add" />
                                    </li>
                                </ul>
                            </div>
                        </Grid>
                        <Grid item xs={6} className="items-wrap">
                            <div className={classes.towerDetailsItem}>
                                <h3>  <SwapHorizOutlinedIcon className="icon" />  Wind Speed @ 60m - @</h3>
                                <ul>
                                    <li>
                                        <strong>NRG #40</strong> <p>[1 Jan 2017 to 1 Jan 2018]</p>
                                    </li>
                                    <li>
                                        <strong>Theis  #4A</strong>  <p>[1 Jan 2018 to 1 Jan 2019]</p>
                                    </li>
                                    <li>
                                        <AddIcon className="icon-add" />
                                    </li>
                                </ul>
                            </div>
                            <div className={classes.towerDetailsItem}>
                                <h3>  <SwapHorizOutlinedIcon className="icon" /> Wind Speed @ 50m - W</h3>
                                <ul>
                                    <li>
                                        <strong>Theis  #4A</strong>  <p>[1 Jan 2018 to 1 Jan 2019]</p>
                                    </li>
                                    <li>
                                        <AddIcon className="icon-add" />
                                    </li>
                                </ul>
                            </div>
                            <div className={classes.towerDetailsItem}>
                                <h3>  <SwapHorizOutlinedIcon className="icon" />  Wind Speed @ 30m - W</h3>
                                <ul>
                                    <li>
                                        <strong>NRG #40</strong> <p>[1 Jan 2017 to 1 Jan 2018]</p>
                                    </li>
                                    <li>
                                        <strong>Theis  #4A</strong>  <p>[1 Jan 2018 to 1 Jan 2019]</p>
                                    </li>
                                    <li>
                                        <AddIcon className="icon-add" />
                                    </li>
                                </ul>
                            </div>
                            <div className={classes.towerDetailsItem}>
                                <h3>  <SwapHorizOutlinedIcon className="icon" />  Wind Dir @ 30m - E</h3>
                                <ul>
                                    <li>
                                        <strong>NRG #40</strong>  <p>[1 Jan 2017 to 1 Jan 2018]</p>
                                    </li>
                                    <li>
                                        <strong>Theis  #4A</strong>  <p>[1 Jan 2018 to 1 Jan 2019]</p>
                                    </li>
                                    <li>
                                        <AddIcon className="icon-add" />
                                    </li>
                                </ul>
                            </div>
                            <div className={classes.towerDetailsItem}>
                                <h3>  <SwapHorizOutlinedIcon className="icon" />  Temperature @ 60m</h3>
                                <ul>
                                    <li>
                                        <strong>Theis  #4A</strong>  <p>[1 Jan 2018 to 1 Jan 2019]</p>
                                    </li>
                                    <li>
                                        <AddIcon className="icon-add" />
                                    </li>
                                </ul>
                            </div>
                            <div className={classes.towerDetailsItem}>
                                <h3>  <SwapHorizOutlinedIcon className="icon" /> Pressure @ Ground</h3>
                                <ul>
                                    <li>
                                        <strong>Theis  #4A</strong>  <p>[1 Jan 2018 to 1 Jan 2019]</p>
                                    </li>
                                    <li>
                                        <AddIcon className="icon-add" />
                                    </li>
                                </ul>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <div className={`${classes.towerBodyRight} ${show ? 'active' : ''}`} >
                {show ? <span className={classes.towerBodyClose} onClick={handleClose}><CloseIcon /></span> : ''}
                <div onClick={handleChange}>
                    <div className={classes.towerRightHead}>
                        <div className={classes.towerRighTitle}>
                            <h2>Theis #4A</h2>
                            <p>Wind Speed @ 60m , E</p>
                        </div>
                        <Link to="#" className={classes.logoIcon}>
                            <SwapHorizOutlinedIcon className="icon" />
                        </Link>
                    </div>
                    <div className={`${classes.towerBodyBasic} ${show ? 'active' : ''}`} >

                        <h3>Basic Details</h3>
                        <div className={classes.towerBodyBasicForm}>
                            <div className={classes.formField}>
                                <p>OEM</p>
                                <input
                                    value="12332442"
                                    className="control-form"
                                />
                            </div>
                            <div className={classes.formField}>
                                <p>Sensor Model</p>
                                <input
                                    value="Sensor Model"
                                    className="control-form"
                                />
                            </div>
                            <div className={classes.formField}>
                                <p> Sensor Type</p>
                                <select name="wind" id="wind" className="control-form">
                                    <option value="WindSpeed">WindSpeed</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                            <div className={classes.formField}>
                                <div className={classes.formFieldDate}>
                                    <div className="date">
                                        <p> Date from</p>
                                        <input type="date" className="control-form"></input>
                                    </div>
                                    <div className="date">
                                        <p> Date to</p>
                                        <input type="date" className="control-form"></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.towerBodySensor}>
                        <div className={classes.towerBodySensorHead}>
                            <h3>Sensor Configuration</h3>
                            <p><AddIcon /> {show ? ' Sensor Configuration' : ''}</p>
                        </div>

                        <div className={classes.towerBodySensorTable}>
                            {show ?
                                <table>
                                    < tr >
                                        <th>Display Name</th>
                                        <th>Slope</th>
                                        <th>Offset</th>
                                        <th>Units</th>
                                        <th>Logger height</th>
                                        <th>Channel</th>
                                        <th>Date from</th>
                                    </tr>
                                    <tr>
                                        <td><input className="control-form" value="Config name 2" /></td>
                                        <td><input className="control-form" value="value" /></td>
                                        <td><input className="control-form" value="value" /></td>
                                        <td><input className="control-form" value="value" /></td>
                                        <td><input className="control-form" value="value" /></td>
                                        <td><input className="control-form" value="value" /></td>
                                        <td><input type='date' className="control-form" value="value" /></td>
                                    </tr>
                                    <tr>
                                        <td><input className="control-form" value="Config name 2" /></td>
                                        <td><input className="control-form" value="value" /></td>
                                        <td><input className="control-form" value="value" /></td>
                                        <td><input className="control-form" value="value" /></td>
                                        <td><input className="control-form" value="value" /></td>
                                        <td><input className="control-form" value="value" /></td>
                                        <td><input type='date' className="control-form" value="value" /></td>
                                    </tr>
                                </table>
                                :
                                <div className={classes.towerBodySensorForm}>
                                    <input type="text" className="control-form_border" value=" Sensor Config 2 " />
                                    <input type="text" className="control-form_border" value=" Sensor Config 1 " />
                                </div>
                            }

                        </div>
                    </div>
                    <div className={classes.towerBodySensor}>
                        <div className={classes.towerBodySensorHead}>
                            <h3>Mounting Arrangement</h3>
                            <p><AddIcon /> {show ? ' Sensor Configuration' : ''}</p>
                        </div>

                        <div className={classes.towerBodySensorTable}>
                            {show ?
                                <table>
                                    < tr >
                                        <th>Display Name</th>
                                        <th>Slope</th>
                                        <th>Offset</th>
                                        <th>Units</th>
                                        <th>Logger height</th>
                                        <th>Channel</th>
                                        <th>Date from</th>
                                    </tr>
                                    <tr>
                                        <td><input className="control-form" value="Config name 2" /></td>
                                        <td><input className="control-form" value="value" /></td>
                                        <td><input className="control-form" value="value" /></td>
                                        <td><input className="control-form" value="value" /></td>
                                        <td><input className="control-form" value="value" /></td>
                                        <td><input className="control-form" value="value" /></td>
                                        <td><input type='date' className="control-form" value="value" /></td>
                                    </tr>
                                    <tr>
                                        <td><input className="control-form" value="Config name 2" /></td>
                                        <td><input className="control-form" value="value" /></td>
                                        <td><input className="control-form" value="value" /></td>
                                        <td><input className="control-form" value="value" /></td>
                                        <td><input className="control-form" value="value" /></td>
                                        <td><input className="control-form" value="value" /></td>
                                        <td><input type='date' className="control-form" value="value" /></td>
                                    </tr>
                                </table>
                                :
                                <div className={classes.towerBodySensorForm}>
                                    <input type="text" className="control-form_border" value=" Arrangement 3 | 60 Deg - N " />
                                    <input type="text" className="control-form_border" value=" Arrangement 2 | 30 Deg - W" />
                                    <input type="text" className="control-form_border" value=" Arrangement 1 | 30 Deg - E" />
                                </div>
                            }

                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
};

export default TowerSubBody;
