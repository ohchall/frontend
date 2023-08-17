// import { useState, useEffect, useCallback } from "react";
// import axios from "axios";
// const useSearch = (keyword, pageNumber) => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);
//   const [searchResult, setSearchResult] = useState([]);
//   const [hasMore, setHasMore] = useState(false);

//   //   useEffect(() => {
//   //     setSearchResult([]);
//   //   }, [keyword]);

//   const searchCrews = useCallback(async (keyword) => {
//     setLoading(true);
//     setError(false);
//     await axios
//       .get(
//         `${
//           process.env.REACT_APP_SERVER_URL
//         }/search/basic?keyword=${encodeURIComponent(keyword)}
//         &page=1&size=1&sortBy=content&isAsc=true`,
//         {
//           // params: {
//           //   data: keyword,
//           // },
//           withCredentials: true,
//         }
//       )
//       .then((response) => {
//         //   setSearchResult((prevResults) => {
//         //     return [
//         //       ...new Set([
//         //         ...prevResults,
//         //         ...response.data.map((result) => result.title),
//         //       ]),
//         //     ];
//         //   });
//         //   setHasMore(response.data.length > 0);
//         console.log("response", response);
//         setLoading(false);
//       })
//       .catch((e) => {
//         console.log("e", e);
//         setError(true);
//       });

//     console.log("keyword", keyword);
//   }, []);

//   console.log("searchResult", searchResult);
//   return { loading, error, searchResult, hasMore, searchCrews };
// };
// export default useSearch;

import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const useSearch = (keyword, pageNumber) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  const searchCrews = useCallback(async (keyword) => {
    setLoading(true);
    setError(false);

    const encodedKeyword = encodeURIComponent(keyword);
    const decodedKeyword = decodeURIComponent(encodedKeyword);
    console.log(decodedKeyword);
    const url = `/search/basic?keyword=${encodedKeyword}&page=1&size=10&sortBy=content&isAsc=true`;
    console.log(url);
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}${url}`
      );
      setLoading(false);
    } catch (e) {
      console.log("e", e);
      setError(true);
      setLoading(false);
    }
    console.log("keyword", keyword);
  }, []);
  console.log("searchResult", searchResult);
  return { loading, error, searchResult, hasMore, searchCrews };
};
   // 여기서 setSearchResult, setHasMore 등을 업데이트하세요.
      // (예시) setSearchResult(response.data.results);
      // (예시) setHasMore(response.data.hasMore);
export default useSearch;

// import { useState, useEffect, useCallback } from "react";
// import axios from "axios";

// const useSearch = (keyword, pageNumber) => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);
//   const [searchResult, setSearchResult] = useState([]);
//   const [hasMore, setHasMore] = useState(false);

//   const searchCrews = useCallback(async (keyword) => {
//     setLoading(true);
//     setError(false);

//     const url = `${process.env.REACT_APP_SERVER_URL}/search/basic?keyword="${keyword}"&page=1&size=10&sortBy=content&isAsc=true`;

//     try {
//       const response = await axios.get(url, {
//         withCredentials: true,
//       });

//       // 여기서 setSearchResult, setHasMore 등을 업데이트하세요.
//       // (예시) setSearchResult(response.data.results);
//       // (예시) setHasMore(response.data.hasMore);
//       console.log("response", response);
//       setLoading(false);
//     } catch (e) {
//       console.log("e", e);
//       setError(true);
//       setLoading(false);
//     }

//     console.log("keyword", keyword);
//   }, []);

//   console.log("searchResult", searchResult);
//   return { loading, error, searchResult, hasMore, searchCrews };
// };

// export default useSearch;
