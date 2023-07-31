import styled from 'styled-components';

export const StyledHeader = styled.div`
  width: 100%;
  height: 80px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  & > button:nth-of-type(1) {
    margin-right: 10px;
  }
`;