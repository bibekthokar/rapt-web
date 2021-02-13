import React, { Fragment } from 'react';
import { BreadcrumbArrowIcon } from 'src/components/icons';
import styled from 'styled-components';

const BreadcrumbWrapper = styled.div`
  display: flex;
  align-items: center;
  p {
    font-size: 1.3rem;
    font-weight: 300;
    font-family: 'Roboto';
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: normal;
    color: #1e2447;
    opacity: 0.6;
    cursor: pointer;
  }
  .active-breadcrumb {
    font-weight: normal;
  }

  svg {
    margin-left: 5px;
    margin-right: 5px;
  }
`;

interface Props {
  breadcrumbList: { name: string; link?: string }[];
}

const Breadcrumb = ({ breadcrumbList }: Props) => {
  return (
    <BreadcrumbWrapper>
      {breadcrumbList.map((i, index) => (
        <Fragment key={i.name}>
          <p
            className={
              breadcrumbList?.length - 1 === index ? 'active-breadcrumb' : ''
            }
          >
            {i.name}
          </p>
          {breadcrumbList?.length - 1 !== index && <BreadcrumbArrowIcon />}
        </Fragment>
      ))}
    </BreadcrumbWrapper>
  );
};

export default Breadcrumb;
