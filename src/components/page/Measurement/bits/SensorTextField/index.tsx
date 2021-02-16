import React from 'react';
import styled from 'styled-components';

const SensorTextFieldWrapper = styled.div``;

interface InputFieldProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  className: string;
  suffixIcon?: any;
}

const SensorTextField = ({ className, suffixIcon }: InputFieldProps) => {
  return <SensorTextFieldWrapper></SensorTextFieldWrapper>;
};

export default SensorTextField;
