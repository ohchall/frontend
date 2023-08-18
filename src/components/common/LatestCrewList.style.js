import styled from 'styled-components';

export const ImageWrapper = styled.div`
  width: 100%;
  height: 259px;
  display: flex;
  justify-content: center;
  border-radius: 25px 25px 0 0;
  background-color: #EEEEEE;
  overflow: hidden;

  & > img {
    height: 100%;
  }
`;

export const Overview = styled.div`
  width: 100%;
  height: 70px;
  padding: 14px 16px;
  border-radius: 0 0 25px 25px;
  background-color: #f3f3f3;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 6px;
  }

  & > p {
    font-size: 13px;
  }

  & > div > span > svg {
    font-size: 20px;
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
