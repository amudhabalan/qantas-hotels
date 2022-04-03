import React from 'react';
import styled from 'styled-components';

const LogoImage = styled.div`
  margin-bottom: 50px;
`;

const Logo = () => {
  return (
    <LogoImage>
      <img src="/assets/images/qantas-logo.png" alt="Qantas Hotels" />
    </LogoImage>
  );
};

export default Logo;
