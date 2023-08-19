import React, { useRef, useState } from "react";
import { styled } from "styled-components";
import { FiSearch } from "react-icons/fi";
import useSearch from "./useSearch";
import Skeleton from "./Skeleton";
import LikeButton from "../../components/common/LikeButton";
import { useNavigate } from "react-router-dom";
const SearchPage = () => {
  const access = localStorage.getItem("Access");
  const refresh = localStorage.getItem("Refresh");
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const { searchResult, loading, error, searchCrews } = useSearch(
    keyword,
    pageNumber
  );
  const searchInputRef = useRef();
  const onChangeKeyword = (e) => {
    setKeyword(e.target.value);
    setPageNumber(1);
  };

  const onClickSearch = async () => {
    if (keyword !== "") {
      // console.log("keyword: ", keyword);
      await searchCrews(keyword);
    } else {
      searchInputRef.current.focus();
    }
  };

  const onClickCrew = (itemId) => {
    if (access && refresh !== "") {
      navigate(`/crew/${itemId}`);
    } else {
      navigate("/login");
    }
  };

  // console.log("loading", loading, "error", error);
  // console.log("searched", searchResult?.data?.crewList);
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
      {searchResult?.data?.crewList?.length > 0 &&
        searchResult.data.crewList.map((post) => {
          return (
            <R9dCrew
              key={post.crewRecruitmentId}
              onClick={() =>
                onClickCrew(searchResult.data.crewList[0].crewRecruitmentId)
              }
            >
              <ImageWrapper>
                <img
                  src={
                    searchResult.data.crewList[0].image?.length !== 0 &&
                    searchResult.data.crewList[0].image?.length !== undefined
                      ? searchResult.data.crewList[0].image[0]
                      : ""
                  }
                  alt=""
                />
              </ImageWrapper>

              <Overview>
                <div>
                  <TitleContainer>
                    <p>{searchResult.data.crewList[0].title}</p>
                    <span>15/16</span>
                  </TitleContainer>

                  <LikeButton />
                </div>

                <p>{searchResult.data.crewList[0].exercisekind} / 서울 중구</p>
              </Overview>
            </R9dCrew>
          );
        })}
      <div>{loading ? <Skeleton /> : ""}</div>

      <div>{error ? alert("입력하신 키워드를 찾지 못하였습니다.") : ""}</div>
    </SearchPageBlock>
  );
};

export default SearchPage;

const SearchPageBlock = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding-bottom: 230px;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
const InputContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 24px 16px;

  & input {
    display: block;
    width: calc(100% - 50px);
    height: 50px;
    padding-left: 16px;
    border: 1px solid #666666;
    border-radius: 25px 0 0 25px;
    border-right: none;
  }

  & button {
    display: block;
    width: 50px;
    height: 50px;
    background-color: transparent;
    border: 1px solid #666666;
    border-radius: 0 25px 25px 0;
    border-left: none;
    cursor: pointer;
  }

  & button > svg {
    width: 18px;
    height: 18px;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 259px;
  border-radius: 25px 25px 0 0;
  background-color: #eeeeee;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  & img {
    width: 100%;
  }
`;

const Overview = styled.div`
  width: 100%;
  height: 70px;
  padding: 14px 16px;
  border-radius: 0 0 25px 25px;
  background-color: #f3f3f3;

  & > div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 6px;
  }

  & > p {
    font-size: 13px;
  }

  & > div > span > svg {
    font-size: 20px;
  }
`;

const TitleContainer = styled.div`
  & > p {
    display: inline-block;
    font-size: 18px;
  }

  & > span {
    display: inline-block;
  }
`;

const R9dCrew = styled.div`
  width: 398px;
  height: 232px;
  cursor: pointer;

  &:nth-of-type(-n + 4) {
    margin-bottom: 12px;
  }

  & ${ImageWrapper} {
    height: 160px;
  }

  & ${Overview} {
    height: 72px;
  }
`;
