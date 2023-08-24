import { useState, useEffect } from "react";
import { UpdatedTodo } from "../../src/api/TodoApi";

type TodoEvent = {
  title: string;
  date: string;
  isComplete: boolean;
  isNearest?: boolean;
};

const useTodoState = (todos: UpdatedTodo[] | undefined) => {
  const [visibleTodoId, setVisibleTodoId] = useState<string | null>(null);
  const [events, setEvents] = useState<TodoEvent[]>([]);
  const [filteredTodos, setFilteredTodos] = useState<UpdatedTodo[]>([]);
  const [currentMonth, setCurrentMonth] = useState<number>(
    new Date().getMonth()
  );

  const toggleButtonsVisibility = (id: string | null) => {
    if (visibleTodoId === id) {
      setVisibleTodoId(null);
    } else {
      setVisibleTodoId(id);
    }
  };

  const onMonthChange = (month: number) => {
    setCurrentMonth(month);
  };

  useEffect(() => {
    if (!todos) return;
    if (todos) {
      const filtered = todos.filter((todo) => {
        const todoMonth = new Date(todo.date).getMonth();
        return todoMonth === currentMonth;
      });
      setFilteredTodos(filtered);

      let nearestTodo: UpdatedTodo | null = null;
      let nearestDiff = Infinity;
      const today = new Date();
      todos.forEach((todo) => {
        if (!todo.isComplete) {
          const diff = Math.abs(
            new Date(todo.date).getTime() - today.getTime()
          );
          if (diff < nearestDiff) {
            nearestDiff = diff;
            nearestTodo = todo;
          }
        }
      });

      const convertedEvents: TodoEvent[] = todos.map((todo) => {
        const isNearest = nearestTodo
          ? nearestTodo.toDoId === todo.toDoId
          : undefined;
        return {
          title: todo.title,
          date: todo.date,
          isComplete: todo.isComplete ?? false,
          isNearest,
        };
      });
      setEvents(convertedEvents);
    }
  }, [todos, currentMonth]);

  return {
    events,
    filteredTodos,
    currentMonth,
    toggleButtonsVisibility,
    onMonthChange,
    visibleTodoId,
  };
};

export default useTodoState;
