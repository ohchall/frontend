import styled from 'styled-components';

export const StyledHeader = styled.div`
  /* position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0); */
  width: 100%;
  max-width: 1000px;
  height: 60px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: wheat;
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
