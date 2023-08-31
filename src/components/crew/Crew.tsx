import { ReactNode } from 'react';
import {
  CrewBlock,
  CrewListContainer,
  CrewListTitle,
} from './Crew.style';
import { getCrews } from '../../api/CrewApi';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import Category from '../common/category/Category';
import LatestCrewList from '../common/crewlist/LatestCrewList';
import R9dCrewList from '../common/crewlist/R9dCrewList';
import PopularCrewList from '../common/crewlist/PopularCrewList';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/config/ConfigStore';
import MyProfile from '../../components/common/myprofile/MyProfile';
import { useEffect, useState } from 'react';
import { CheckuserInfo } from '../../api/AuthApi';

function Crew() {
  const dispatch = useDispatch();
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

  const navigate = useNavigate();

  const displayRemainingComponents = useSelector(
    (state: RootState) => state.display.displayRemainingComponents
  );

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
      <CrewBlock>
        {isLoading && 'Loading...'}
        {errorMessage}
        {/* {error && 'An error has occurred: ' + error.message} */}
        <Category />

        {displayRemainingComponents && (
          <>
            {" "}
            <CrewListContainer>
              <CrewListTitle>최신 크루 리스트</CrewListTitle>

              <LatestCrewList data={data} onClickCrew={onClickCrew} />
            </CrewListContainer>
            <CrewListContainer>
              <CrewListTitle>인기 크루 리스트</CrewListTitle>

              <PopularCrewList data={data} onClickCrew={onClickCrew} />
            </CrewListContainer>
            <CrewListContainer>
              <CrewListTitle>추천 크루 리스트</CrewListTitle>

              <R9dCrewList data={data} onClickCrew={onClickCrew} />
            </CrewListContainer>
          </>
        )}
      </CrewBlock>
    </>
  );
}

export default Crew;
