import { CheckuserInfo } from '../../api/AuthApi';
import { getCrews } from '../../api/CrewApi';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import Banner from './banner/Banner';
import Category from '../common/category/Category';
// import EventBanner from '../banner/EventBanner';
import {
  TitleContainer,
  CrewListContainer,
} from './Main.style';
import LatestCrewList from '../common/crewlist/LatestCrewList';
import R9dCrewList from '../common/crewlist/R9dCrewList';
import PopularCrewList from '../common/crewlist/PopularCrewList';
import MyProfile from '../common/myprofile/MyProfile';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function MainPage() {
  const navigate = useNavigate();
  const access = localStorage.getItem('Access');
  const refresh = localStorage.getItem('Refresh');
  const [loggedin, setLoggedin] = useState(false);
  // const [displayRemainingComponents, setDisplayRemainingComponents] =
  //   useState(true);

  const displayRemainingComponents = useSelector(
    (state) => state.display.displayRemainingComponents
  );

  useEffect(() => {
    // console.log("triggered");
    const getUserInfo = async () => {
      const isUserLoggedIn = await CheckuserInfo();
      setLoggedin(isUserLoggedIn);
    };
    if (access && refresh) {
      getUserInfo();
    }
  }, [access, refresh]);

  const onClickCrew = (itemId) => {
    if (access && refresh !== '') {
      navigate(`/crew/${itemId}`);
    } else {
      navigate('/login');
    }
  };

  const { data, isLoading, error } = useQuery(['crews'], getCrews);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error occurred while fetching data.</div>;
  }

  const bannerData = data.data.crewList[0];
  //  console.log('bannerData', bannerData);
  // console.log(displayRemainingComponents);
  return (
    <>
      <>
        {loggedin ? <MyProfile /> : null}
        <Banner data={bannerData} />
        <div style={{ margin: '-20px 0 -30px 0' }}>
          <Category />
        </div>
        {displayRemainingComponents && (
          <>
            <CrewListContainer>
              <TitleContainer>
                <h1>최신 크루 리스트</h1>
                {/* <button>더보기</button> */}
              </TitleContainer>

              <LatestCrewList data={data} onClickCrew={onClickCrew} />
            </CrewListContainer>

            <CrewListContainer>
              <TitleContainer>
                <h1>인기 크루 리스트</h1>
                {/* <button>더보기</button> */}
              </TitleContainer>

              <PopularCrewList data={data} onClickCrew={onClickCrew} />
            </CrewListContainer>

            <CrewListContainer>
              <TitleContainer>
                <h1>추천 크루 리스트</h1>
                {/* <button>더보기</button> */}
              </TitleContainer>

              <R9dCrewList data={data} onClickCrew={onClickCrew} />
            </CrewListContainer>
          </>
        )}
        {/* <EventBanner /> */}
      </>
    </>
  );
}

export default MainPage;
