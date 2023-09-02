import { CheckuserInfo } from '../../api/AuthApi';
import { getCrews } from '../../api/CrewApi';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import Banner from './banner/Banner';
import Category from '../common/category/Category';
// import EventBanner from '../banner/EventBanner';
import {
  MainBlock,
  CrewListContainer,
  CrewListTitle } from './Main.style';
import LatestCrewList from '../common/crewlist/LatestCrewList';
import R9dCrewList from '../common/crewlist/R9dCrewList';
import PopularCrewList from '../common/crewlist/PopularCrewList';
import MyProfile from '../common/myprofile/MyProfile';
import {
  useEffect,
  useState,
  ReactNode} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/config/ConfigStore';

function Main() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const access = localStorage.getItem('Access');
  const refresh = localStorage.getItem('Refresh');
  const [loggedin, setLoggedin] = useState(false);
  // const [displayRemainingComponents, setDisplayRemainingComponents] =
  //   useState(true);

  const displayRemainingComponents = useSelector(
    (state: RootState) => state.display.displayRemainingComponents
  );

  useEffect(() => {
    // console.log('triggered');
    const getUserInfo = async () => {
      const isUserLoggedIn = await CheckuserInfo(dispatch);
      setLoggedin(isUserLoggedIn);
    };
    if (access && refresh) {
      getUserInfo();
    }
    // console.log(access, refresh);
  }, [access, refresh, dispatch]);

  const onClickCrew = (itemId: number) => {
    if (access && refresh !== '') {
      navigate(`/crew/${itemId}`);
    } else {
      navigate('/login');
    }
  };

  const { data, isLoading, error: queryError } = useQuery(['crews'], getCrews);

  let errorMessage: ReactNode = null;
  if (queryError) {
    const error = queryError as Error;
    errorMessage = 'An error has occurred: ' + error.message;
  }

  return (
    <>
      {loggedin ? <MyProfile /> : null}
      <MainBlock>
        {isLoading && 'Loading...'}
        {errorMessage}
        {/* {error && 'An error has occurred: ' + error.message} */}
        <Banner data={data} />
        <Category
          loggedin={loggedin}
        />
        {displayRemainingComponents && (
          <>
            <CrewListContainer>
              <CrewListTitle>
                최신 크루 리스트
              </CrewListTitle>

              <LatestCrewList
                data={data}
                onClickCrew={onClickCrew}
                loggedin={loggedin}  
              />
            </CrewListContainer>

            <CrewListContainer>
              <CrewListTitle>
                인기 크루 리스트
              </CrewListTitle>

              <PopularCrewList
                data={data}
                onClickCrew={onClickCrew}
              />
            </CrewListContainer>

            <CrewListContainer>
              <CrewListTitle>
                추천 크루 리스트
              </CrewListTitle>

              <R9dCrewList
                data={data}
                onClickCrew={onClickCrew}
                loggedin={loggedin}
              />
            </CrewListContainer>
          </>
        )}
      </MainBlock>
      {/* <EventBanner /> */}
    </>
  );
}

export default Main;
