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
    background-color: #EAEAEA;
    border-radius: 15px;
    cursor: pointer;
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
