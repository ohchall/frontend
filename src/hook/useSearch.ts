import { useState, useCallback } from "react";
import axios from "axios";

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

const useSearch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchResult, setSearchResult] = useState<SearchResult["data"]>([]);
  const [hasMore, setHasMore] = useState(false);

  const reset = () => {
    setSearchResult([]);
    setHasMore(false);
  };

  const search = useCallback(
    async (keyword: string, page: number, size: number) => {
      setLoading(true);
      setError(false);
      reset();
      const encodedKeyword = encodeURIComponent(keyword);

      // const decodedKeyword = decodeURIComponent(encodedKeyword);
      // console.log(decodedKeyword);
      const url = `/crew/search/basic?keyword=${encodedKeyword}&page=${page}&size=${size}&sortBy=content&isAsc=true`;
      // console.log(url);
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}${url}`
        );
        // console.log(response);
        setSearchResult((searchResult) => [
          ...searchResult,
          ...response.data.crewList,
        ]);
        setHasMore(response.data.crewList.length > 0);
        setLoading(false);
        // if (response.data.crewList.length === 0) {
        //   setError(true);
        //   window.location.reload();
        // }
      } catch (e) {
        // console.log("e", e);
        setError(true);
        setLoading(false);
        // window.location.reload();
      }
      // console.log("keyword", keyword);
    },
    []
  );
  // console.log("searchResult", searchResult);
  return { loading, error, searchResult, search, hasMore };
};
export default useSearch;
