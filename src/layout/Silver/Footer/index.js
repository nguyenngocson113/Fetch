import Icon from 'components/Icon';
import device from 'responsive/Device';
import styled from 'styled-components';

const FooterWrraper = styled.div`
  display: flex;
  border-top: 1px;
  border-top-width: 2px;
  border-top-style: outset;
  border-top-color: #e2e2ea;
  @media ${device.mobileM} {
    padding: 20px 0px;
    justify-content: space-around;
    column-gap: 24px;
  }
`;
const Footer = () => {
  return (
    <FooterWrraper>
      <div>
        <Icon name="home" size="32px" />
      </div>
      <div>
        <Icon name="bell" size="32px" />
      </div>
      <div>
        <Icon name="box" size="32px" />
      </div>
      <div>
        <Icon name="person" size="32px" />
      </div>
    </FooterWrraper>
  );
};

export default Footer;
