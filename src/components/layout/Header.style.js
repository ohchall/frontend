import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 80px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InputContainer = styled.div`
  display: inline-block;
  margin-right: 20px;

  & input {
    width: 200px;
    height: 40px;
    margin-right: 10px;
  }

  & button {
    padding: 0 10px;
    height: 40px;
    border: none;
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