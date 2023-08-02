import { Link } from 'react-router-dom';
import styled from 'styled-components';

// export const StyledFooter = styled.div`
//   position: fixed;
//   bottom: 0;
//   left: 50%;
//   transform: translate(-50%, 0);
//   width: 100%;
//   max-width: 1000px;
//   height: 60px;
//   padding: 0 20px;
//   background-color: wheat;
//   display: flex;
//   align-items: center;
//   @media screen and (max-width: 1000px) {
//     width: 500px;
//     position: absolute;
//   }
// `;
export const Footersection = styled.footer`
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0px;
  background-color: wheat;
  width: 1000px;
  @media screen and (max-width: 1000px) {
    width: 500px;
    position: absolute;
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
