import styled from 'styled-components';

export const CrewBlock = styled.div`
`;

export const InputContainer = styled.div`
  width: 100%;
  padding: 24px 16px;

  & input {
    width: calc(100% - 50px);
    height: 50px;
  }

  & button {
    width: 50px;
    height: 50px;
  }
`;

export const CategoryContainer = styled.div`
  width: 100%;
  padding: 0 16px;

  & button {
    height: 34px;
    margin: 0 8px 8px 0;
    border: none;
    border-radius: 5px;
    padding: 0 10px;
  }
`;

export const CrewListContainer = styled.div`
  width: 100%;
  padding: 24px 16px;
`;

export const CrewListTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;

  & p {
    font-size: 20px;
    font-weight: bold;
  }

  & button {
    background-color: transparent;
    border: none;
  }
`;

export const ImageWrapper = styled.div`
  width: 227px;
  height: 211px;
  background-color: #EEEEEE;
`;

export const Overview = styled.div`
  width: 227px;
  height: 70px;
  padding: 14px 16px;
  background-color: #D9D9D9;

  & > div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  & > p {
    font-size: 13px;
  }
`;

export const TitleContainer = styled.div`
  & > p {
    display: inline-block;
    font-size: 18px;
  }

  & > span {
    display: inline-block;
  }
`;

export const CrewList = styled.div`
  display: flex;
  overflow: auto;

  & > div {
    margin-right: 12px;
  }
`