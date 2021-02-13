import React from 'react';
import { makeStyles } from '@material-ui/core';
import { PlusGreenIcon } from 'src/components/icons';
import moment from 'moment';
import clsx from 'clsx';
import {
  MastWhiteIcon,
  WindDirectionMIcon,
  WindSpeedMIcon,
  TemperatureMIcon,
  PressureMIcon,
} from 'src/components/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    // maxWidth: '42.5rem',
    minWidth: '42.5rem',
    height: 'fit-content',
    backgroundColor: '#fefefe',
    // boxShadow: '2px 9px 47px 20px rgba(0, 0, 0, 0.02)',
    borderRadius: '6px',
    marginBottom: '2.5rem',
  },
  inactiveRoot: {
    opacity: '0.7',
  },
  header: {
    height: '4.5rem',
    display: 'flex',
    alignItems: 'center',
    padding: '0 1.5rem',
    borderBottom: '1px solid #eeeeee',
    '& h2': {
      opacity: '.8',
      fontFamily: 'Roboto',
      fontSize: '1.4rem',
      fontWeight: 'bold',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: '1.21',
      letterSpacing: '0.08px',
      color: '#001122',
      // color: 'rgba(0,17,34,.8)',
      marginLeft: '1rem',
    },
  },
  sensorList: {
    listStyleType: 'none',
    padding: 0,
    '& li': {
      // borderBottom: 'solid 0.3px rgba(30,36,71,.2)',
      borderBottom: '1px solid #eeeeee',
      cursor: 'pointer',
      height: '3.5rem',
      paddingLeft: '2.5rem',
      display: 'flex',
      alignItems: 'center',
      transition: 'all .1s ease-in',
      // '&:hover': {
      //   height: '4.5rem',
      //   color: '#fff',
      //   transform: ' scale(1.03)',
      //   borderRadius: '4px',
      //   background: theme.palette.secondary.main,
      //   '& .icon-add,& h4, & p': {
      //     color: '#fff',
      //     opacity: '1',
      //   },
      // },

      '& h2': {
        fontFamily: 'Roboto',
        opacity: '0.8',
        fontSize: '1.3rem',
        lineHeight: '1',
        marginRight: '8px',
        fontWeight: 'normal',
        fontStretch: 'normal',
        letterSpacing: 'normal',
        fontStyle: 'normal',
        color: theme.palette.primary.main,
      },
      '& p': {
        fontFamily: 'Roboto',
        opacity: '.5',
        fontSize: '1.2rem',
        lineHeight: '1.08',
        fontWeight: 'normal',
        fontStretch: 'normal',
        letterSpacing: 'normal',
        fontStyle: 'normal',
        color: theme.palette.primary.main,
      },
    },
  },
  footer: {
    height: '4rem',
    display: 'flex',
    alignItems: 'center',
    padding: '0 1.5rem',
    '& svg': {
      cursor: 'pointer',
    },
  },
  itemActive: {
    height: '4.5rem !important',
    color: '#fff !important',
    transform: ' scale(1.03)',
    borderRadius: '4px',
    background: theme.palette.secondary.main,
    '& h2, & p': {
      color: '#fff !important',
      opacity: '1 !important',
    },
  },
}));

interface Props {
  title: string;
  sensorList: { name: string; date_from: string; date_to?: string }[];
  activeSensor?: number | null;
  activeMeasurementPoint?: boolean;
  onClick: any;
}

const SensorCard = ({
  title,
  activeMeasurementPoint,
  sensorList,
  activeSensor,
  onClick,
}: Props) => {
  const classes = useStyles();
  const getIcon = (name: string) => {
    if (name.includes('Wind Speed')) {
      return <WindSpeedMIcon />;
    } else if (name.includes('Wind Dir')) {
      return <WindDirectionMIcon />;
    } else if (name.includes('Temperature')) {
      return <TemperatureMIcon />;
    } else if (name.includes('Pressure')) {
      return <PressureMIcon />;
    } else {
      <MastWhiteIcon />;
    }
    // return <MastWhiteIcon />;
  };
  return (
    <div
      className={clsx(
        classes.root,
        !activeMeasurementPoint && activeSensor ? classes.inactiveRoot : ''
      )}
    >
      <div className={classes.header}>
        {getIcon(title)}
        {/* <img src="/asset/icons/wind-speed-m.svg" alt="wind-speed" /> */}
        <h2> {title}</h2>
      </div>
      <ul className={classes.sensorList}>
        {sensorList.map((i, index) => (
          <li
            key={`${i.name}${index}`}
            className={
              activeMeasurementPoint && activeSensor === index + 1
                ? classes.itemActive
                : ''
            }
            onClick={() => {
              onClick(index + 1);
            }}
          >
            <h2>{i.name}</h2>
            <p>
              [{i.date_from ? moment(i.date_from).format('DD MMM YYYY') : ''}
              {i.date_to ? ` to ${moment(i.date_to).format('DD MM YYYY')}` : ''}
              ]
            </p>
          </li>
        ))}
      </ul>
      <div className={classes.footer}>
        <PlusGreenIcon />
      </div>
    </div>
  );
};

export default SensorCard;
