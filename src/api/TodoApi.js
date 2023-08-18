import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useAddTodoMutation = () => {
  const access = localStorage.getItem("Access");
  const refresh = localStorage.getItem("Refresh");
  const headers = {
    Access: `${access}`,
    Refresh: `${refresh}`,
  };
  const queryClient = useQueryClient();
  return useMutation(
    (todo) =>
      axios.post(
        `${process.env.REACT_APP_SERVER_URL}/auth/mypage/todos`,
        todo,
        { headers }
      ),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("todos");
      },
    }
  );
};

export const useDeleteTodoMutation = () => {
  const queryClient = useQueryClient();
  const access = localStorage.getItem("Access");
  const refresh = localStorage.getItem("Refresh");
  const headers = {
    Access: `${access}`,
    Refresh: `${refresh}`,
  };
  return useMutation(
    (toDoId) =>
      axios.delete(
        `${process.env.REACT_APP_SERVER_URL}/auth/mypage/todos/${toDoId}`,
        {
          headers,
        }
      ),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("todos");
      },
    }
  );
};

export const useUpdateTodoMutation = () => {
  const access = localStorage.getItem("Access");
  const refresh = localStorage.getItem("Refresh");
  const headers = {
    Access: `${access}`,
    Refresh: `${refresh}`,
  };
  const queryClient = useQueryClient();
  return useMutation(
    (updatedTodo) =>
      axios.put(
        `${process.env.REACT_APP_SERVER_URL}/auth/mypage/todos/${updatedTodo.toDoId}`,
        updatedTodo,
        { headers }
      ),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("todos");
      },
    }
  );
};

export const useFetchTodos = () => {
  const access = localStorage.getItem("Access");
  const refresh = localStorage.getItem("Refresh");
  const headers = {
    Access: `${access}`,
    Refresh: `${refresh}`,
  };
  return useQuery(["todos"], async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/auth/mypage/todos`,
      { headers }
    );

    return data;
  });
};

export const useUpdateIsSuccessMutation = () => {
  const access = localStorage.getItem("Access");
  const refresh = localStorage.getItem("Refresh");
  const headers = {
    Access: `${access}`,
    Refresh: `${refresh}`,
  };
  const queryClient = useQueryClient();
  return useMutation(
    async (updatedTodo) => {
      const response = await axios.put(
        `${process.env.REACT_APP_SERVER_URL}/auth/mypage/todos/${updatedTodo.toDoId}`,
        updatedTodo,
        { headers }
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
