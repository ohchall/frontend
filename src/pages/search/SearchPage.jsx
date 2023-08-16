import React, { useCallback, useRef, useState } from "react";
import { styled } from "styled-components";
import { FiSearch } from "react-icons/fi";
import useSearch from "./useSearch";
import Skeleton from "./Skeleton";
const SearchPage = () => {
  const [keyword, setKeyword] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const { searchResult, hasMore, loading, error, searchCrews } = useSearch(
    keyword,
    pageNumber
  );
  const observer = useRef();

  const lastResultElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
      console.log(node);
    },
    [loading, hasMore]
  );

  const onChangeKeyword = (e) => {
    setKeyword(e.target.value);
    setPageNumber(1);
  };

  const onClickSearch = async () => {
    console.log("keyword: ", keyword);
    await searchCrews(keyword); // 버튼 클릭시 API 요청 실행
  };

  console.log("loading", loading, "error", error);
  return (
    <SearchPageBlock>
      <InputContainer>
        <input type="text" value={keyword} onChange={onChangeKeyword} />
        <button onClick={onClickSearch}>
          <FiSearch />
        </button>
      </InputContainer>

      {searchResult.map((searchResult, index) => {
        if (searchResult.length === index + 1) {
          return (
            <div ref={lastResultElementRef} key={searchResult.id}>
              {searchResult.title}
            </div>
          );
        } else {
          return <div key={searchResult.id}>{searchResult.title}</div>;
        }
      })}
      <div>{loading ? "Loading" : "Loadingfalse"}</div>

      <div>{error ? "Error" : "Errorfalse"}</div>
    </SearchPageBlock>
  );
};

export default SearchPage;

const SearchPageBlock = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-bottom: 60px;
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
