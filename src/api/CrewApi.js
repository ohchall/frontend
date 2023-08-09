import axios from 'axios';
import { useMutation, useQuery } from "@tanstack/react-query";

// queryKey = crews
export const getCrews = async () => {
  const res = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/crew?_limit=5`
  );
  return res;
}

// queryKey = crew
export const getCrew = async (id) => {
  const res = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/crew/${id}`
  );
  return res;
}

// queryKey = ???
export const useAddCrewMutation = () => {
 return useMutation((crew) => {
   return axios.post(`${process.env.REACT_APP_SERVER_URL}/crew`, crew);
 });
};

// queryKey = crewData
export const useFetchCrew = () => {
 return useQuery(["crewData"], async () => {
   // queryKey를 배열로 변경
   const { data } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/crew`);
   return data;
 });
};