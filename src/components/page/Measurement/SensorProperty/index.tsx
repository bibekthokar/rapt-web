import React from 'react';
import { PlusGreenIcon } from 'src/components/icons';
import styled from 'styled-components';
import SensorHeader from '../bits/SensorHeader';

const SensorConfigurationWrapper = styled.div`
  padding: 20px 15px 30px 15px;
  border-top: 1px solid rgb(30, 36, 71, 0.1);

  .sensor-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 18px;

    h2 {
      font-family: 'Roboto';
      font-size: 15px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.07;
      letter-spacing: normal;
      color: #1e2447;
    }
  }
  .sensor-list {
    display: flex;
    flex-direction: column;

    &__single {
      width: 220px;
      height: 34px;
      padding: 9px 0px 9px 8px;
      border-radius: 2px;
      border: 1px solid rgba(30, 36, 71, 0.15);
      font-family: 'Roboto';
      font-size: 13px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.23;
      letter-spacing: normal;
      color: #000000;
      opacity: 0.7;
    }
    &__single:not(:first-child) {
      margin-top: 10px;
    }
  }
`;

type SensorType =
  | 'Sensor Configuration'
  | 'Mounting Arrangement'
  | 'Calibration';
interface Props {
  title?: SensorType;
}

const SensorProperty = ({ title }: Props) => {
  const sensorConfigurationList = ['Sensor Config 2', 'Sensor Config 1'];
  const mountingArrangementList = [
    'Arrangement 3 | 60 Deg - N',
    'Arrangement 2 | 30 Deg - W',
    'Arrangement 1 | 30 Deg - E',
  ];
  const calibrationList = ['Sensor Calibration 1', 'Sensor Calibration 2'];

  const sensorList: any = (type: SensorType) => {
    switch (type) {
      case 'Mounting Arrangement':
        return mountingArrangementList;
      case 'Sensor Configuration':
        return sensorConfigurationList;
      case 'Calibration':
        return calibrationList;
      default:
        return [];
    }
  };

  return (
    <SensorConfigurationWrapper>
      <SensorHeader title={title} />
      <div className="sensor-list">
        {sensorList(title as any).map((i: string, index: number) => (
          <div className="sensor-list__single">{i}</div>
        ))}
      </div>
    </SensorConfigurationWrapper>
  );
};

export default SensorProperty;
