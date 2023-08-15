// import {
//   PopularCrewListBlock,
//   TitleContainer } from './PopularCrewList.style';
import styled from "styled-components";
function PopularCrewList({ data, onClickCrew }) {
  return (
    <PopularCrewListBlock>
      {/* {data?.data.map((item, idx) => ( */}
      {data?.data.crewList.map((item, idx) => (
        <div
          key={item.crewRecruitmentId}
          onClick={() => onClickCrew(item.crewRecruitmentId)}
          style={{ backgroundColor: `rgba(186, 242, 255, ${1 - idx * 0.1})` }}
        >
          <TitleContainer>
            <p>{idx + 1}</p>
            <p>{item.title}</p>
          </TitleContainer>

          <p>{item.exercisekind} / 서울 중구</p>
        </div>
      ))}
    </PopularCrewListBlock>
  );
}

export default PopularCrewList;

const TitleContainer = styled.div`
  & > p {
    display: inline-block;
    font-size: 18px;
  }

  & > span {
    display: inline-block;
  }
`;

const PopularCrewListBlock = styled.div`
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    margin-bottom: 8px;
    padding: 0 12px;
    border-radius: 15px;
    cursor: pointer;
  }

  & > div > ${TitleContainer} > p:first-child {
    width: 30px;
    margin-right: 10px;
    text-align: center;
    border-radius: 50%;
    background-color: white;
  }

  & > div > ${TitleContainer} > p {
    height: 30px;
    line-height: 30px;
    display: inline-block;
    font-size: 18px;
  }
`;
