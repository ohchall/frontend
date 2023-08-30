import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 60px;
  width: 100%;
  height: 60px;
  z-index: 9;

  & > button {
    width: 100%;
    height: 100%;
    font-size: 16px;
    color: #FFFFFF;
    background-color: #111111;
    border: none;
    cursor: pointer;
  }

  @media (max-width: 430px) {
    position: fixed;
  }
`;
