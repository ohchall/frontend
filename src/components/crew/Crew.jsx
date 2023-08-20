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
import { useSelector } from "react-redux";

function Crew() {
  const access = localStorage.getItem('Access');
  const refresh = localStorage.getItem('Refresh');
  const navigate = useNavigate();

  const displayRemainingComponents = useSelector(
    (state) => state.display.displayRemainingComponents
  );

  const onClickCrew = (itemId) => {
    if (access && refresh !== '') {
      navigate(`/crew/${itemId}`);
    } else {
      navigate('/login');
    }
  };

  const { data, isLoading, error } = useQuery(['crews'], getCrews);

  return (
    <CrewBlock>
      {isLoading && "Loading..."}
      {error && "An error has occurred: " + error.message}
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
  );
}

export default Crew;
