import { CircularProgress, CircularProgressProps } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const Progress = styled(CircularProgress)`
  position: absolute;
`;

const Spinner = (props: CircularProgressProps) => {
  return <Progress size={props.size || 22} {...props} />;
};

export default Spinner;
