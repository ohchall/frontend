import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";

// queryKey = crews
export const getCrews = async () => {
  const res = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/crew?page=1&size=5&sortBy=createPostDate&isAsc=false`
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

// queryKey = crewData
export const useFetchCrew = () => {
  const access = localStorage.getItem("Access");
  const refresh = localStorage.getItem("Refresh");
  const currentUserToken = {
    headers: {
      Access: `${access}`,
      Refresh: `${refresh}`,
    },
  };
  return useQuery(["crewData"], async () => {
    // queryKey를 배열로 변경
    const { data } = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/crew/more`,
      currentUserToken
    );
    return data;
  });
};

// queryKey = crewData
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

// // 좋아요 버튼
// export const useLike = async () => {
//     const queryClient = useQueryClient();
//     return useMutation(
//       () => {
//         return axios.post(
//           `${process.env.REACT_APP_SERVER_URL}/`,
          
//         );
//       },
//       {
//         onSuccess: () => {
//           queryClient.invalidateQueries("");
//         },
//       }
//     );
//   };