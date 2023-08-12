import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const BASE_URL = "http://localhost:4000";

export const useAddTodoMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (todo) => {
      return axios.post(
        `${process.env.REACT_APP_MOCK_SERVER_URL}/auth/mypage/todos`,
        todo
      );
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
      // return axios.delete(
      //   `${process.env.REACT_APP_SERVER_URL}/auth/mypage/todos/${todoId}`
      // );
      const deleteUrl = `${process.env.REACT_APP_MOCK_SERVER_URL}/auth/mypage/todos/${todoId}`;
      console.log("Deleting Todo with URL:", deleteUrl);
      return axios.delete(deleteUrl);
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
      return axios.put(
        `${process.env.REACT_APP_MOCK_SERVER_URL}/auth/mypage/todos/${updatedTodo.id}`,
        updatedTodo
      );
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
    const { data } = await axios.get(
      `${process.env.REACT_APP_MOCK_SERVER_URL}/auth/mypage/todos`
    );
    return data;
  });
};

export const useUpdateIsSuccessMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (updatedTodo) => {
      const response = await axios.put(
        `${process.env.REACT_APP_MOCK_SERVER_URL}/auth/mypage/todos/${updatedTodo.id}`,
        updatedTodo
      );
      return response.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("todos");
      },
    }
  );
};


