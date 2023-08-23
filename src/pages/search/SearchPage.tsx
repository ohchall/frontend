import React, { useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import useSearch from "../../hook/useSearch";
import Skeleton from "../../components/Skeleton";
import LikeButton from "../../components/common/LikeButton";
import { useNavigate } from "react-router-dom";
import {
  SearchPageBlock,
  InputContainer,
  ImageWrapper,
  Overview,
  TitleContainer,
  R9dCrew,
} from "./SearchPage.style";
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
  totalNumber: number;
  usersLocation: string;
};

interface SearchResult {
  data: CrewList[];
}

const SearchPage = () => {
  const access = localStorage.getItem("Access");
  const refresh = localStorage.getItem("Refresh");
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  // const [pageNumber, setPageNumber] = useState();

  const {
    searchResult,
    loading,
    error,
    search,
  }: {
    searchResult: SearchResult["data"];
    loading: boolean;
    error: any;
    search: (keyword: string) => Promise<void>;
  } = useSearch();

  if (error) {
    alert("입력하신 키워드를 찾지 못하였습니다.");
  }

  const searchInputRef = useRef<HTMLInputElement>(null);
  const onChangeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const onClickSearch = async () => {
    if (keyword !== "") {
      // console.log("keyword: ", keyword);
      await search(keyword);
    } else {
      searchInputRef.current?.focus();
    }
  };

  const onClickCrew = (itemId: number) => {
    if (access && refresh !== "") {
      navigate(`/crew/${itemId}`);
    } else {
      navigate("/login");
    }
  };

  // console.log(watchOption);
  // console.log("loading", loading, "error", error);
  // console.log("searched", searchResult);
  return (
    <SearchPageBlock>
      <InputContainer>
        <input
          type="text"
          value={keyword}
          onChange={onChangeKeyword}
          ref={searchInputRef}
          placeholder="찾고 싶은 크루를 검색해보세요."
        />
        <button onClick={onClickSearch}>
          <FiSearch />
        </button>
      </InputContainer>

      {searchResult.length > 0 &&
        searchResult.map((post: CrewList) => {
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
                <div>
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

      {loading ? <Skeleton /> : ""}
    </SearchPageBlock>
  );
};

export default SearchPage;
