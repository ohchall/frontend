import styled from 'styled-components';

export const TitleContainer = styled.div`
  & > p {
    display: inline-block;
    font-size: 18px;
  }

  & > span {
    display: inline-block;
  }
`;

export const PopularCrewListBlock = styled.div`
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    margin-bottom: 8px;
    padding: 0 12px;
    background-color: #BAF2FF;
    border-radius: 15px;
    cursor: pointer;
  }

  & > div:nth-of-type(2) {
    background-color: #C8F5FF;
  }

  & > div:nth-of-type(3) {
    background-color: #D6F7FF;
  }

  & > div:nth-of-type(4) {
    background-color: #E3FAFF;
  }

  & > div:nth-of-type(5) {
    background-color: #F1FCFF;
  }

  & > div > ${TitleContainer} > p:first-child {
    width: 30px;
    margin-right: 10px;
    text-align: center;
    border-radius: 50%;
    background-color: #FFFFFF;
  }

  & > div > ${TitleContainer} > p {
    height: 30px;
    line-height: 30px;
    display: inline-block;
    font-size: 18px;
  }
`;
