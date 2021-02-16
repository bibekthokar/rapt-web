import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useParams } from 'react-router-dom';
import {
  ProjectDarkSelectedIcon,
  MastWhiteIcon,
  WindDirectionIcon,
  WindSpeedIcon,
  TemperatureIcon,
  PressureIcon,
} from 'src/components/icons';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { gql, useQuery } from '@apollo/client';
interface Props { }
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  a: {
    textDecoration: 'none',
  },
  sideBar: {
    width: '25rem',
    marginTop: '4.8rem',
    backgroundColor: theme.palette.primary.light,
    padding: '1.7rem 0',
  },
  sideHead: {
    color: '#fff',
    padding: '0 .5rem .5rem 0',
    '& a': {
      textDecoration: 'none',
    },
    '& > li:not(:first-child)': {
      // marginTop: '1.4rem',
    },
  },
  titleWrap: {
    display: 'flex',
    fontFamily: 'Roboto',
    lineHeight: '1.5',
    color: '#fff',
    padding: '0 20px',
    fontWeight: theme.spacing(60),
    alignItems: 'baseline',
  },
  mainTitle: {
    position: 'relative',
    marginTop: '2rem',
    marginBottom: '1.3rem',
    marginRight: '2rem',
    marginLeft: '2rem',
    fontSize: '15px',
    color: '#ffff',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    display: 'flex',
    alignItems: 'center',
    transition: 'all .3s ease-in',
    '&:hover , &.active': {
      color: '#fff',
    },
    '& svg': {
      marginRight: '1rem',
      borderRadius: '2px',
    },
  },
  settingIcon: {
    position: 'absolute',
    width: '15px',
    height: '15px',
    objectFit: 'contain',
    right: '0',
  },
  subTitle: {
    fontFamily: 'Roboto',
    position: 'relative',
    fontSize: '15px',
    color: 'var(--white)',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    padding: '7px 25px',
    transition: 'all .3s ease-in',
    opacity: '.8',
    '& svg': {
      marginRight: '.7rem',
      width: '2rem',
      height: '2rem',
      opacity: '.8',
    },
    '&::before': {
      content: '" "',
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: '4px',
      transition: 'all .3s ease-in',
      // borderLeft: '4px solid #00c48c',
    },
    '&.active': {
      marginBottom: '1.5rem',
    },
    '&:hover , &.active': {
      opacity: 1,
      '& svg': {
        opacity: 1,
      },
      '&::before': {
        backgroundColor: '#00c48c',
      },
      backgroundColor: 'rgb(255,255 ,255,  .04)',
    },
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
    },
  },
  arrowIcon: {
    width: '9px',
    height: '9px',
  },
  projectTitle: {},
  subList: {
    marginTop: '1.5rem',
    marginBottom: '2rem',
    display: 'block',
    paddingLeft: '4.5rem',
    '& li:not(:first-child)': {
      marginTop: '8px',
    },
    '& li': {
      lineHeight: '2.4rem',
      cursor: 'pointer',
      '& .subItem': {
        fontFamily: 'Roboto',
        color: 'var(--white)',
        fontSize: '14px',
        letterSpacing: '0.2px',
        opacity: '0.7',
        lineHeight: '1.71',
        transition: 'all .3s ease',
        '&:hover,&.active': {
          opacity: '1',
          color: theme.palette.secondary.main,
        },
      },
    },
  },
  towerSubList: {
    padding: '0',
    marginTop: '1.2rem',
    marginBottom: '2rem',
    '& li:not(:first-child)': {
      marginTop: '.5rem',
    },
  },
  towerSubItem: {
    color: '#fff',
    opacity: '0.56',
    lineHeight: '1.85',
    letterSpacing: '0.5px',
    fontSize: '13px',
    display: 'flex',
    alignItems: 'center',
    '& svg': {
      marginRight: '7px',
      width: 20,
      height: 20,
    },
    '&:hover': {
      opacity: '1',
    },
  },
}));

const TOWERQUERY = gql`
  query {
    measurement_point @client {
      measurement_type_id
      name
    }
  }
`;

