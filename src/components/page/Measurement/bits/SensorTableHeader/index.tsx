import styled from 'styled-components';

const SensorTableHeaderWrapper = styled.thead`
  border-bottom: solid 1px rgba(30, 36, 71, 0.1);
  padding-bottom: 3px;
  tr {
    th {
      height: 30px;
      padding-top: 7px;
      padding-bottom: 7px;
      opacity: 0.3;
      font-family: 'Roboto';
      font-size: 12px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #000000;
    }
    th:nth-child(1) {
      width: 128px;
      text-align: left;
    }
    th:nth-child(2) {
      width: 75px;
    }
    th:nth-child(3) {
      width: 75px;
    }
    th:nth-child(4) {
      width: 75px;
    }
    th:nth-child(5) {
      width: 110px;
    }
    th:nth-child(6) {
      width: 70px;
    }
    th:nth-child(6) {
      width: 112px;
    }
  }
`;

interface Props {
  titleList?: string[];
}

const SensorTableHeader = ({ titleList }: Props) => {
  return (
    <SensorTableHeaderWrapper>
      <tr>
        {titleList?.map((i) => (
          <th>{i}</th>
        ))}
      </tr>
    </SensorTableHeaderWrapper>
  );
};

export default SensorTableHeader;
