import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

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
      return axios.delete(
        `${process.env.REACT_APP_MOCK_SERVER_URL}/todos/${todoId}`
        // `${process.env.REACT_APP_MOCK_SERVER_URL}/auth/mypage/todos/${todoId}`
      );
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
        `${process.env.REACT_APP_MOCK_SERVER_URL}/todos/${updatedTodo.id}`,
        // `${process.env.REACT_APP_MOCK_SERVER_URL}/auth/mypage/todos/${updatedTodo.id}`
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
        `${process.env.REACT_APP_MOCK_SERVER_URL}/todos/${updatedTodo.id}`,
        // `${process.env.REACT_APP_MOCK_SERVER_URL}/auth/mypage/todos/${updatedTodo.id}`
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
