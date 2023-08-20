import { useState, useCallback } from "react";
import axios from "axios";

const useSearch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchResult, setSearchResult] = useState([]);

  const search = useCallback(async (keyword) => {
    setLoading(true);
    setError(false);

    const encodedKeyword = encodeURIComponent(keyword);
    // const decodedKeyword = decodeURIComponent(encodedKeyword);
    // console.log(decodedKeyword);
    const url = `/crew/search/basic?keyword=${encodedKeyword}&page=1&size=10&sortBy=content&isAsc=true`;
    // console.log(url);
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}${url}`
      );
      // console.log(response);
      setSearchResult(response);
      setLoading(false);
      if (response.data.crewList.length === 0) {
        setError(true);
        window.location.reload();
      }
    } catch (e) {
      // console.log("e", e);
      setError(true);
      setLoading(false);
      window.location.reload();
    }
    // console.log("keyword", keyword);
  }, []);
  // console.log("searchResult", searchResult);
  return { loading, error, searchResult, search };
};
export default useSearch;
