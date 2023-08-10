import { getCrews } from "../../api/CrewApi";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from 'react-router-dom';
import Banner from "../../components/banner/Banner";
import Category from "../../components/category/Category";
import {
  MainPageSection,
  RecentCrewList,
  TitleContainer,
  TopCrewList,
  SuggestCrewList,
} from "./MainPage.style";
import EventBanner from "../../components/banner/EventBanner";
// import Rank from "../../components/rank/Rank";
// import Suggest from "../../components/main/suggested/Suggest";
// import Slider from "../../components/main/slider/Slider";
import LatestCrewList from '../../components/common/LatestCrewList';
import R9dCrewList from '../../components/common/R9dCrewList';
import PopularCrewList from '../../components/common/PopularCrewList';

function MainPage() {
  const navigate = useNavigate();

  const onClickCrew = (itemId) => {
    navigate(`/crew/${itemId}`);
  }

  const { data, isLoading, error } = useQuery(["crews"], getCrews);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error occurred while fetching data.</div>;
  }

  return (
    <>
      <MainPageSection>
        <Banner />
        <Category />

        <RecentCrewList>
          <TitleContainer>
            <h1>최신 크루 리스트</h1>
            <button>더보기</button>
          </TitleContainer>

          <LatestCrewList
            data={data}
            onClickCrew={onClickCrew}
          />
        </RecentCrewList>

        <TopCrewList>
          <TitleContainer>
            <h1>인기 크루 리스트</h1>
            <button>더보기</button>
          </TitleContainer>

          <PopularCrewList
            data={data}
            onClickCrew={onClickCrew}
          />
        </TopCrewList>

        <SuggestCrewList>
          <TitleContainer>
            <h1>추천 크루 리스트</h1>
            <button>더보기</button>
          </TitleContainer>

          <R9dCrewList
            data={data}
            onClickCrew={onClickCrew}
          />
        </SuggestCrewList>

        <EventBanner />
      </MainPageSection>
    </>
  );
}

export default MainPage;
