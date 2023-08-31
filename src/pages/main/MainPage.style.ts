import { styled } from 'styled-components';

export const MainPageBlock = styled.div`
  width: 100%;
  height: calc(100% - 60px);
  overflow: auto;
  margin: 0 auto;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
