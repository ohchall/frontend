import { 
  PopularCrewListBlock,
  TitleContainer } from './PopularCrewList.style';

function PopularCrewList({
  data,
  onClickCrew
}) {
  return (
    <PopularCrewListBlock>
      {data?.data.crewList.map((item, idx) => (
      <div
        key={item.crewRecruitmentId}
        onClick={() => onClickCrew(item.crewRecruitmentId)}
      >
        <TitleContainer>
          <p>{idx+1}</p>
          <p>{item.title}</p>
        </TitleContainer>

        <p>{item.exercisekind} / 서울 중구</p>
      </div>
      ))}
    </PopularCrewListBlock>
  )
}

export default PopularCrewList