import { useEffect, useState } from "react";
import {
  CategoryBlock,
  ImageWrapper,
  Overview,
  TitleContainer,
  R9dCrew,
  CategoryContents,
  CategoryBtns,
} from "./Category.style";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from "../../Skeleton";
import { setDisplayRemainingComponents } from "../../../redux/modules/Modules";
import useSearch from "../../../hook/useSearch";
import LikeButton from "../LikeButton";

type CrewList = {
  content: string;
  crewName: string;
  crewRecruitmentId: number;
  currentNumber: number;
  exerciseDate: string;
  exerciseKind: string;
  image?: string[];
  location: string;
  postDate: number[];
  title: string;
};

interface SearchResult {
  data: CrewList[];
}

interface RootState {
  display: {
    displayRemainingComponents: boolean;
  };
}

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

  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const {
    searchResult,
    loading,
    error,
    hasMore,
    search,
  }: {
    searchResult: SearchResult["data"];
    loading: boolean;
    error: any;
    hasMore: boolean;
    search: (keyword: string, page: number, size: number) => Promise<void>;
  } = useSearch();

  if (error) {
    alert("입력하신 키워드를 찾지 못하였습니다.");
  }

  useEffect(() => {
    dispatch(setDisplayRemainingComponents(searchResult.length === 0));
  }, [searchResult, dispatch]);

  const onClickCategory = (
    pickedCategory: string,
    page: number,
    size: number
  ) => {
    setSelectedCategory(pickedCategory);
    search(pickedCategory, page, size);
  };

  const onClickCrew = (itemId: number) => {
    if (access && refresh !== "") {
      navigate(`/crew/${itemId}`);
    } else {
      navigate("/login");
    }
  };
  const displayRemainingComponents = useSelector(
    (state: RootState) => state.display.displayRemainingComponents
  );

  // console.log(selectedCategory);
  // console.log(category);
  // console.log(searchResult);

  return (
    <CategoryBlock>
      {categories.map((category) => {
        return (
          <CategoryBtns
            key={category}
            onClick={() => onClickCategory(category, 1, 5)}
            style={{
              backgroundColor: selectedCategory === category ? "orange" : "",
            }}
          >
            {category}
          </CategoryBtns>
        );
      })}

      {!displayRemainingComponents && (
        <CategoryContents>
          {searchResult?.length > 0 &&
            searchResult.map((post) => {
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

                      <LikeButton />
                    </div>

                    <p>{post.exerciseKind} / 서울 중구</p>
                  </Overview>
                </R9dCrew>
              );
            })}
        </CategoryContents>
      )}
      {loading ? <Skeleton /> : ""}
    </CategoryBlock>
  );
}

export default Category;
