import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";

const BASE_URL = "http://localhost:4000"
export const useAddCrewMutation = () => {
 return useMutation((crew) => {
   return axios.post(`${BASE_URL}/crew`, crew);
 });
};

export const useFetchCrew = () => {
 return useQuery(["crewData"], async () => {
   // queryKey를 배열로 변경
   const { data } = await axios.get(`${BASE_URL}/crew`);
   return data;
 });
};