import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  btnPrimary: {
    background: theme.palette.primary.main,
    width: '100%',
    padding: '1.2rem 0',
    color: 'rgba(255 , 255 , 255 , .9)',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '15px',
    fontFamily: 'Roboto',
    textAlign: 'center',
    border: 'none',
    transition: 'all .3s ease-in',
    '&:hover': {
      background: theme.palette.secondary.main,
    },
    '&:focus': {
      border: 'none',
    },
  },
}));
interface InputProps {
  nameValue?: string;
  type?: 'submit' | 'button';
}
const ButtonField = ({ nameValue, type }: InputProps) => {
  const classes = useStyles();
  return (
    <button type={type} className={classes.btnPrimary}>
      {nameValue}
    </button>
  );
};

export default ButtonField;
