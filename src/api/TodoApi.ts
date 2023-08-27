import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import secureLocalStorage from "react-secure-storage";

export type Todo = {
  title: string;
  content: string;
  date: string;
  isComplete?: boolean;
};

type ToDoId = string;

export type UpdatedTodo = Todo & { toDoId: ToDoId };

export const useAddTodoMutation = () => {
  const access = secureLocalStorage.getItem("Access");
  const refresh = secureLocalStorage.getItem("Refresh");
  const headers = {
    Access: `${access}`,
    Refresh: `${refresh}`,
  };
  const queryClient = useQueryClient();
  return useMutation(
    (todo: Todo) =>
      axios.post(
        `${process.env.REACT_APP_SERVER_URL}/auth/mypage/todos`,
        todo,
        { headers }
      ),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["todos"]);
      },
    }
  );
};

export const useDeleteTodoMutation = () => {
  const queryClient = useQueryClient();
  const access = secureLocalStorage.getItem("Access");
  const refresh = secureLocalStorage.getItem("Refresh");
  const headers = {
    Access: `${access}`,
    Refresh: `${refresh}`,
  };
  return useMutation(
    (toDoId: ToDoId) =>
      axios.delete(
        `${process.env.REACT_APP_SERVER_URL}/auth/mypage/todos/${toDoId}`,
        {
          headers,
        }
      ),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["todos"]);
      },
    }
  );
};

export const useUpdateTodoMutation = () => {
  const access = secureLocalStorage.getItem("Access");
  const refresh = secureLocalStorage.getItem("Refresh");
  const headers = {
    Access: `${access}`,
    Refresh: `${refresh}`,
  };
  const queryClient = useQueryClient();
  return useMutation(
    (updatedTodo: UpdatedTodo) =>
      axios.put(
        `${process.env.REACT_APP_SERVER_URL}/auth/mypage/todos/${updatedTodo.toDoId}`,
        updatedTodo,
        { headers }
      ),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["todos"]);
      },
    }
  );
};

const todosQueryKey = ["todos"];

export const useFetchTodos = () => {
  const access = secureLocalStorage.getItem("Access");
  const refresh = secureLocalStorage.getItem("Refresh");
  const headers = {
    Access: `${access}`,
    Refresh: `${refresh}`,
  };

  return useQuery<UpdatedTodo[]>(todosQueryKey, async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/auth/mypage/todos`,
      { headers }
    );

    return data;
  });
};

export const useUpdateIsSuccessMutation = () => {
  const access = secureLocalStorage.getItem("Access");
  const refresh = secureLocalStorage.getItem("Refresh");
  const headers = {
    Access: `${access}`,
    Refresh: `${refresh}`,
  };
  const queryClient = useQueryClient();
  return useMutation(
    async (updatedTodo: UpdatedTodo) => {
      const response = await axios.put(
        `${process.env.REACT_APP_SERVER_URL}/auth/mypage/todos/${updatedTodo.toDoId}`,
        updatedTodo,
        { headers }
      );
      return response.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["todos"]);
      },
    }
  );
};
