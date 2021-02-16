import React from 'react';
import styled from 'styled-components';

const ComingSoonWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    color: #111b30;
    font-size: 4rem;
  }
`;

const ComingSoon = () => {
  return (
    <ComingSoonWrapper>
      <h1>Coming Soon</h1>
    </ComingSoonWrapper>
  );
};

export default ComingSoon;
