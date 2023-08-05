import styled from 'styled-components';

export const StyledCrewDetail = styled.div`
  width: 100%;
`;

export const TitleContainer = styled.div`
  padding: 20px;

  & > div:nth-of-type(-n+2) {
    margin-bottom: 10px;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 430px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f2f2f2;
`;

export const ContentWrapper = styled.div`
  height: 200px;
  padding: 20px;
`;

export const ButtonWrapper = styled.div`
  height: 60px;
  line-height: 60px;
  padding: 0 20px;

  & button {
    height: 40px;
    padding: 0 16px;
    border: none;
  }
`;

export const MapWrapper = styled.div`
  width: 100%;
  height: 430px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f2f2f2;
`;