const TowerSideBar = (props: Props) => {
  const classes = useStyles();
  const params: any = useParams();
  const { data } = useQuery(TOWERQUERY);

  console.log(data, 'data is here from there');
  const towerName = [
    { name: 'Tower name 1', slug: 'tower-name-1', id: 't1' },
    {
      name: 'Tower name 2',
      slug: 'tower-name-2',
      id: 't2',
    },
    {
      name: 'Tower name 3',
      slug: 'tower-name-3',
      id: 't3',
    },
    {
      name: 'Tower name 4',
      slug: 'tower-name-4',
      id: 't4',
    },
    {
      name: 'Tower name 5',
      slug: 'tower-name-5',
      id: 't5',
    },
    {
      name: 'Tower name 6',
      slug: 'tower-name-6',

      id: 't6',
    },
  ];
  const towerSubItem = [
    'Wind Speed @ 60m , E',
    'Wind Speed @ 60m , W',
    'Wind Speed @ 50m , E',
    'Wind Speed @ 50m , W',
    'Wind Speed @ 30m , E',
    'Wind Speed @ 30m , W',
    'Wind Dir @ 50m, W',
    'Wind Dir @ 30m, E',
    'Wind Dir @ 30m, W',
    'Temperature @ 60m',
    'Temperature @ 30m',
    'Pressure @ Ground',
  ];

  const getIcon = (name: string) => {
    if (name.includes('Wind Speed')) {
      return <WindSpeedIcon />;
    } else if (name.includes('Wind Dir')) {
      return <WindDirectionIcon />;
    } else if (name.includes('Temperature')) {
      return <TemperatureIcon />;
    } else if (name.includes('Pressure')) {
      return <PressureIcon />;
    } else {
      <MastWhiteIcon />;
    }
    // return <MastWhiteIcon />;
  };

  return (
    <div className={classes.sideBar}>
      <div className={classes.titleWrap}>
        <Link className={classes.viewTitle} to="/">
          <ArrowBackIosIcon className={classes.arrowIcon} /> View Projects
        </Link>
      </div>
      <div className={classes.projectTitle}>
        <p className={classes.mainTitle}>
          <ProjectDarkSelectedIcon /> Project name 1
          <img
            className={classes.settingIcon}
            src="/asset/icons/setting-icon.svg"
            alt="project-setting"
          />
        </p>
        <ul className={classes.sideHead}>
          {towerName.map((tower, index) => {
            const active = params?.towerId === tower?.slug ? true : false;
            return (
              <li key={index}>
                <Link
                  to={
                    params?.towerId === tower?.slug
                      ? `/${params?.projectId}`
                      : `/${params?.projectId}/${tower?.slug}`
                  }
                >
                  <div
                    className={`${classes.subTitle} ${active ? 'active' : ''}`}
                  >
                    <MastWhiteIcon /> {tower?.name}
                  </div>
                </Link>
                {active ? (
                  <ul className={classes.subList}>
                    <li>
                      <Link
                        className={`subItem ${params?.property === 'location-properties'
                          ? 'active'
                          : ''
                          }`}
                        to={`/project-name-1/${tower?.slug}/location-properties`}
                      >
                        Location Properties
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`subItem ${params?.property === 'logger' ? 'active' : ''
                          }`}
                        to={`/project-name-1/${tower?.slug}/logger`}
                      >
                        Logger
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`subItem ${params?.property === 'measurement' ? 'active' : ''
                          }`}
                        to={`/project-name-1/${tower?.slug}/measurement`}
                      >
                        Measurements
                      </Link>
                      {params?.property === 'measurement' ? (
                        <ul className={classes.towerSubList}>
                          {towerSubItem.map((i, j) => {
                            return (
                              <li key={j}>
                                <p className={classes.towerSubItem}>
                                  {getIcon(i)} {i}
                                </p>
                              </li>
                            );
                          })}
                        </ul>
                      ) : (
                          ''
                        )}
                    </li>
                    <li>
                      <Link
                        className={`subItem ${params?.property === 'maintenance' ? 'active' : ''
                          }`}
                        to={`/project-name-1/${tower?.slug}/maintenance`}
                      >
                        Maintenance
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`subItem ${params?.property === 'calibration' ? 'active' : ''
                          }`}
                        to={`/project-name-1/${tower?.slug}/calibration`}
                      >
                        Calibration
                      </Link>
                    </li>
                  </ul>
                ) : (
                    ''
                  )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TowerSideBar;
