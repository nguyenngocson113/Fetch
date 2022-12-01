import React from 'react';
import styled from 'styled-components';
import background from 'assets/background.png';
import CardDetail from './CardDetail';
import Button from 'components/Button';
import Icon from 'components/Icon';

const HeaderTitle = styled.span`
  display: block;
  color: #ffffff;
  font-weight: 600;
  font-size: 32px;
  margin: 16px 0px 8px 0px;
`;

const HeaderDescription = styled.span`
  font-weight: 400;
  font-size: 16px;
  letter-spacing: -0.005em;
  color: #b5b5be;
`;

const HeaderWrapper = styled.div`
  height: 428px;
  display: block;
  padding: 20px 24px;
  background-color: black;
  position: relative;
`;

const CardWrapper = styled.div`
  background-color: #ffffff;
  position: absolute;
  width: 343px;
  height: 416px;
  top: 252px;
  box-sizing: border-box;
  background-image: url(${background});
  border: 1px solid #fafafb;
  box-shadow: 0px 12px 18px rgba(23, 23, 37, 0.04);
  border-radius: 8px;
`;

const Header = ({ title, description }) => {
  return (
    <HeaderWrapper>
      <Button
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          background: '#fff',
          border: 'none',
          margin: '30px 0px 0px 0px',
        }}
      >
        <Icon name="vector1" size="6px"></Icon>
      </Button>
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderDescription>{description}</HeaderDescription>
      <CardWrapper>
        <CardDetail></CardDetail>
      </CardWrapper>
    </HeaderWrapper>
  );
};

export default Header;
