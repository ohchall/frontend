import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const Footersection = styled.footer`
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0px;
  background-color: wheat;
  width: 430px;
  @media screen and (max-width: 1000px) {
    width: 430px;
    position: fixed;
  }
`;
export const StyledLink = styled(Link)`

`;

export const LinkContainer = styled.div`
  display: inline-block;

  & ${StyledLink}:nth-of-type(1) {
    margin-right: 10px;
  }
`;
