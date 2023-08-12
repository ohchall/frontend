import axios from 'axios';
import { useMutation, useQuery } from "@tanstack/react-query";

// queryKey = crews
export const getCrews = async () => {
  const res = await axios.get(
    `${process.env.REACT_APP_MOCK_SERVER_URL}/crew?_limit=5`
  );
  return res;
};

// queryKey = crew
export const getCrew = async (id) => {
  const res = await axios.get(`${process.env.REACT_APP_MOCK_SERVER_URL}/crew/${id}`);
  return res;
};

// queryKey = ???
export const useAddCrewMutation = () => {
  return useMutation((crew) => {
    return axios.post(`${process.env.REACT_APP_MOCK_SERVER_URL}/crew`, crew);
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

// 회원가입
export const Register = async (newuser) => {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/signup`,
      newuser,
      { headers: { withCredentials: true } }
    );
    console.log("resdata", data);
    return data;
  } catch (e) {
    alert(e.response.data.msg);
  }
};

//로그인
export const UserCheck = async (user) => {
  await axios
    .post(`${process.env.REACT_APP_SERVER_URL}/login`, user)
    .then((response) => {
      const access = response.headers.get("Access");
      const refresh = response.headers.get("Refresh");
      localStorage.setItem("Access", access);
      localStorage.setItem("Refresh", refresh);

      return console.log("response", response);
    })
    .catch((error) => {
      console.log("an error occurred:", error.response);
      alert(error.response.data.msg);
    });
};

//infinite scroll
export const useFetchCrewByPage = async ({ pageParam = 1 }) => {
  const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/crew?page=${pageParam}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
