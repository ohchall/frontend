import axios from "axios";
import { useQuery } from "@tanstack/react-query";

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

// queryKey = crewComments
export const getCrewComments = async () => {
  const access = localStorage.getItem("Access");
  const refresh = localStorage.getItem("Refresh");
  const res = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/crew/comment/allComment`,
    {
      headers: {
        Access: `${access}`,
        Refresh: `${refresh}`,
      },
    }
  );
  return res;
};

// queryKey = crewComments
export const addCrewComment = async (newComment) => {
  const access = localStorage.getItem('Access');
  const refresh = localStorage.getItem('Reresh');

  await axios.post(
    `${process.env.REACT_APP_SERVER_URL}/crew/comment/${newComment.crewRecruitmentId}`,
    newComment.data,
    {
      headers: {
        Access: `${access}`,
        Refresh: `${refresh}`,
      },
    }
  );
}