import styled from 'styled-components';

export const CrewBlock = styled.div`
  width: 100%;
  height: 100%;
`;

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 24px 16px;

  & input {
    display: block;
    width: calc(100% - 50px);
    height: 50px;
    padding-left: 16px;
    border: 1px solid #666666;
    border-radius: 25px 0 0 25px;
    border-right: none;
  }

  & button {
    display: block;
    width: 50px;
    height: 50px;
    background-color: transparent;
    border: 1px solid #666666;
    border-radius: 0 25px 25px 0;
    border-left: none;
    cursor: pointer;
  }

  & button > svg {
    width: 18px;
    height: 18px;
  }
`;

export const CategoryContainer = styled.div`
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
  }
`;

export const CrewListContainer = styled.div`
  width: 100%;
  padding: 24px 16px;
`;

export const CrewListTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 12px;
`;
