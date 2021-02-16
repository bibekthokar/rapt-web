import { makeStyles } from '@material-ui/core';
import React from 'react';
import { PlusGreenIcon } from 'src/components/icons';

const useStyles = makeStyles((theme) => ({
  towerBodySensor: {
    // padding: '20px 15px 30px 15px',
    // padding: (props: any) =>
    //   props.show ? '25px 25px 30px 25px' : '20px 15px 30px 15px',
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
    '& span': {
      opacity: '0.7',
      fontFamily: 'Roboto',
      fontSize: '12px',
      fontWeight: 'normal',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: '1.08',
      letterSpacing: 'normal',
      color: '#1e2447',
    },
    '& svg': {
      marginRight: '8px',
    },
  },
  towerBodySensorTable: {
    marginTop: ({ show }: any) => (show ? '2.6rem' : '1.8rem'),

    '& table ': {
      borderCollapse: 'collapse',
      width: '100%',

      '& th': {
        padding: '10px 5px',
        textAlign: 'left',
        fontSize: '12px',
        marginBottom: '10px',
        color: 'rgba(0 , 0 , 0 , .3)',
        borderBottom: ' solid 1px rgb(30 , 36 , 71 , .1)',
      },
      '& td': {
        padding: '5px',
        '& input': {
          fontFamily: 'Roboto',
          fontSize: '12px',
          fontWeight: 'normal',
          fontStretch: 'normal',
          fontStyle: 'normal',
          lineHeight: 'normal',
          letterSpacing: 'normal',
          color: 'rgba(0,0,0,.9)',
        },
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
      width: '220px',
      fontSize: '13px',
      padding: '9px 8px',
      borderRadius: '2px',
      color: 'rgba(0 , 0 , 0 , .7)',
      border: 'solid 1px rgba(30 , 36 , 71 , .15)',
    },
    '& .control-form_border:not(:first-child)': {
      marginTop: '10px',
    },
  },
}));

interface Props {
  show?: boolean;
}
const MountingArrangement = ({ show }: Props) => {
  const classes = useStyles({ show });
  return (
    <div className={classes.towerBodySensor}>
      <div className={classes.towerBodySensorHead}>
        <h3>Mounting Arrangement</h3>
        <p>
          <PlusGreenIcon /> {show ? <span>' New arrangement' </span> : ''}
        </p>
      </div>

      <div className={classes.towerBodySensorTable}>
        {show ? (
          <table>
            <tr>
              <th>Display Name</th>
              <th>Type</th>
              <th>Boom Orientation</th>
              <th>Boom OEM</th>
              <th>Boom Model</th>
              <th>Date from</th>
              <th>Date To</th>
            </tr>
            <tr>
              <td>
                <input className="control-form" value="A3 | 60 Deg - N" />
              </td>
              <td>
                <select name="type" id="type" className="control-form">
                  <option value="type">type</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
              </td>
              <td>
                <input className="control-form" value="value" />
              </td>
              <td>
                <input className="control-form" value="value" />
              </td>
              <td>
                <input className="control-form" value="value" />
              </td>
              <td>
                <input
                  type="date"
                  className="control-form date"
                  value="value"
                />
              </td>
              <td>
                <input
                  type="date"
                  className="control-form date"
                  value="value"
                />
              </td>
            </tr>
            <tr>
              <td>
                <input className="control-form" value="A3 | 60 Deg - N" />
              </td>
              <td>
                <select name="type" id="type" className="control-form">
                  <option value="type">type</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
              </td>
              <td>
                <input className="control-form" value="value" />
              </td>
              <td>
                <input className="control-form" value="value" />
              </td>
              <td>
                <input className="control-form" value="value" />
              </td>
              <td>
                <input
                  type="date"
                  className="control-form date"
                  value="value"
                />
              </td>
              <td>
                <input
                  type="date"
                  className="control-form date"
                  value="value"
                />
              </td>
            </tr>
          </table>
        ) : (
            <div className={classes.towerBodySensorForm}>
              <input
                type="text"
                className="control-form_border"
                value=" Arrangement 3 | 60 Deg - N "
              />
              <input
                type="text"
                className="control-form_border"
                value=" Arrangement 2 | 30 Deg - W"
              />
              <input
                type="text"
                className="control-form_border"
                value=" Arrangement 1 | 30 Deg - E"
              />
            </div>
          )}
      </div>
    </div>
  );
};

export default MountingArrangement;
