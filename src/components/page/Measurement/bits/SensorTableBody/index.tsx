import styled from 'styled-components';

const SensorTableHeaderWrapper = styled.tbody`
  border-bottom: solid 1px rgba(30, 36, 71, 0.1);
  padding-bottom: 3px;
  tr {
    td {
      font-family: 'Roboto';
      font-size: 12px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      text-align: center;
      input {
        width: 100%;
        height: 24px;
        text-align: center;
        background-color: rgba(30, 36, 71, 0.06);
        border-radius: 2px;
        padding-top: 4px;
        padding-bottom: 4px;
        font-family: 'Roboto';
        font-size: 12px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #000000;
      }
    }
    td:nth-child(1) {
      text-align: left;
      input {
        width: 123px;
        text-align: left;
        padding-left: 5px;
      }
    }
    td:nth-child(2) {
      input {
        width: 65px;
      }
    }
    td:nth-child(3) {
      input {
        width: 65px;
      }
    }
    td:nth-child(4) {
      input {
        width: 65px;
      }
    }
    td:nth-child(5) {
      input {
        width: 100px;
      }
    }
    td:nth-child(6) {
      input {
        width: 60px;
      }
    }
    td:nth-child(7) {
      input {
        width: 107px;
      }
    }
  }
`;

interface Props {
  dataList?: string[];
}

const SensorTableBody = ({ dataList }: Props) => {
  return (
    <SensorTableHeaderWrapper>
      <tr>
        {dataList?.map((i) => (
          <td>
            <input type="text" value={i} />
          </td>
        ))}
      </tr>
    </SensorTableHeaderWrapper>
  );
};

export default SensorTableBody;
