import styled from 'styled-components';
import { FiMoreHorizontal } from 'react-icons/fi';

export const ButtonWrapper = styled.div`
  position: relative;
  width: calc(100% - 32px);
  height: 32px;
  margin: 0 16px;

  & > button {
    width: 36px;
    height: 32px;
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    float: right;
    cursor: pointer;
  }
`;

export const StyledFiMoreHorizontal = styled(FiMoreHorizontal)`
  width: 24px;
  height: 24px;
`;

export const CrewModal = styled.div`
  position: absolute;
  right: 4px;
  top: 32px;
  background-color: #FFFFFF;
  border-radius: 4px;

  & > button {
    display: block;
    background-color: transparent;
    border: none;
    font-size: 12px;
    white-space: nowrap;
    cursor: pointer;

    &:nth-of-type(n+2) {
      margin-top: 4px;
    }
  }
`;

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
  width: calc(100% - 32px);
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
      max-height: 80px;
      overflow: hidden;
    }

    &:nth-of-type(n+2) {
      margin-top: 10px;
    }

    &:last-of-type {

      & > div {
        overflow: auto;

        &::-webkit-scrollbar {
          display:none;
        }
      }
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
