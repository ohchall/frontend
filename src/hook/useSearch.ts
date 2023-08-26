import { useState, useCallback } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  addSearchResult,
  setSearchResult,
  resetSearchResult,
} from "../redux/modules/Modules";

const useSearch = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  // const [searchResult, setSearchResult] = useState<CrewList[]>([]);
  const search = useCallback(
    async (
      keyword: string,
      page: number,
      resetResults: boolean,
      toprev: boolean
    ) => {
      setLoading(true);
      setError(false);

      const encodedKeyword = encodeURIComponent(keyword);

      const url = `/crew/search/basic?keyword=${encodedKeyword}&page=${page}&size=5&sortBy=content&isAsc=true`;
      // console.log(url);
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}${url}`
        );

        setHasMore(response.data.crewList.length > 0);
        setLoading(false);

        if (response.data.crewList.length === 0) {
          setHasMore(false);
          setLoading(false);
          setError(true);
          dispatch(resetSearchResult());
        }

        const resultsWithPageNumber = response.data.crewList.map(
          (item: any) => ({ ...item, page })
        );
        // 첫 페이지 또는 결과 초기화 요청이면 setSearchResults 액션 디스패치
        if (resetResults || page === 1) {
          dispatch(setSearchResult(resultsWithPageNumber));
        } else if (toprev) {
          dispatch(resetSearchResult());
          dispatch(addSearchResult(resultsWithPageNumber));
        } else {
          // 그렇지 않으면 addSearchResults 액션 디스패치
          dispatch(addSearchResult(resultsWithPageNumber));
        }

        // console.log("toprev", toprev);
        // console.log("resetResults", resetResults);
      } catch (e) {
        // console.log("e", e);
        setError(true);
        setLoading(false);
        // window.location.reload();
      }
      // console.log("keyword", keyword);
    },
    [dispatch]
  );

  return { loading, error, search, hasMore };
};
export default useSearch;
