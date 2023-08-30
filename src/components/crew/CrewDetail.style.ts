import styled from 'styled-components';

export const ImageWrapper = styled.div`
  width: 100%;
  height: 310px;
  display: flex;
  justify-content: center;
  background-color: #EEEEEE;
  overflow: hidden;

  & > img {
    height: 100%;
  }
`;

export const CrewDetailBlock = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  width: calc(100 - 32px);
  border: 1px solid #5B5B5B;
  border-radius: 10px;
  padding: 16px;
  font-size: 14px;
  margin: 16px;

  & > div {
    display: flex;

    & > p {
      white-space: nowrap;
    }

    & > div {
      margin-left: 5px;
      white-space: pre-line;
    }

    &:nth-of-type(-n+3) {
      margin-bottom: 10px;
    }
  }
`;

export const MapWrapper = styled.div`
  width: calc(100% - 32px);
  height: 200px;
  border-radius: 10px;
  background-color: #f2f2f2;
  margin: 0 16px 20px;
  overflow: hidden;
`;

export const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 60px;
  width: 100%;
  z-index: 9;

  & > button {
    width: 100%;
    height: 54px;
    font-size: 16px;
    color: #FFFFFF;
    background-color: #111111;
    border: none;
  }
`;
