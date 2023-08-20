import { styled } from "styled-components";

export const MainPageSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-bottom: 80px;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  & h1 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 12px;
  }
  & button {
    margin-right: 5%;
  }
`;

export const CrewListContainer = styled.div`
  width: 100%;
  padding: 0 16px;
`;
