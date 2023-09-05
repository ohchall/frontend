import { styled } from "styled-components";
import { BsPersonFill } from 'react-icons/bs';

export const SearchPageBlock = styled.main`
  width: 100%;
  height: calc(100% - 120px);
  display: flex;
  flex-direction: column;
  align-items: center;
  /* gap: 15px; */
  padding-bottom: 230px;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SearchMoreBtn = styled.button`
  width: 100%;
  height: 50px;
  border: none;
  background-color: white;
  font-size: 14px;
  margin-top: 10px;
`;
export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 24px 16px;

  & input {
    display: block;
    width: calc(100% - 50px);
    height: 50px;
    padding-left: 16px;
    border: 1px solid #666666;
    border-radius: 25px 0 0 25px;
    border-right: none;
  }

  & button {
    display: block;
    width: 50px;
    height: 50px;
    background-color: transparent;
    border: 1px solid #666666;
    border-radius: 0 25px 25px 0;
    border-left: none;
    cursor: pointer;
  }

  & button > svg {
    width: 18px;
    height: 18px;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 259px;
  border-radius: 25px 25px 0 0;
  background-color: #eeeeee;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  & img {
    width: 100%;
  }
`;

export const Overview = styled.div`
  width: 100%;
  height: 70px;
  padding: 14px 16px;
  border-radius: 0 0 25px 25px;
  background-color: #f3f3f3;

  & > div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 6px;
  }

  & > p {
    font-size: 13px;
  }

  & > div > span > svg {
    font-size: 20px;
  }
`;

export const StyledBsPersonFill = styled(BsPersonFill)`
  width: 14px;
  height: 14px;
`;

export const TitleContainer = styled.div`
  display: flex;

  & > p {
    display: block;
    font-size: 18px;

    &:nth-of-type(2) {
      margin-left: 5px;
      display: flex;
      align-items: center;
      background-color: #DADADA;
      padding: 0 8px;
      height: 20px;
      line-height: 20px;
      border-radius: 20px;
      font-size: 12px;

      & > span {
        display: block;
        margin-left: 3px;
      }
    }
  }
`;

export const R9dCrew = styled.div`
  width: 100%;
  padding: 0 16px;
  height: 232px;
  margin-bottom: 12px;
  cursor: pointer;

  & ${ImageWrapper} {
    height: 160px;
  }

  & ${Overview} {
    height: 72px;
  }
`;
