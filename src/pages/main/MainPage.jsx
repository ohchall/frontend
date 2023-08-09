// import { useFetchPosts } from "../../api/TodoApi";
import { getCrews } from "../../api/CrewApi";
import { useQuery } from "@tanstack/react-query";
import Slider from "../../components/slider/Slider";
import Banner from "../../components/banner/Banner";
import Category from "../../components/category/Category";
import {
  MainPageSection,
  RecentCrewList,
  TitleContainer,
  TopCrewList,
  SuggestCrewList,
} from "./MainPage.style";
import Rank from "../../components/rank/Rank";
import Suggest from "../../components/suggested/Suggest";
import EventBanner from "../../components/banner/EventBanner";

function MainPage() {
  // const { data, isLoading, isError } = useFetchPosts();
  const {
    data,
    isLoading,
    error
  } = useQuery(['crews'], getCrews);

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

          <Slider data={data?.data} />
        </RecentCrewList>

        <TopCrewList>
          <TitleContainer>
            <h1>인기 크루 리스트</h1>
            <button>더보기</button>
          </TitleContainer>
          <Rank data={data?.data} />
        </TopCrewList>

        <SuggestCrewList>
          <TitleContainer>
            <h1>추천 크루 리스트</h1>
            <button>더보기</button>
          </TitleContainer>
          <Suggest data={data?.data} />
        </SuggestCrewList>

        <EventBanner />
      </MainPageSection>
    </>
  );
}

export default MainPage;
