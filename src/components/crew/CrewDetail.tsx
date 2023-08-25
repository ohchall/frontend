import {
  ImageWrapper,
  CrewDetailBlock,
  Header,
  MapWrapper,
  ButtonWrapper,
  CommentContainer,
  Comment,
  CommentHeader,
  CommentContent,
  CommentFooter,
  CommentFormWrapper,
  SubCommentContainer,
  SubComment,
  SubCommentHeader,
  SubCommentContent,
  StyledAiOutlineHeart,
  StyledFiMoreHorizontal } from './CrewDetail.style';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getCrew } from "../../api/CrewApi";
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import {
  useEffect,
  useState,
  ReactNode
} from 'react';
import MyProfile from '../../components/common/myprofile/MyProfile';
import { CheckuserInfo } from '../../api/AuthApi';

function CrewDetail() {
  const navigate = useNavigate();
  const access = localStorage.getItem('Access');
  const refresh = localStorage.getItem('Refresh');
  const [loggedin, setLoggedin] = useState(false);

  const onClickRegisterComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  const onClickCrewMember = () => {
    navigate('/crew/member');
  }

  useEffect(() => {
    // console.log('triggered');
    const getUserInfo = async () => {
      const isUserLoggedIn = await CheckuserInfo();
      setLoggedin(isUserLoggedIn);
    };
    if (access && refresh) {
      getUserInfo();
    }
  }, [access, refresh]);

  // console.log(loggedin);

  const { kakao } = window;
  const [ coordinate, setCoordinate ] = useState({ lat: 33.55635, lng: 126.795841 });

  const params = useParams();
  const {
    data: crew,
    isLoading,
    error: queryError,
  } = useQuery(["crew", params.id], () => getCrew(params.id));

  useEffect(() => {
    const geocoder = new kakao.maps.services.Geocoder();
    const address = crew?.data.location ?? '제주특별자치도 제주시 첨단로 242';

    geocoder.addressSearch(address, function(result, status) {
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
            lng: coords.getLng()
          }
        });
      }
    });
  }, [crew?.data.location, kakao.maps.LatLng, kakao.maps.services.Geocoder, kakao.maps.services.Status.OK]);

  // useEffect(() => {
  //   console.log(coordinate);
  // }, [coordinate]);

  let errorMessage: ReactNode = null;
  if (queryError) {
    const error = queryError as Error;
    errorMessage = "An error has occurred: " + error.message;
  }

  return (
    <>
      {loggedin ? <MyProfile /> : null}
      <CrewDetailBlock>
        {isLoading && "Loading..."}
        {errorMessage}
        {/* {error && "An error has occurred: " + error.message} */}

        <ImageWrapper>
          <img
            src={
              crew?.data.image?.length !== 0 && crew?.data.image?.length !== undefined
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
          <Map
            center={coordinate}
            style={{ width: '100%', height: '100%' }}
          >
            <MapMarker position={coordinate} />
          </Map>
        </MapWrapper>

        <CommentContainer>
          <Comment>
            <CommentHeader>
              <div>
                <span>
                  오
                </span>
                <p>오늘만산다</p>
              </div>

              <div>
                <span>8시간전</span>
                <button><StyledFiMoreHorizontal /></button>
              </div>
            </CommentHeader>

            <CommentContent>
              {
                '현재 정원 1명 자리 남았습니다.\n' +
                '혼합 복식에 여1 구합니다. 남자분도 문의주세요.\n' +
                '경기장 이용비용으로 회비 5,000원 있습니다.'
              }
            </CommentContent>

            <CommentFooter>
              <div>
                <button>
                  <StyledAiOutlineHeart />
                </button>
                <span>댓글 2</span>
              </div>
              <button>
                댓글쓰기
              </button>
            </CommentFooter>
          </Comment>

          <SubCommentContainer>
            <SubComment>
              <SubCommentHeader>
                <div>
                  <span>
                    김
                  </span>
                  <p>김오챌</p>
                </div>

                <div>
                  <span>8시간전</span>
                  <button>
                    <StyledFiMoreHorizontal />
                  </button>
                </div>
              </SubCommentHeader>

              <SubCommentContent>
                아직 자리 남았나요?
              </SubCommentContent>
            </SubComment>

            <SubComment>
              <SubCommentHeader>
                <div>
                  <span>
                    오
                  </span>
                  <p>오늘만산다</p>
                </div>

                <div>
                  <span>8시간전</span>
                  <button>
                    <StyledFiMoreHorizontal />
                  </button>
                </div>
              </SubCommentHeader>

              <SubCommentContent>
                @김오챌 아직 자리 있습니다. DM 드리겠습니다.
              </SubCommentContent>
            </SubComment>
          </SubCommentContainer>

          <CommentFormWrapper>
            <form onSubmit={onClickRegisterComment}>
              <textarea></textarea>
              <button>
                등록
              </button>
            </form>
          </CommentFormWrapper>
        </CommentContainer>

        <ButtonWrapper>
          <button>크루 참여하기</button>
        </ButtonWrapper>

        <ButtonWrapper>
          <button
            onClick={onClickCrewMember}
          >
            크루 멤버 관리하기
          </button>
        </ButtonWrapper>
      </CrewDetailBlock>
    </>
  );
};

export default CrewDetail;
