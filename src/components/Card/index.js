import React from 'react';
import styled from 'styled-components';
import Coin from '../../assets/Coin';
import Petro from '../../assets/Oil';
import Food from '../../assets/Food';
import Icon from 'components/Icon';
import Button from 'components/Button';

const BannerImg = styled.div`
  display: block;
  width: 199px;
  height: 98px;
  border-radius: 4px 4px 0px 0px;
`;
const CardWraper = styled.div`
  height: 240px;
  width: 200px;
  box-sizing: border-box;
  background: #ffffff;
  border: 1px solid #f1f1f5;
  box-shadow: 0px 12px 18px rgba(23, 23, 37, 0.04);
  border-radius: 4px;
`;

const Body = styled.div`
  padding-left: 16px;
`;
const Title = styled.p`
  color: ${({ isNeedCoin }) => (isNeedCoin ? '#696974' : '#0062ff')};
  font-weight: 600;
`;
const Description = styled.p`
  color: #92929d;
  font-weight: 400;
  letter-spacing: -0.005em;
  margin: 0px;
`;
const ButtonView = styled.p`
  margin: 0px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */
  letter-spacing: -0.5px;
  /* Blue-Dark */
  color: #0062ff;
`;

const Banner_Components = {
  petro: Petro,
  coin: Coin,
  food: Food,
};

const Card = ({ title, description, bannerColor, banner, isNeedCoin }) => {
  const Banner1 = Banner_Components[banner];
  return (
    <CardWraper>
      <BannerImg>
        <Banner1 backgroundColor={bannerColor} />
      </BannerImg>
      <Body>
        <Title isNeedCoin={isNeedCoin}>
          {isNeedCoin && <Icon name="iconCoin" />} {title}
        </Title>
        <Description>{description}</Description>
        {isNeedCoin && (
          <Button style={{ background: 'none', border: 'none', margin: '9px -6px' }}>
            <ButtonView>Insufficient coins</ButtonView>
          </Button>
        )}
      </Body>
    </CardWraper>
  );
};

export default Card;
