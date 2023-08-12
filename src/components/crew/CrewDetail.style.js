import styled from 'styled-components';

export const CrewDetailBlock = styled.div`
  width: 100%;
  padding: 16px;
`;

export const Header = styled.div`
  width: 100%;
  border: 1px solid #5B5B5B;
  border-radius: 10px;
  padding: 16px;
  font-size: 14px;
  margin-bottom: 5px;

  & > div {
    display: flex;

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
  width: 100%;
  height: 200px;
  border-radius: 10px;
  background-color: #f2f2f2;
  margin-bottom: 16px;
`;

export const ButtonWrapper = styled.div`

  & button {
    width: 100%;
    height: 54px;
    border: none;
  }
`;
