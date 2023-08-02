import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledFooter = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  width: 100%;
  max-width: 1000px;
  height: 60px;
  padding: 0 20px;
  background-color: wheat;
  display: flex;
  align-items: center;
`;

export const StyledLink = styled(Link)`

`;

export const LinkContainer = styled.div`
  display: inline-block;

  & ${StyledLink}:nth-of-type(1) {
    margin-right: 10px;
  }
`;
