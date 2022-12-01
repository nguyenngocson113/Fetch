import styled from 'styled-components';

const ICONS = {
  vector: '/assets/Vector.png',
  iconCoin: 'assets/iconCoin.png',
  vector1: '/assets/Vector1.png',
  home: '/assets/Home.png',
  bell: '/assets/bell.png',
  box: '/assets/box.png',
  person: '/assets/person.png',
};

const IconWrapper = styled.img`
  width: ${({ size }) => size};
`;
const Icon = (props) => {
  return <IconWrapper {...props} src={`${ICONS[props.name]}`} />;
};
export default Icon;
