import { makeStyles } from '@material-ui/core';
import { DropdownSelectIcon, CalendarIcon } from 'src/components/icons';
import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
  towerBodyBasic: {
    padding: '20px 15px 30px 15px',
    borderTop: '1px solid rgb(30 , 36 , 71 , .1)',
    '&.active': {
      paddingRight: '210px',
    },
    '& h3': {
      color: theme.palette.primary.main,
      fontSize: '15px',
      fontWeight: 500,
      lineHeight: '1.07',
      letterSpacing: 'normal',
      marginBottom: '1.4rem',
    },
  },
  inputField: {
    '& > not:first-child': {
      marginTop: '16px',
    },
  },
}));

const FieldSet = styled.fieldset`
  width: min-content;
  position: relative;
  label {
    opacity: 0.5;
    font-family: 'Roboto';
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.23;
    letter-spacing: normal;
    color: #000000;
  }
  input,
  select {
    margin-top: 5px;
    width: 210px;
    height: 24px;
    padding: 4px 0px 4px 8px;
    border-radius: 2px;
    background-color: rgba(30, 36, 71, 0.06);
    font-family: 'Roboto';
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    color: #000000;
  }
  input[type='date'] {
    padding: '3px 0px 5px 8px !important';
  }
  input[type='date']::-webkit-inner-spin-button,
  input[type='date']::-webkit-calendar-picker-indicator {
    /* display: none;
    -webkit-appearance: none; */
  }
  select {
    outline: none;
    border: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
  }

  .select-icon {
    position: absolute;
    right: 10px;
    top: 28px;
  }

  .input-suffix-icon {
    position: absolute;
    right: 10px;
    top: 25px;
  }
`;

interface InputFieldProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  className: string;
  suffixIcon?: any;
}
const InputField = ({
  label,
  className,
  suffixIcon,
  ...rest
}: InputFieldProps) => {
  return (
    <FieldSet className={className}>
      <label>{label}</label>
      <input {...rest} />
      {/* {suffixIcon && <span className="input-suffix-icon"> {suffixIcon}</span>} */}
    </FieldSet>
  );
};

interface SelectFieldProps
  extends React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  label: string;
  className: string;
  children: React.ReactNode | React.ReactNodeArray;
}
const SelectField = ({
  label,
  className,
  children,
  ...rest
}: SelectFieldProps) => {
  return (
    <FieldSet className={className}>
      <label>{label}</label>
      <select {...rest}>{children}</select>
      <DropdownSelectIcon className="select-icon" />
    </FieldSet>
  );
};

const SensorBasicDetailWrapper = styled.div<any>`
  padding: 20px 15px 30px 15px;
  border-top: 1px solid rgb(30, 36, 71, 0.1);
  h3 {
    color: var(--primary-main);
    font-family: 'Roboto';
    font-size: 15px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.07;
    letter-spacing: normal;
  }
  .form-field-list {
    display: flex;
    flex-wrap: wrap;
  }
  .form-field-row {
    display: flex;
    width: 210px;
    justify-content: space-between;
    .input-field {
      input {
        width: 100px;
      }
    }
  }
  .input-field {
    margin-bottom: 16px;
  }
  ${({ show }) =>
    show &&
    `
    padding-left: 30px;
    .form-field-right {
        margin-left: 25px;
    }

  }
    `}
`;

interface SensorBasicProps {
  show?: boolean;
}

const SensorBasicDetail = ({ show }: SensorBasicProps) => {
  const classes = useStyles();
  return (
    <SensorBasicDetailWrapper className={classes.towerBodyBasic} show={show}>
      <h3>Basic Details</h3>
      <div className="form-field-list">
        <div>
          <InputField
            className="input-field"
            label="OEM"
            defaultValue="12332442"
          />
          <InputField
            className="input-field"
            label="Sensor Model"
            defaultValue="12332442"
          />
        </div>
        <div className="form-field-right">
          <SelectField
            className="input-field"
            label="Sensor Type"
            defaultValue="12332442"
          >
            <option>WindSpeed</option>
          </SelectField>
          <div className="form-field-row">
            <InputField
              type="date"
              className="input-field"
              label="Date From"
              defaultValue="12332442"
              placeholder="dd-mm-yyyy"
              suffixIcon={<CalendarIcon />}
            />
            <InputField
              type="date"
              className="input-field"
              label="Date To"
              defaultValue="10-10-2018"
              placeholder="dd-mm-yyyy"
              min="1997-01-01"
              max="2030-12-31"
              suffixIcon={<CalendarIcon />}
            />
          </div>
        </div>
      </div>
    </SensorBasicDetailWrapper>
  );
};

export default SensorBasicDetail;
