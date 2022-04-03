import React from 'react';
import styled from 'styled-components';

const ResultsCount = ({ hotels }) => {
  return (
    <h2>
      {hotels !== null ? hotels.length : 0}
      <Italics> hotels in</Italics> Sydney.
    </h2>
  );
};

const Italics = styled.span`
  font-weight: 100;
  font-style: italic;
`;

export default ResultsCount;
