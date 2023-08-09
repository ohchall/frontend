import styled from 'styled-components';

export const CrewBlock = styled.div`
  width: 100%;
  height: 100%;
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

export const CrewListTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 12px;
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

export const CrewList = styled.div`
  display: flex;
  overflow: auto;

  & > div {
    margin-right: 12px;
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

export const PopularCrewList = styled.div`
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    margin-bottom: 8px;
    padding: 0 12px;
    background-color: #EAEAEA;
  }

  & > div > ${TitleContainer} > p:first-child {
    width: 30px;
    margin-right: 10px;
    text-align: center;
    border-radius: 50%;
    background-color: #F3F3F3;
  }

  & > div > ${TitleContainer} > p {
    height: 30px;
    line-height: 30px;
    display: inline-block;
    font-size: 18px;
  }
`;

export const RecommendedCrewList = styled.div`
  display: flex;
  overflow: auto;

  & > div {
    margin-right: 12px;
  }

  & > div > ${ImageWrapper} {
    width: 343px;
  }

  & > div > ${Overview} {
    width: 343px;
  }
`;