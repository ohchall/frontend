import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`

`;

export const HeaderBlock = styled.div`
  width: 100%;
  height: 60px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  & ${StyledLink} {
    margin-right: 10px;
  }
`;
