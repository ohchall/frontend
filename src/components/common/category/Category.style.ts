import { styled } from "styled-components";

export const CategoryBlock = styled.div`
  width: 100%;
  padding: 16px;
`;

export const CategoryBtns = styled.button`
  height: 34px;
  margin: 0 8px 8px 0;
  border: none;
  border-radius: 5px;
  padding: 0 10px;
  background-color: #f3f3f3;
  cursor: pointer;

  &:hover {
    background-color: #ef902a;
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
    margin-bottom: 5px;
  }

  & > p {
    font-size: 13px;
  }

  & > div > span > svg {
    font-size: 20px;
  }
`;

export const TitleContainer = styled.div`
  & > p {
    display: inline-block;
    font-size: 18px;
  }

  & > span {
    display: inline-block;
  }
`;

export const R9dCrew = styled.div`
  width: 100%;
  height: 232px;
  cursor: pointer;

  & ${ImageWrapper} {
    height: 160px;
  }

  & ${Overview} {
    height: 72px;
  }
`;
export const CategoryContents = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
`;

export const SearchMoreBtn = styled.button`
  width: 100%;
  height: 50px;
  border: none;
  background-color: white;
  font-size: 14px;
  margin-top: 10px;
`;