import { styled } from "styled-components";

export const MainPageSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 60px;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  margin-bottom: 3%;
  & h1 {
    font-size: 20px;
    flex: 1;
    margin-left: 3%;
  }
  & button {
    margin-right: 5%;
  }
`;

export const RecentCrewList = styled.div`
  width: 100%;
  padding: 24px 16px;
`;

export const TopCrewList = styled.div`
  width: 100%;
  padding: 24px 16px;
`;
export const SuggestCrewList = styled.div`
  width: 100%;
  padding: 24px 16px;
`;
