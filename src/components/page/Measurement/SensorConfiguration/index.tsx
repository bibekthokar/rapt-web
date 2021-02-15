// import React from 'react';
// import styled from 'styled-components';
// import SensorHeader from '../bits/SensorHeader';
// import SensorTableHeader from '../bits/SensorTableHeader';
// import SensorTableBody from '../bits/SensorTableBody';

// interface Props {}

// const SensorConfigurationWrapper = styled.div`
//   padding: 20px 25px 0 25px;
// `;

// const SensorConfiguration = (props: Props) => {
//   return (
//     <SensorConfigurationWrapper>
//       <SensorHeader
//         title="Sensor Configuration"
//         iconTitle="New Configuration"
//       />
//       <table>
//         <SensorTableHeader
//           titleList={[
//             'Display Name',
//             'Slop',
//             'Offset',
//             'Units',
//             'logger height',
//             'Channel',
//             'Date from',
//           ]}
//         />
//         <SensorTableBody
//           dataList={[
//             'Config name 2',
//             'value',
//             'value',
//             'value',
//             'value',
//             'value',
//             'Date from',
//           ]}
//         />
//       </table>
//     </SensorConfigurationWrapper>
//   );
// };

// export default SensorConfiguration;

import { makeStyles } from '@material-ui/core';
import React from 'react';
import { PlusGreenIcon } from 'src/components/icons';

const useStyles = makeStyles((theme) => ({
  towerBodySensor: {
    // padding: '20px 15px 30px 15px',
    padding: (props: any) =>
      props.show ? '20px 25px 40px 25px' : '20px 15px 30px 15px',
    borderTop: '1px solid rgb(30 , 36 , 71 , .1)',

    // padding: 20px 25px 40px 25px;
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
    marginTop: '1.8rem',
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
        padding: '5px',
        '& .control-form': {
          width: '100%',

          '&.date': {
            width: '100px',
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
    marginTop: ({ show }: any) => (show ? '2rem' : '1.8rem'),

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

const SensorConfiguration = ({ show }: Props) => {
  const classes = useStyles({ show });
  return (
    <div className={classes.towerBodySensor}>
      <div className={classes.towerBodySensorHead}>
        <h3>Sensor Configuration</h3>
        <p>
          <PlusGreenIcon /> {show ? <span>' Sensor Configuration'</span> : ''}
        </p>
      </div>
      <div className={classes.towerBodySensorTable}>
        {show ? (
          <table>
            <tr>
              <th>Display Name</th>
              <th>Slope</th>
              <th>Offset</th>
              <th>Units</th>
              <th>Logger height</th>
              <th>Channel</th>
              <th>Date from</th>
            </tr>
            <tr>
              <td>
                <input className="control-form" value="Config name 2" />
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
                <input className="control-form" value="value" />
              </td>
              <td>
                <input className="control-form" value="value" />
              </td>
              <td>
                <input type="date" className="control-form" value="value" />
              </td>
            </tr>
            <tr>
              <td>
                <input className="control-form" value="Config name 2" />
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
                <input className="control-form" value="value" />
              </td>
              <td>
                <input className="control-form" value="value" />
              </td>
              <td>
                <input type="date" className="control-form" value="value" />
              </td>
            </tr>
          </table>
        ) : (
          <div className={classes.towerBodySensorForm}>
            <input
              type="text"
              className="control-form_border"
              value=" Sensor Config 2 "
            />
            <input
              type="text"
              className="control-form_border"
              value=" Sensor Config 1 "
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SensorConfiguration;
