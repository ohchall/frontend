import {
  ImageWrapper,
  CrewDetailBlock,
  Header,
  MapWrapper,
  ButtonWrapper,
} from './CrewDetail.style';
import { useNavigate, useParams } from 'react-router-dom';
import {
  useQuery,
  useQueryClient,
  useMutation } from '@tanstack/react-query';
import {
  getCrew,
  joinCrew } from '../../api/CrewApi';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useEffect, useState, ReactNode } from 'react';
import MyProfile from '../../components/common/myprofile/MyProfile';
import { CheckuserInfo } from '../../api/AuthApi';
import Comment from './Comment';
import { useDispatch } from "react-redux";

function CrewDetail() {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const access = localStorage.getItem('Access');
  const refresh = localStorage.getItem('Refresh');
  const [loggedin, setLoggedin] = useState(false);
  const queryClient = useQueryClient();
  const joinMutation = useMutation(joinCrew, {
    onSuccess: () => {
      queryClient.invalidateQueries(['crewApplicant'])
      console.log('Sent application successfully to join crew!')
    }
  });

  const onClickCrewMember = () => {
    navigate(`/crew/member/${params.id}`);
  };

  const onClickJoinCrew = () => {
    joinMutation.mutate(params.id);
  }

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

        {crew?.data.owner === false &&
        <ButtonWrapper>
          <button
            onClick={onClickJoinCrew}
          >
            크루 참여하기
          </button>
        </ButtonWrapper>
        }

        {crew?.data.owner === true &&
        <ButtonWrapper>
          <button
            onClick={onClickCrewMember}
          >
            크루 멤버 관리하기
          </button>
        </ButtonWrapper>
        }
      </CrewDetailBlock>
    </>
  );
}

export default CrewDetail;
