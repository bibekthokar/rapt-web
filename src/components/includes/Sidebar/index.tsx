import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { ProjectDarkIcon } from 'src/components/icons';
const useStyles = makeStyles((theme) => ({
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
    fontSize: '1.5rem',
    textTransform: 'capitalize',
    color: 'rgb(255,255 ,255,  .56)',
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
                <ProjectDarkIcon />
                {project.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
