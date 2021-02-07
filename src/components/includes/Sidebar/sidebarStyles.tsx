import { Theme } from '@material-ui/core';

const sidebarStyles = (theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  sideBar: {
    width: '25rem',
    height: '100vh',
    padding: '25px 20px 29px',
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
      marginTop: '2rem',
    },
  },
  titleWrap: {
    display: 'flex',
    fontFamily: 'Roboto',
    lineHeight: '1.5',
    color: '#fff',
    fontWeight: theme.spacing(60),
    alignItems: 'baseline',
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
    paddingLeft: '4.5rem',
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
  rootTitle: {
    fontSize: '16px',
    textTransform: 'capitalize',
  },
  count: {
    fontStyle: 'italic',
    fontSize: '10px',
    marginLeft: '5px',
    color: 'rgb(255,255 ,255,  .5)',
  },
});

export default sidebarStyles;
