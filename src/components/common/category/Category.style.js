import { styled } from 'styled-components';

export const CategoryBlock = styled.div`
  width: 100%;
  padding: 16px;

  & button {
    height: 34px;
    margin: 0 8px 8px 0;
    border: none;
    border-radius: 5px;
    padding: 0 10px;
    background-color: #f3f3f3;
    cursor: pointer;

    &:hover {
      background-color: #ef902a;
    }
  }
`;