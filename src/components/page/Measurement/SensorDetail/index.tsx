import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import AddIcon from '@material-ui/icons/Add';
// import Button from '@material-ui/core/Button';
// import { Grid } from '@material-ui/core';
// import SwapHorizOutlinedIcon from '@material-ui/icons/SwapHorizOutlined';
import { Link } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';
// import DeleteIcon from '@material-ui/icons/Delete';
// import ToggleButton from 'src/components/bits/core/ToggleButton';
// import { gql, useQuery } from '@apollo/client';
// import Breadcrumb from 'src/components/bits/Breadcrumb';
// import SensorCard from 'src/components/common/SensorCard';
// import SidePreview from 'src/components/common/SidePreview';
import SensorBasicDetail from '../SensorBasicDetail';
import SensorConfiguration from '../SensorConfiguration';
// import SensorProperty from '../SensorProperty';
import MountingArrangement from '../MountingArrangement';
import Calibration from '../Calibration';
import { TrashSmallIcon, MeasurementPointCircle } from 'src/components/icons';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  googleMap: {
    width: '100%',
    '& iframe': {
      width: '100%',
      height: '100%',
      border: 'none',
    },
  },
  towerBody: {
    display: 'flex',
    flexWrap: 'wrap',
    position: 'relative',
  },
  towerHead: {
    backgroundColor: 'var(--white)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 1.5rem',
    height: '4.2rem',
    fontFamily: 'Roboto',
  },
  arrowIcon: {
    width: '8px',
    height: '8px',
  },
  towerBodyLeft: {
    width: 'calc(100% - 25rem)',
  },
  towerBodyRight: {
    boxShadow: ' 0 2px 12px 7px rgba(0, 0, 0, 0.02)',
    width: '100%',
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
      marginTop: '5px',
      fontSize: '12px',
      width: '210px',
      overflow: 'hidden',
      outline: 'none',
      textAlign: 'center',
      lineHeight: '1.33',
      background: 'rgba(30 , 36 , 71 , 0.06)',
      borderRadius: '2px',
      '&::before,&::after': {
        display: 'none',
      },
    },
  },
  towerDetails: {
    padding: '3rem 3.5rem 7rem 3.5rem',
    boxShadow: '2px 9px 47px 20px rgba(0, 0, 0, 0.02)',
    backgroundColor: 'rgba(30,36,71,.03)',
  },
  towerStatus: {
    display: 'flex',
    marginBottom: '40px',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  towerStatusName: {
    '& p': {
      fontFamily: 'Roboto',
      color: theme.palette.primary.main,
      fontSize: '11px',
      lineHeight: '15px',
      letterSpacing: '0.3px',
      opacity: '.3',
    },
    '& h3': {
      fontFamily: 'Roboto',
      marginTop: '3px',
      fontSize: '2rem',
      letterSpacing: '0.2px',
      fontWeight: 500,
      lineHeight: '20px',
      objectFit: 'contain',
      color: theme.palette.primary.main,
    },
  },
  towerStatusBtn: {
    '& button': {
      width: '13.3rem',
      '& MuiButton-startIcon': {
        fontSize: '1.3rem',
      },
    },
  },
  towerDetailsCard: {
    '& .items-wrap': {},
  },
  towerDetailsItem: {
    background: '#fff',
    borderRadius: '6px',
    color: theme.palette.primary.main,
    transition: 'all .3 ease-in',
    '&:not(:first-child)': {
      marginTop: '2.5rem',
    },
    '&:hover': {
      '& h3': {
        opacity: '1',
      },
    },
    '& h3': {
      fontSize: '14px',
      padding: '14px 15px',
      display: 'flex',
      alignItems: 'center',
      opacity: '0.8',
      '& .icon': {
        marginRight: '10px',
      },
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
            opacity: '1',
          },
        },
        '& strong': {
          fontSize: '13px',
          color: '#1e2447',
          opacity: '0.8',
          letterSpacing: '1.08',
          marginRight: '8px',
        },
        '& p': {
          color: '#1e2447',
          opacity: '0.5',
        },
        '& .icon-add': {
          color: '#00c48c',
        },
      },
    },
  },
  towerRightHead: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: (props: any) =>
      props.show ? '25px 25px 20px 25px' : '25px 15px 20px 15px',
    fontFamily: 'Roboto',
    color: theme.palette.primary.main,
    '& h2': {
      fontSize: '2rem',
      letterSpacing: '0.2px',
      lineHeight: '26px',
      marginBottom: '.7rem',
    },
    '& h3': {
      fontWeight: 'normal',
      fontSize: '13px',
      lineHeight: '18px',
      letterSpacing: '0.1px',
      opacity: '0.6',
    },
  },

  towerRightTitle: {},
  logoIcon: {
    // boxShadow: '0 0 26px 6px rgba(0, 0, 0, 0.05)',
    // background: '#fff',
    // width: '44px',
    // height: ' 44px',
    // borderRadius: '50%',
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    '& .icon': {
      boxShadow: '0 0 26px 6px rgba(0, 0, 0, 0.05)',
      background: '#fff',
      width: '44px',
      height: ' 44px',
      overflow: 'hidden',
      borderRadius: '50%'
    },
  },
  towerBodyBasic: {
    padding: '20px 20px 30px 20px',
    borderTop: '1px solid rgb(30 , 36 , 71 , .1)',
    '&.active': {
      paddingRight: '210px',
    },
    '& h3': {
      color: theme.palette.primary.main,
      fontSize: '15px',
      fontWeight: 500,
      lineHeight: '1.07',
      letterSpacing: 'normal',
      marginBottom: '1.4rem',
    },
  },
  towerBodyBasicForm: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  formField: {
    marginTop: '16px',
    '& p': {
      fontSize: '13px',
      color: '#000',
      opacity: '0.5',
      lineHeight: '1.23',
    },

    '& .date': {
      width: '100px',
      '&:last-child': {
        marginLeft: '10px',
      },
      '& input': {
        width: '100%',
      },
    },
  },
  formFieldDate: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  towerBodyClose: {
    position: 'absolute',
    top: '23px',
    left: '-34px',
    padding: '6px',
    cursor: 'pointer',
    background: '#fff',
    borderRadius: '4px',
    zIndex: theme.spacing(2),
    boxShadow: ' 0 2px 12px -2px rgba(0, 0, 0, 0.04)',
  },
  towerBodySensor: {
    // padding: '20px 15px 30px 15px',
    padding: (props: any) =>
      props.show ? '20px 25px 40px 25px' : '20px 15px 30px 15px',
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
      '&.delete': {
        '& svg': {
          fill: theme.palette.primary.main,
        },
      },
      '& svg': {
        fill: theme.palette.secondary.main,
      },
    },
  },
  towerBodySensorHead: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    '& .delete': {
      '& svg': {
        marginRight: '8px',
      },
      '& span': {
        opacity: '0.7',
        fontFamily: 'Roboto',
        fontSize: '11px',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '1',
        letterSpacing: 'normal',
        color: 'var(--dark-bue)',
      },
    },
  },
  towerBodySensorTable: {
    marginTop: '2rem',
    '& table ': {
      borderCollapse: 'collapse',
      width: '100%',

      '& th': {
        padding: '10px 5px',
        textAlign: 'center',
        fontSize: '12px',
        marginBottom: '10px',
        color: 'rgba(0 , 0 , 0 , .3)',
        borderBottom: ' solid 1px rgb(30 , 36 , 71 , .1)',
        '&:first-child': {
          textAlign: 'left',
        }
      },
      '& td': {
        padding: '5px',
        '& .control-form': {
          width: '100%',
          '&.date': {
            width: '112px',
          },
        },
      },
    },
    '& .calibration': {
      '& td': {
        '& .control-form': {
          height: '34px',
          lineHeight: '34px',
        },
      },
    },
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
      border: 'solid 1px rgba(30 , 36 , 71 , .15)',
    },
  },
  pdf: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    padding: '3px 4px',
    width: '150px',
    fontSize: '11px',
    borderRadius: '2px',
    marginTop: '4px',
    color: 'rgba(0 , 0 , 0 , .8)',
    border: ' solid 1px rgba(30, 36, 71, 0.15)',
    '& img': {
      width: '27px',
      marginRight: '5px',
    },
    '& input': {
      display: 'none',
    },
  },
}));

interface Props {
  show?: boolean;
  handleClose?: (e: any) => void;
  data?: any;
}

const SensorDetail = ({ show, handleClose, data }: Props) => {
  const classes = useStyles({ show });

  return (
    <div className={`${classes.towerBodyRight} ${show ? 'active' : ''}`}>
      {show ? (
        <span className={classes.towerBodyClose} onClick={handleClose}>
          <CloseIcon />
        </span>
      ) : (
          ''
        )}
      <div className={classes.towerRightHead}>
        <div className={classes.towerRightTitle}>
          <h2>Theis #4A</h2>
          <h3>Wind Speed @ 60m , E</h3>
        </div>
        <Link to="#" className={classes.logoIcon}>
          <MeasurementPointCircle className="icon" />
        </Link>
      </div>
      <SensorBasicDetail show={show} />
      <SensorConfiguration show={show} />
      <MountingArrangement show={show} />
      <Calibration show={show} />
      <div className={classes.towerBodySensor}>
        <div className={classes.towerBodySensorHead}>
          <p className="delete">
            <TrashSmallIcon /> <span> Delete Sensor</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SensorDetail;
