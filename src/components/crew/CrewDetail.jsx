import {
  CrewDetailBlock,
  Header,
  MapWrapper,
  ButtonWrapper } from './CrewDetail.style';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getCrew } from "../../api/CrewApi";
import { Map, MapMarker } from 'react-kakao-maps-sdk';

function CrewDetail() {
  const params = useParams();
  const {
    data: crew,
    isLoading,
    error,
  } = useQuery(["crew", params.id], () => getCrew(params.id));

  return (
    <CrewDetailBlock>
      {isLoading && "Loading..."}
      {error && "An error has occurred: " + error.message}

      <Header>
        <div>
          <p>일정 |</p>
          <div>{crew?.data.exerciseDate}</div>
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

      <MapWrapper>
        <Map
          center={{ lat: 33.5563, lng: 126.79581 }}
          style={{ width: '100%', height: '100%' }}
        >
          <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
            <div style={{color:'#000'}}>location</div>
          </MapMarker>
        </Map>
      </MapWrapper>

      <ButtonWrapper>
        <button>Join</button>
      </ButtonWrapper>
    </CrewDetailBlock>
  );
};

export default CrewDetail;