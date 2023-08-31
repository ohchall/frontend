import {
  ImageWrapper,
  CrewDetailBlock,
  Header,
  MapWrapper } from './CrewDetail.style';
import { useParams } from 'react-router-dom';
import {
  useQuery } from '@tanstack/react-query';
import { getCrew } from '../../api/CrewApi';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useEffect, useState, ReactNode } from 'react';
import MyProfile from '../../components/common/myprofile/MyProfile';
import { CheckuserInfo } from '../../api/AuthApi';
import Comment from './Comment';
import { useDispatch } from 'react-redux';

function CrewDetail() {
  const dispatch = useDispatch();
  const params = useParams();
  const access = localStorage.getItem('Access');
  const refresh = localStorage.getItem('Refresh');
  const [loggedin, setLoggedin] = useState(false);

  useEffect(() => {
    // console.log('triggered');
    const getUserInfo = async () => {
      const isUserLoggedIn = await CheckuserInfo(dispatch);
      setLoggedin(isUserLoggedIn);
    };
    if (access && refresh) {
      getUserInfo();
    }
  }, [access, refresh, dispatch]);

  // console.log(loggedin);

  const { kakao } = window;
  const [coordinate, setCoordinate] = useState({
    lat: 33.55635,
    lng: 126.795841,
  });

  const {
    data: crew,
    isLoading,
    error: queryError,
  } = useQuery(['crew', params.id], () => getCrew(params.id));

  useEffect(() => {
    const geocoder = new kakao.maps.services.Geocoder();
    const address = crew?.data.location ?? '제주특별자치도 제주시 첨단로 242';

    geocoder.addressSearch(address, function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        const coords = new kakao.maps.LatLng(
          Number(result[0].y),
          Number(result[0].x)
        );

        // console.log(coords);

        setCoordinate((prevState) => {
          return {
            ...prevState,
            lat: coords.getLat(),
            lng: coords.getLng(),
          };
        });
      }
    });
  }, [
    crew?.data.location,
    kakao.maps.LatLng,
    kakao.maps.services.Geocoder,
    kakao.maps.services.Status.OK,
  ]);

  // useEffect(() => {
  //   console.log(coordinate);
  // }, [coordinate]);

  let errorMessage: ReactNode = null;
  if (queryError) {
    const error = queryError as Error;
    errorMessage = 'An error has occurred: ' + error.message;
  }

  return (
    <>
      {loggedin ? <MyProfile /> : null}
      <CrewDetailBlock>
        {isLoading && 'Loading...'}
        {errorMessage}
        {/* {error && 'An error has occurred: ' + error.message} */}

        <ImageWrapper>
          <img
            src={
              crew?.data.image?.length !== 0 &&
              crew?.data.image?.length !== undefined
                ? crew?.data.image[0]
                : ''
            }
            alt=''
          />
        </ImageWrapper>

        <Header>
          <div>
            <p>제목 |</p>
            <div>{crew?.data.title.length > 13 ? crew?.data.title.substring(0, 12) : crew?.data.title}</div>
          </div>

          <div>
            <p>크루 |</p>
            <div>{crew?.data.crewName}</div>
          </div>

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
          <Map center={coordinate} style={{ width: '100%', height: '100%' }}>
            <MapMarker position={coordinate} />
          </Map>
        </MapWrapper>

        <Comment crewRecruitmentId={params.id} />
      </CrewDetailBlock>
    </>
  );
}

export default CrewDetail;
