import styled from 'styled-components';

export const StyledCrewDetail = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 60px auto;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 20px;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  max-width: 960px;
  height: 540px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f2f2f2;
`;

export const ContentWrapper = styled.div`
  height: 360px;
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
  max-width: 960px;
  height: 320px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f2f2f2;
`;