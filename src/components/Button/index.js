import styled from 'styled-components';

const ButtonWrapper = styled.button`
  background: ${({ background }) => background};
  border-radius: ${({ borderRadius }) => borderRadius};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  border: ${({ border }) => border};
  font-family: 'Font Name';
`;

const Button = ({ style, children, props }) => {
  return <ButtonWrapper {...style}>{children}</ButtonWrapper>;
};

export default Button;
