import React from 'react';
import { PlusGreenIcon } from 'src/components/icons';
import styled from 'styled-components';

const SensorHeaderWrapper = styled.div`
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
  p {
    opacity: 0.7;
    font-family: 'Roboto';
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.08;
    letter-spacing: normal;
    color: #1e2447;
    margin-left: 8px;
  }
`;

interface SensorHeaderProps {
  title?: string;
  iconTitle?: string;
}
const SensorHeader = ({ title, iconTitle }: SensorHeaderProps) => {
  return (
    <SensorHeaderWrapper>
      <h2>{title}</h2>
      <span>
        <PlusGreenIcon /> {iconTitle && <p>{iconTitle}</p>}
      </span>
    </SensorHeaderWrapper>
  );
};

export default SensorHeader;
