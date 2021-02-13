import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  sideBar: {
    width: '25rem',
    marginTop: '4.8rem',
    backgroundColor: theme.palette.primary.light,
  },
  sideBarWrap: {
    padding: '2.5rem 2rem 2rem 2rem',
  },
  sideHead: {
    color: '#fff',
    padding: '2rem .5rem .5rem .5rem',
    '& a': {
      textDecoration: 'none',
    },
    '& > li:not(:first-child)': {
      marginTop: '1.6rem',
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
    fontSize: '1.5rem',
    fontFamily: 'Roboto',
    textTransform: 'capitalize',
    color: 'var(--white)',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    display: 'flex',
    alignItems: 'center',
    transition: 'all .3s ease-in',
    opacity: '.8',
    '& svg': {
      marginRight: '1rem',
    },
    '& img': {
      width: '1.4rem',
      height: '1.4rem',
      objectFit: 'contain',
      margin: '3px 1rem 3px 0',
      marginRight: '1rem',
      borderRadius: '2px',
      opacity: '.8',
    },
    '&:hover , &.active': {
      opacity: '1',
      '& img': {
        opacity: '1',
      },
    },
  },
  rootTitle: {
    fontSize: '16px',
    fontFamily: 'Roboto',
    fontWeight: 500,
    lineHeight: '1.5',
    letterSpacing: 'normal',
    color: 'var(--white)',
    textTransform: 'capitalize',
  },
  count: {
    fontStyle: 'italic',
    fontSize: '10px',
    marginLeft: '5px',
    color: 'rgb(255,255 ,255,  .5)',
  },
}));
const SideBar = () => {
  const classes = useStyles();
  const projectName = [
    { name: 'Project name 1', id: 'p1' },
    { name: 'Project name 2', id: 'p2' },
    { name: 'Project name 3', id: 'p3' },
    { name: 'Project name 4', id: 'p4' },
    { name: 'Project name 5', id: 'p5' },
    { name: 'Project name 6', id: 'p6' },
    { name: 'Project name 7', id: 'p7' },
    { name: 'Project name 8', id: 'p8' },
  ];
  return (
    <div className={classes.sideBar}>
      <div className={classes.sideBarWrap}>
        <div className={classes.titleWrap}>
          <span className={classes.rootTitle}>Projects</span>
          <span className={classes.count}>(8)</span>
        </div>
        <ul className={classes.sideHead}>
          {projectName.map((project, index) => {
            return (
              <li key={project.id}>
                <Link
                  className={classes.mainTitle}
                  to={`/${project.name.toLowerCase().replace(/ /g, '-')}`}
                >
                  {/* <ProjectDarkIcon /> */}
                  <img
                    src="/asset/icons/project-selected-dark.svg"
                    alt="project"
                  />
                  {project.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
