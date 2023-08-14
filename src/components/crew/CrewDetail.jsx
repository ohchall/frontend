import {
  CrewDetailBlock,
  Header,
  MapWrapper,
  ButtonWrapper } from './CrewDetail.style';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getCrew } from '../../api/CrewApi';

function CrewDetail() {
  const params = useParams();
  const {
    data: crew,
    isLoading,
    error
  } = useQuery(['crew', params.id], () => getCrew(params.id));

  return (
    <CrewDetailBlock>
      { isLoading && 'Loading...' }
      { error && 'An error has occurred: ' + error.message }

      <Header>
        <div>
          <p>일정 |</p>
          <div>{crew?.data.exercisedate}</div>
        </div>

        <div>
          <p>인원 |</p>
          <div>{crew?.data.totalNumber}</div>
        </div>

        <div>
          <p>장소 |</p>
          <div>{crew?.data.location}</div>
        </div>

        <div>
          <p>내용 |</p>
          <div>{crew?.data.content}</div>
        </div>
      </Header>

      <MapWrapper />

      <ButtonWrapper>
        <button>Join</button>
      </ButtonWrapper>
    </CrewDetailBlock>
  );
};

export default CrewDetail;