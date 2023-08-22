import { styled } from "styled-components";

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
