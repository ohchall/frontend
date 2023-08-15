import {
  R9dCrewListBlock,
  R9dCrew,
  ImageWrapper,
  Overview,
  TitleContainer,
} from "./R9dCrewList.style";
import 'swiper/css';
import LikeButton from "../LikeButton";

function R9dCrewList({ data, onClickCrew }) {
  return (
    <R9dCrewListBlock>
      {data && (
        <R9dCrew
          key={data?.data.crewList[0].crewRecruitmentId}
          onClick={() => onClickCrew(data?.data.crewList[0].crewRecruitmentId)}
        >
          <ImageWrapper>
            <img src="" alt="" />
          </ImageWrapper>

          <Overview>
            <div>
              <TitleContainer>
                <p>{data?.data.crewList[0].title}</p>
                <span>15/16</span>
              </TitleContainer>

              <LikeButton />
            </div>

            <p>{data?.data.crewList[0].exercisekind} / 서울 중구</p>
          </Overview>
        </R9dCrew>
      )}
    </R9dCrewListBlock>
  );
}

export default R9dCrewList;
