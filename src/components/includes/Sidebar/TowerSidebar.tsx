import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useParams } from 'react-router-dom';
import { ProjectDarkSelectedIcon, MastWhiteIcon } from 'src/components/icons';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { gql, useQuery } from '@apollo/client';
interface Props {}
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  a: {
    textDecoration: 'none',
  },
  sideBar: {
    width: '25rem',
    padding: '25px 0 29px',
    paddingTop: '73px',
    backgroundColor: '#111b30',
  },
  sideHead: {
    color: '#fff',
    marginTop: '23px',
    '& a': {
      textDecoration: 'none',
    },
    '& > li:not(:first-child)': {
      marginTop: '1.4rem',
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
      color: '#fff',
    },
    '& svg': {
      marginRight: '1rem',
    },
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
      borderLeft: '4px solid #00c48c',
    },
    '& svg': {
      marginRight: '1rem',
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
    display: 'block',
    paddingLeft: '4.5rem !important',
    '& li': {
      marginTop: '8px',
      lineHeight: '1.71',
      cursor: 'pointer',
      '& .subItem': {
        color: 'rgb(255,255 ,255,  .7)',
        fontSize: '14px',
        letterSpacing: '0.2px',
        '&:hover,&.active': {
          color: theme.palette.secondary.main,
        },
      },
    },
  },
  towerSubList: {
    '& li': {
      marginTop: {
        marginTop: '5px',
      },
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
    ' Wind Speed @ 60m , E',
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
                        className={`subItem ${
                          params?.property === 'location-properties'
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
                        className={`subItem ${
                          params?.property === 'logger' ? 'active' : ''
                        }`}
                        to={`/project-name-1/${tower?.slug}/logger`}
                      >
                        Logger
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`subItem ${
                          params?.property === 'measurement' ? 'active' : ''
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
                                  <MastWhiteIcon /> {i}
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
                        className={`subItem ${
                          params?.property === 'maintenance' ? 'active' : ''
                        }`}
                        to={`/project-name-1/${tower?.slug}/maintenance`}
                      >
                        Maintenance
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`subItem ${
                          params?.property === 'calibration' ? 'active' : ''
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
