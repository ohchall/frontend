import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";

// queryKey = crews
export const getCrews = async () => {
  // const access = localStorage.getItem("Access");
  // const refresh = localStorage.getItem("Refresh");
  const res = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/crew?page=1&size=5&sortBy=createPostDate&isAsc=false`
    // {
    //   headers: {
    //     Access: `${access}`,
    //     Refresh: `${refresh}`,
    //   }
    // },
  );
  return res;
};

// queryKey = crew
export const getCrew = async (id) => {
  const access = localStorage.getItem("Access");
  const refresh = localStorage.getItem("Refresh");
  const res = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/crew/${id}`,
    {
      headers: {
        Access: `${access}`,
        Refresh: `${refresh}`,
      },
    }
  );
  return res;
};

// queryKey = ???
export const useAddCrewMutation = () => {
  const access = localStorage.getItem("Access");
  const refresh = localStorage.getItem("Refresh");
  const currentUserToken = {
    headers: {
      Access: `${access}`,
      Refresh: `${refresh}`,
      "Content-Type": "multipart/form-data",
    },
  };
  return useMutation(["crewData"], async (formData) => {
    const { data } = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/crew`,
      formData,
      currentUserToken
    );
    return data;
  });
};

// queryKey = crewData
export const useFetchCrew = () => {
  return useQuery(["crewData"], async () => {
    // queryKey를 배열로 변경
    const { data } = await axios.get(
      `${process.env.REACT_APP_MOCK_SERVER_URL}/crew`
    );
    return data;
  });
};

//infinite scroll
export const useFetchCrewByPage = async ({ pageParam = 1 }) => {
  const response = await fetch(
    `${process.env.REACT_APP_MOCK_SERVER_URL}/crew?page=${pageParam}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

// export const useFetchPosts = () => {
//   return useQuery(["posts"], async () => {
//     const { data } = await axios.get(
//       `${process.env.REACT_APP_MOCK_SERVER_URL}/posts`
//     );
//     return data;
//   });
// };
