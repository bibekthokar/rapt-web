import { makeStyles } from '@material-ui/core';
import React from 'react';
import { PlusGreenIcon, TrashBigIcon, Pdf } from 'src/components/icons';

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
        textAlign: 'center',
        fontSize: '12px',
        marginBottom: '10px',
        color: 'rgba(0 , 0 , 0 , .3)',
        borderBottom: ' solid 1px rgb(30 , 36 , 71 , .1)',
        '&:first-child': {
          textAlign: 'left',
        },
      },
      '& td': {
        padding: '5px',
        '&:first-child': {
          '& .control-form': {
            width: '123px',
            textAlign: 'left'
          }
        },
        '& .control-form': {
          width: '100%',
          '&.date': {
            width: '107px',
            padding: '4px 0px 4px 8px'
          },
        },
      },

      '& tbody': {
        '& tr': {
          '& td:nth-child(1)': {
            '& input': {
              width: '153px !important',
              textAlign: 'left',
            },
          },
          '& td': {

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
          },
          '& td:nth-child(2),& td:nth-child(3)': {
            '& input': {
              textAlign: 'center',
            },
          },
        },
      },
    },
    '& .calibration': {
      '& td': {
        '&:first-child': {
          '& .control-form': {
            width: '153px'
          }
        },
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
}

const Calibration = ({ show }: Props) => {
  const classes = useStyles({ show });
  return (
    <div className={classes.towerBodySensor}>
      <div className={classes.towerBodySensorHead}>
        <h3>Calibration</h3>
        <p>
          <PlusGreenIcon /> {show ? <span> 'New Calibration' </span> : ''}
        </p>
      </div>

      <div className={classes.towerBodySensorTable}>
        {show ? (
          <table className="calibration">
            <tr>
              <th>Display Name</th>
              <th>Slope</th>
              <th>Offset</th>
              <th>Date</th>
              <th>Documentation</th>
              <th></th>
            </tr>
            <tbody>
              <tr>
                <td>
                  <input
                    className="control-form"
                    value="Sensor Calibration 2"
                  />
                </td>
                <td>
                  <input className="control-form" value="value" />
                </td>
                <td>
                  <input className="control-form" value="value" />
                </td>
                <td>
                  <input type="date" className="control-form " value="value" placeholder="dd-mm-yyyy" />
                </td>
                <td>
                  <label className={classes.pdf}>
                    <input type="file" />
                    <Pdf />
                    CalibrationFile_2.pdf
                  </label>
                </td>
                <td>
                  <TrashBigIcon />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    className="control-form"
                    value="Sensor Calibration 1"
                  />
                </td>
                <td>
                  <input className="control-form" value="value" />
                </td>
                <td>
                  <input className="control-form" value="value" />
                </td>
                <td>
                  <input type="date" className="control-form " value="value" />
                </td>
                <td>
                  <label className={classes.pdf}>
                    <input type="file" />
                    {/* <img src="/asset/img/pdf.svg" alt="pdf" /> */}
                    <Pdf />
                    CalibrationFile_1.pdf
                  </label>
                </td>
                <td>
                  <TrashBigIcon />
                </td>
              </tr>
            </tbody>
          </table>
        ) : (
          <div className={classes.towerBodySensorForm}>
            <input
              type="text"
              className="control-form_border"
              value=" Sensor Calibration 1  "
            />
            <input
              type="text"
              className="control-form_border"
              value=" Sensor Calibration 2"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Calibration;
