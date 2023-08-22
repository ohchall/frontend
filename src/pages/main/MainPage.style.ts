import { styled } from 'styled-components';

export const MainPageBlock = styled.div`
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
