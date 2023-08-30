import { useEffect, useState } from "react";
import {
  CategoryBlock,
  CategoryContainer,
  ImageWrapper,
  Overview,
  TitleContainer,
  R9dCrew,
  CategoryContents,
  CategoryBtns,
  SearchMoreBtn,
} from "./Category.style";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from "../../Skeleton";
import {
  CrewList,
  resetSearchResult,
  setDisplayRemainingComponents,
} from "../../../redux/modules/Modules";
import useSearch from "../../../hook/useSearch";
import { RootState } from "../../../redux/config/ConfigStore";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import Scrap from "../../scrap/Scrap";
import { useQuery } from "@tanstack/react-query";
import { getScrap } from "../../../api/CrewApi";

function Category() {
  const access = localStorage.getItem("Access");
  const refresh = localStorage.getItem("Refresh");
  const navigate = useNavigate();
  const categories: Array<string> = [
    "전체",
    "러닝",
    "웨이트",
    "자전거",
    "요가",
    "필라테스",
    "크로스핏",
    "골프",
    "테니스",
  ];
  const dispatch = useDispatch();
  const searchResult = useSelector((state: RootState) => state.searchResults);
  const [page, setPage] = useState({ value: 1, searchCalled: false });
  const [toprev, setToprev] = useState(false);
  const [updatedSearchResult, setUpdatedSearchResult] = useState<CrewList[]>(
    []
  );

  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const {
    loading,
    error,
    hasMore,
    search,
  }: {
    loading: boolean;
    error: boolean;
    hasMore: boolean;
    search: (
      keyword: string,
      page: number,
      resetResults: boolean,
      toprev: boolean
    ) => Promise<void>;
  } = useSearch();

  const { data: scrappedData } = useQuery(["scraps"], async () => {
    if (access && refresh) {
      return getScrap();
    }
    return [];
  });

  const updatedSearchResultsWithScrappedInfo = updatedSearchResult.map(
    (resultItem) => {
      const isScrapped = scrappedData?.some(
        (scrapItem: any) =>
          scrapItem.crewRecruitmentId === resultItem.crewRecruitmentId
      );

      return { ...resultItem, scrapped: isScrapped };
    }
  );

  const onClickCategory = (pickedCategory: string, page: number) => {
    if (pickedCategory === "전체") {
      dispatch(setDisplayRemainingComponents(true));
      setPage((prevPageState) => ({
        value: (prevPageState.value = 0),
        searchCalled: false,
      }));
      dispatch(resetSearchResult());
      setSelectedCategory(pickedCategory);
    } else {
      setSelectedCategory(pickedCategory);
      search(pickedCategory, page, false, false);
      setPage((prevPageState) => ({
        value: (prevPageState.value = 1),
        searchCalled: true,
      }));
    }
  };

  useEffect(() => {
    // 페이지가 1보가 크고 searchCalled가 false일때 서치를 실행하고 searchCalled를 true로 바꿔 준다.
    if (page.value >= 1 && page.searchCalled && page.value !== 0) {
      setPage((prevState) => ({ ...prevState, searchCalled: false }));
      search(selectedCategory, page.value, false, toprev);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, selectedCategory, search]);

  useEffect(() => {
    //searchResult의 길이가 0보다 클때 updatedSearchReuslt를 10개씩 보여준다.
    if (searchResult.length > 0 || error) {
      let newSearchResult = searchResult.slice(-10);
      newSearchResult.sort((a: any, b: any) => a.page - b.page);
      setUpdatedSearchResult(newSearchResult);
      dispatch(setDisplayRemainingComponents(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchResult]);

  const displayRemainingComponents = useSelector(
    (state: RootState) => state.display.displayRemainingComponents
  );

  const moreBtnHandler = () => {
    if (hasMore) {
      setPage((prevPageState) => ({
        value: prevPageState.value + 1,
        searchCalled: true,
      }));
      setToprev(false);
    }
    // console.log("MORE!!");
  };

  const prevBtnHandler = () => {
    if (page.value > 2 && !hasMore) {
      setPage((prevPageState) => ({
        value: prevPageState.value - 3,
        searchCalled: true,
      }));
    } else if (updatedSearchResult.length === 10 && page.value > 2 && hasMore) {
      setPage((prevPageState) => ({
        value: prevPageState.value - 2,
        searchCalled: true,
      }));
      setToprev(true);
    } else {
      setPage((prevPageState) => ({
        value: prevPageState.value - 1,
        searchCalled: true,
      }));
      setToprev(true);
    }
  };

  const onClickCrew = (itemId: number) => {
    if (access && refresh !== "") {
      navigate(`/crew/${itemId}`);
    } else {
      navigate("/login");
    }
  };

  // console.log(selectedCategory);
  // console.log("page", page);
  // console.log("updatedSearchResult", updatedSearchResult);
  // console.log("searchResult", searchResult);
  // console.log(category);
  // console.log(searchResult);

  return (
    <CategoryBlock>
      <CategoryContainer>
      {categories.map((category) => {
        return (
          <CategoryBtns
            key={category}
            onClick={() => onClickCategory(category, 1)}
            style={{
              backgroundColor: selectedCategory === category ? "orange" : "",
            }}
          >
            {category}
          </CategoryBtns>
        );
      })}
      </CategoryContainer>

      {page.value > 1 && (
        <SearchMoreBtn onClick={prevBtnHandler}>
          <IoIosArrowUp
            style={{ width: "30px", height: "30px", color: "grey" }}
          />
        </SearchMoreBtn>
      )}

      {!displayRemainingComponents && (
        <CategoryContents>
          {updatedSearchResultsWithScrappedInfo?.length > 0 &&
            updatedSearchResultsWithScrappedInfo.map((post) => {
              return (
                <R9dCrew
                  key={post.crewRecruitmentId}
                  onClick={() => onClickCrew(post.crewRecruitmentId)}
                >
                  <ImageWrapper>
                    <img
                      src={post.image && post.image[0] ? post.image[0] : ""}
                      alt=""
                    />
                  </ImageWrapper>

                  <Overview>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <TitleContainer>
                        <p>{post.title}</p>
                      </TitleContainer>

                      <Scrap
                        id={post.crewRecruitmentId}
                        currentScrapData={post}
                      />
                    </div>

                    <p>
                      {post.exerciseKind} / {post.location}
                    </p>
                  </Overview>
                </R9dCrew>
              );
            })}
        </CategoryContents>
      )}
      {updatedSearchResult.length >= 5 && searchResult.length > 0 && (
        <SearchMoreBtn onClick={moreBtnHandler}>
          <IoIosArrowDown
            style={{ width: "30px", height: "30px", color: "grey" }}
          />
        </SearchMoreBtn>
      )}
      {loading ? <Skeleton /> : ""}
      {error ? <h3 style={{ color: "red", marginLeft: "16px" }}>결과가 없습니다</h3> : ""}
    </CategoryBlock>
  );
}

export default Category;
