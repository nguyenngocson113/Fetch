import Button from 'components/Button';
import Icon from 'components/Icon';
import React from 'react';
import device from 'responsive/Device';
import styled from 'styled-components';

const Status = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: #b5b5be;
  @media ${device.mobileM} {
    margin: 24px 24px 8px 24px;
  }
`;
const Coin = styled.p`
  font-weight: 400;
  font-size: 48px;
  line-height: 56px;
  letter-spacing: -0.5px;
  color: #171725;

  @media ${device.mobileM} {
    margin: 0px 0px 33px 24px;
  }
`;
const Description = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.005em;
  color: #92929d;
  margin: 12px 24px;
  @media ${device.mobileM} {
    margin: 24px 24px 8px 24px;
  }
`;

const Progress = styled.progress`
  width: 100%;
`;
const ProgressWrapper = styled.div`
  padding: 0px 24px 12px 24px;
`;

const ButtonCoupons = styled.p`
  font-weight: 600;
  font-size: 18px;
  color: #fff;
`;
const ButtonView = styled.p`
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */
  letter-spacing: -0.005em;
  /* Blue-Dark */
  color: #0062ff;
`;

const DateUpdate = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */

  text-align: center;
  letter-spacing: -0.5px;

  /* Grey 05 */

  color: #b5b5be;
`;

const CardDetail = () => {
  return (
    <div>
      <Status>Available Coin balance</Status>
      <Coin>340</Coin>
      <ProgressWrapper>
        <Progress id="coin" value="72" max="100">
          32%
        </Progress>
      </ProgressWrapper>
      <Description>
        You have paid rental fee for $1,200. Pay more $800 to achieve Gold Tier.
      </Description>
      <Button style={{ background: 'none', border: 'none', margin: '0px 24px' }}>
        <ButtonView>
          View tier benefits <Icon size="6px" name="vector" />
        </ButtonView>
      </Button>
      <Button
        style={{
          background: '#171725',
          borderRadius: '4px',
          width: '295px',
          height: '60px',
          margin: '0px 24px',
          border: 'none',
        }}
      >
        <ButtonCoupons>My Coupons</ButtonCoupons>
      </Button>
      <DateUpdate>Updated : 02/11/2021</DateUpdate>
    </div>
  );
};

export default CardDetail;
