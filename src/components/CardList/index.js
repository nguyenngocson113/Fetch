import React from 'react';
import Card from 'components/Card';
import styled from 'styled-components';

const List = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 24px;
  overflow: auto;
`;
const ListTille = styled.p`
  color: #171725;
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 16px;
`;

const ListWrapper = styled.div`
  padding-left: 24px;
  margin-bottom: 48px;
`;

const ListComponent = ({ items, backgroundImg, title }) => {
  return (
    <ListWrapper>
      <ListTille>{title}</ListTille>
      <List>
        {items.map((data, index) => {
          return <Card key={index} {...data} banner={backgroundImg} />;
        })}
      </List>
    </ListWrapper>
  );
};

export default ListComponent;
