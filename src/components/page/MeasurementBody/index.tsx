import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
// import SwapHorizOutlinedIcon from '@material-ui/icons/SwapHorizOutlined';
// import { Link } from 'react-router-dom';
// import CloseIcon from '@material-ui/icons/Close';
// import DeleteIcon from '@material-ui/icons/Delete';
import ToggleButton from 'src/components/bits/core/ToggleButton';
import { gql, useQuery } from '@apollo/client';
import Breadcrumb from 'src/components/bits/Breadcrumb';
import SensorCard from 'src/components/common/SensorCard';
import SidePreview from 'src/components/common/SidePreview';
import SensorDetail from '../Measurement/SensorDetail';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  googleMap: {
    width: '100%',
    '& iframe': {
      width: '100%',
      height: '100%',
      border: 'none',
    },
  },
  towerBody: {
    display: 'flex',
    flexWrap: 'wrap',
    position: 'relative',
  },
  towerHead: {
    backgroundColor: 'var(--white)',
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'space-between',
    // height: '4.2rem',
    // fontFamily: 'Roboto',
    // padding: '0 1.5rem',
    // maxWidth: '94rem',
    // marginLeft: 'auto',
    // marginRight: 'auto',
  },
  subTowerHeader: {
    height: '4.2rem',
    fontFamily: 'Roboto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '94rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '0 1.5rem',
  },
  arrowIcon: {
    width: '8px',
    height: '8px',
  },
  towerBodyLeft: {
    width: 'calc(100% - 25rem)',
  },
  towerBodyRight: {
    position: 'relative',
    width: '25rem',
    background: '#fff',
    transition: 'all .3s ease-in',
    '&.active': {
      width: '695px',
      position: 'absolute',
      right: '0',
      height: '100%',
      boxShadow: ' 0 2px 12px 7px rgba(0, 0, 0, 0.04)',
      transition: 'all .3s ease-in',
    },
    '& .control-form': {
      padding: '4px 8px',
      border: 'none',
      marginTop: '4px',
      fontSize: '12px',
      width: '210px',
      textAlign: 'center',
      overflow: 'hidden',
      outline: 'none',
      lineHeight: '1.33',
      background: 'rgba(30 , 36 , 71 , 0.06)',
      borderRadius: '2px',
      '&::before,&::after': {
        display: 'none',
      },
    },
  },
  towerDetails: {
    // background: 'rgba(30, 36, 71, 0.03)',
    // boxShadow: '2px 9px 47px 20px rgba(0, 0, 0, 0.02)',
    // opacity: '0.03',
    // padding: '3rem 3.5rem 7rem 3.5rem',
    // boxShadow: '2px 9px 47px 20px rgba(0, 0, 0, 0.02)',
    // backgroundColor: 'rgba(30,36,71,.03)',
    maxWidth: '94rem',
    marginTop: '3rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: '3.5rem',
    paddingRight: '3.5rem',
    // [theme.breakpoints.down('md')]: {
    //   maxWidth: '80rem',
    // },
    // [theme.breakpoints.up('xl')]: {
    //   maxWidth: '100%',
    // },
  },
  towerStatus: {
    display: 'flex',
    marginBottom: '40px',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  towerStatusName: {
    '& p': {
      fontFamily: 'Roboto',
      color: theme.palette.primary.main,
      fontSize: '11px',
      letterSpacing: '0.3px',
      opacity: '.3',
    },
    '& h3': {
      fontFamily: 'Roboto',
      marginTop: '3px',
      fontSize: '2rem',
      letterSpacing: '0.2px',
      fontWeight: 500,
      lineHeight: '1',
      objectFit: 'contain',
      color: theme.palette.primary.main,
    },
  },
  towerStatusBtn: {
    '& button': {
      width: '13.3rem',
      '& MuiButton-startIcon': {
        fontSize: '1.3rem',
      },
    },
  },
  towerDetailsCard: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: ({ show }: any) => (show ? 'column' : 'row'),
    // [theme.breakpoints.down('md')]: {
    //   flexDirection: 'column!important' as any,
    // },
    '& .items-wrap': {
      display: 'flex',
      flexDirection: 'column',
      // [theme.breakpoints.down('md')]: {
      //   width: '100%'
      // },
      // [theme.breakpoints.up('xl')]: {
      //   flexDirection: 'row',
      //   flexWrap: 'wrap',
      //   justifyContent: 'space-between',
      //   width: 'calc(50% - 20px)'
      // }
    },
  },
  towerDetailsItem: {
    background: '#fff',
    borderRadius: '6px',
    color: theme.palette.primary.main,
    transition: 'all .3 ease-in',
    '&:not(:first-child)': {
      marginTop: '2.5rem',
    },
    '&:hover': {
      '& h3': {
        opacity: '1',
      },
    },
    '& h3': {
      fontSize: '14px',
      padding: '14px 15px',
      display: 'flex',
      alignItems: 'center',
      opacity: '0.8',
      '& .icon': {
        marginRight: '10px',
      },
    },
    '& ul': {
      '& li': {
        fontSize: '12px',
        borderTop: '1px solid rgba(0, 0, 0, 0.02)',
        padding: '14px 0',
        paddingLeft: '3rem',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        trnasition: 'all .3s ease-in',
        '&:hover': {
          color: '#fff',
          transform: ' scale(1.05)',
          borderRadius: '4px',
          background: theme.palette.secondary.main,
          '& .icon-add,& strong, & p': {
            color: '#fff',
            opacity: '1',
          },
        },
        '& strong': {
          fontSize: '13px',
          color: '#1e2447',
          opacity: '0.8',
          letterSpacing: '1.08',
          marginRight: '8px',
        },
        '& p': {
          color: '#1e2447',
          opacity: '0.5',
        },
        '& .icon-add': {
          color: '#00c48c',
        },
      },
    },
  },
  towerRightHead: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '29px 15px 23px 15px',
    color: theme.palette.primary.main,
    '& h2': {
      fontSize: '2rem',
      letterSpacing: '0.2px',
      fontWeight: 'bold',
    },
    '& p': {
      fontSize: '13px',
      letterSpacing: '0.1px',
      opacity: '0.6',
    },
  },

  towerRighTitle: {},
  logoIcon: {
    boxShadow: '0 0 26px 6px rgba(0, 0, 0, 0.05)',
    background: '#fff',
    width: '44px',
    height: ' 44px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& .icon': {
      fill: '#303030',
    },
  },
  towerBodyBasic: {
    padding: '20px 15px 30px 15px',
    borderTop: '1px solid rgb(30 , 36 , 71 , .1)',
    '&.active': {
      paddingRight: '210px',
    },
    '& h3': {
      color: theme.palette.primary.main,
      fontSize: '15px',
      letterSpacing: '1.07px',
    },
  },
  towerBodyBasicForm: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  formField: {
    marginTop: '16px',
    '& p': {
      fontSize: '13px',
      color: '#000',
      opacity: '0.5',
      lineHeight: '1.23',
    },

    '& .date': {
      width: '100px',
      '&:last-child': {
        marginLeft: '10px',
      },
      '& input': {
        width: '100%',
      },
    },
  },
  formFieldDate: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  towerBodyClose: {
    position: 'absolute',
    top: '23px',
    left: '-34px',
    padding: '6px',
    cursor: 'pointer',
    background: '#fff',
    borderRadius: '4px',
    zIndex: theme.spacing(2),
    boxShadow: ' 0 2px 12px -2px rgba(0, 0, 0, 0.04)',
  },
  towerBodySensor: {
    padding: '20px 15px 30px 15px',
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
  },
  towerBodySensorTable: {
    marginTop: '2rem',
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
      marginTop: '10px',
      width: '220px',
      fontSize: '13px',
      padding: '9px 8px',
      borderRadius: '2px',
      color: 'rgba(0 , 0 , 0 , .7)',
      border: 'solid 1px rgba(30 , 36 , 71 , .15)',
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

const TOWERQUERY = gql`
  query {
    measurement_point @client
  }
`;

const MeasurementBody = () => {
  const [show, setShow] = useState(false);
  const classes = useStyles({ show });
  const [activeSensor, setActiveSensor] = useState<number | null>(null);
  const [activeMeasurementPoint, setActiveMeasurementPoint] = useState<
    number | null
  >(null);

  const { data } = useQuery(TOWERQUERY);

  const capUnderSentence = (text: string) => {
    let wordsArray = text.toLowerCase().split('_');
    let capsArray: string[] = [];
    wordsArray.forEach((word: string) => {
      capsArray.push(word[0].toUpperCase() + word.slice(1));
    });

    return capsArray.join(' ');
  };

  return (
    <div className={classes.towerBody}>
      <div className={classes.towerBodyLeft}>
        <div className={classes.towerHead}>
          <div className={classes.subTowerHeader}>
            <Breadcrumb
              breadcrumbList={[
                { name: 'Project name 2' },
                { name: 'Tower name 1' },
                { name: 'Measurements' },
              ]}
            />
            <ToggleButton inactive="List View" active="Timeline" />
          </div>
        </div>
        <div className={classes.towerDetails}>
          <div className={classes.towerStatus}>
            <div className={classes.towerStatusName}>
              <p>1 Active</p>
              <h3>Measurement Points</h3>
            </div>
            <div className={classes.towerStatusBtn}>
              <Button
                color="secondary"
                variant="contained"
                size="medium"
                startIcon={'+'}
                disableElevation
              >
                Measurement
              </Button>
            </div>
          </div>
          <div className={classes.towerDetailsCard}>
            <div className="items-wrap">
              {data?.measurement_point
                ?.slice(0, 7)
                ?.map((item: any, index: number) => {
                  const splitDetail = item?.name?.split('_');
                  const mDetail = splitDetail?.[1]?.split('m');
                  const mValue = mDetail?.[0];
                  const mDirection = mDetail?.[1];

                  //mount
                  const mountList = item?.mounting_arrangement;
                  const sensorList = item?.sensor;

                  const newMountList =
                    mountList?.map((i: any) => ({
                      ...i,
                      name: `${i?.boom_oem} ${i?.boom_model}`,
                    })) || [];
                  const newSensorList =
                    sensorList?.map((i: any) => ({
                      ...i,
                      name: `${i?.oem}`,
                    })) || [];

                  const sensorTitle = `${capUnderSentence(
                    item?.measurement_type_id
                  )} @ ${mValue} m ${mDirection ? `- ${mDirection}` : ''}`;
                  return (
                    <SensorCard
                      title={sensorTitle}
                      sensorList={[...newMountList, ...newSensorList]}
                      key={sensorTitle}
                      activeMeasurementPoint={
                        activeMeasurementPoint === index + 1 ? true : false
                      }
                      activeSensor={activeSensor}
                      onClick={(sensorIndex: number) => {
                        if (
                          sensorIndex === activeSensor &&
                          activeMeasurementPoint === index + 1
                        ) {
                          setActiveMeasurementPoint(null);
                          setActiveSensor(null);
                        } else {
                          setActiveMeasurementPoint(index + 1);
                          setActiveSensor(sensorIndex);
                        }
                      }}
                    />
                  );
                })}
            </div>
            <div className="items-wrap">
              {data?.measurement_point
                ?.slice(7, 14)
                ?.map((item: any, index: number) => {
                  const splitDetail = item?.name?.split('_');
                  const mDetail = splitDetail?.[1]?.split('m');
                  const mValue = mDetail?.[0];
                  const mDirection = mDetail?.[1];

                  //mount
                  const mountList = item?.mounting_arrangement;
                  const sensorList = item?.sensor;

                  const newMountList =
                    mountList?.map((i: any) => ({
                      ...i,
                      name: `${i?.boom_oem} ${i?.boom_model}`,
                    })) || [];
                  const newSensorList =
                    sensorList?.map((i: any) => ({
                      ...i,
                      name: `${i?.oem}`,
                    })) || [];
                  const sensorTitle = `${capUnderSentence(
                    item?.measurement_type_id
                  )} @ ${mValue} m ${mDirection ? `- ${mDirection}` : ''}`;

                  return (
                    <SensorCard
                      title={sensorTitle}
                      sensorList={[...newMountList, ...newSensorList]}
                      key={sensorTitle}
                      activeMeasurementPoint={
                        activeMeasurementPoint === index + 8 ? true : false
                      }
                      activeSensor={activeSensor}
                      onClick={(sensorIndex: number) => {
                        if (
                          sensorIndex === activeSensor &&
                          activeMeasurementPoint === index + 8
                        ) {
                          setActiveMeasurementPoint(null);
                          setActiveSensor(null);
                        } else {
                          setActiveMeasurementPoint(index + 8);
                          setActiveSensor(sensorIndex);
                        }
                      }}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <SidePreview active={show} onClick={() => setShow(true)} expand>
        <SensorDetail
          data={{}}
          show={show}
          handleClose={(e: any) => {
            e.stopPropagation();
            setShow(false);
          }}
        />
      </SidePreview>
    </div>
  );
};

export default MeasurementBody;
