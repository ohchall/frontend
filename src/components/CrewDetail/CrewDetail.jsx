import {
  StyledCrewDetail,
  TitleContainer,
  ImageWrapper,
  ContentWrapper,
  ButtonWrapper,
  MapWrapper
} from './CrewDetail.style';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getCrew } from '../../api/CrewDetailApi';

function CrewDetail() {
  const params = useParams();
  const {
    data: crew,
    isLoading,
    error
  } = useQuery(['crew', params.id], () => getCrew(params.id));

  return (
    <StyledCrewDetail>
      { isLoading && 'Loading...' }
      { error && 'An error has occurred: ' + error.message }

      <TitleContainer>
        <div>
          {crew?.data.title}
        </div>

        <div>
          작성자: {crew?.data.nickname}
        </div>

        <div>
          운동날짜: {crew?.data.exercisedate}
        </div>
      </TitleContainer>

      <ImageWrapper>
        Crew Detail Image
      </ImageWrapper>

      <ContentWrapper>
        {crew?.data.content}
      </ContentWrapper>

      <ButtonWrapper>
        <button>Join</button>
      </ButtonWrapper>

      <MapWrapper>
        Crew Detail Map
      </MapWrapper>
    </StyledCrewDetail>
  );
};

export default CrewDetail;