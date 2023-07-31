import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";

const BASE_URL = "http://localhost:4000";

export const useAddTodoMutation = () => {
  return useMutation((todo) => {
    return axios.post(`${BASE_URL}/todos`, todo);
  });
};

export const useFetchTodos = () => {
  return useQuery(["todos"], async () => {
    // queryKey를 배열로 변경
    const { data } = await axios.get(`${BASE_URL}/todos`);
    return data;
  });
};
