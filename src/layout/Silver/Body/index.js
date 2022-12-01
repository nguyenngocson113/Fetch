import React from 'react';
import List from 'components/CardList';
import styled from 'styled-components';
import mockData from './mockData.json';
import device from 'responsive/Device';

const BodyWrapper = styled.div`
  @media ${device.mobileM} {
    margin-top: 240px;
  }
`;

const Body = () => {
  return (
    <BodyWrapper>
      {mockData.data.map((data, index) => {
        return <List key={index} {...data} />;
      })}
    </BodyWrapper>
  );
};

export default Body;
