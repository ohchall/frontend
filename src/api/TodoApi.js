import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const BASE_URL = "http://localhost:4000";

export const useAddTodoMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (todo) => {
      return axios.post(`${BASE_URL}/todos`, todo);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("todos");
      },
    }
  );
};

export const useDeleteTodoMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (todoId) => {
      return axios.delete(`${BASE_URL}/todos/${todoId}`);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("todos");
      },
    }
  );
};

export const useUpdateTodoMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (updatedTodo) => {
      return axios.put(`${BASE_URL}/todos/${updatedTodo.id}`, updatedTodo);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("todos");
      },
    }
  );
};

export const useFetchTodos = () => {
  return useQuery(["todos"], async () => {
    const { data } = await axios.get(`${BASE_URL}/todos`);
    return data;
  });
};


