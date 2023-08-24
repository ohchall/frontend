import React, { useCallback, useEffect, useRef, useState } from "react";
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
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(5);
  const observer = useRef<IntersectionObserver | null>(null);

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

  const searchInputRef = useRef<HTMLInputElement>(null);

  const onChangeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const onClickSearch = async () => {
    if (keyword !== "") {
      // console.log("keyword: ", keyword);
      setPage(1);
      await search(keyword, page, size);
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

  useEffect(() => {
    if (keyword !== "") {
      search(keyword, page, size);
    }
  }, [page, search]);

  // const lastSearchResultElementRef = useCallback(
  //   (node: HTMLDivElement | null) => {
  //     if (loading) return;

  //     if (observer.current) observer.current.disconnect();
  //     observer.current = new IntersectionObserver((entries) => {
  //       if (entries[0].isIntersecting && hasMore) {
  //         setPage((prevPageNumber: number) => prevPageNumber + 1);
  //       }
  //     });
  //     if (node) observer.current?.observe(node);
  //     console.log(node);
  //     console.log(hasMore);
  //   },
  //   [loading, hasMore]
  // );

  const moreHeandler = () => {
    if (searchResult.length !== 0 && hasMore) {
      setPage((prevPageNumber: number) => prevPageNumber + 1);
      setSize(2);
    }
  };

  console.log("page", page);
  // console.log("loading", loading, "error", error);
  console.log("searched", searchResult);
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
        searchResult.map((post: CrewList, index) => {
          if (searchResult.length === index + 1) {
            return (
              <R9dCrew
                // ref={lastSearchResultElementRef}
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
          } else {
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
          }
        })}

      {loading ? <Skeleton /> : ""}
      <button onClick={moreHeandler}>더보기</button>
    </SearchPageBlock>
  );
};

export default SearchPage;
