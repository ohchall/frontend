import { useState, useEffect } from "react";

const useTodoState = (todos) => {
  const [visibleTodoId, setVisibleTodoId] = useState(null);
  const [events, setEvents] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());

  const toggleButtonsVisibility = (id) => {
    if (visibleTodoId === id) {
      setVisibleTodoId(null);
    } else {
      setVisibleTodoId(id);
    }
  };

  const onMonthChange = (month) => {
    setCurrentMonth(month);
  };

  useEffect(() => {
    if (todos) {
      const filtered = todos.filter((todo) => {
        const todoMonth = new Date(todo.date).getMonth();
        return todoMonth === currentMonth;
      });
      setFilteredTodos(filtered);

      let nearestTodo = null;
      let nearestDiff = Infinity;
      const today = new Date();
      todos.forEach((todo) => {
        if (!todo.isComplete) {
          const diff = Math.abs(new Date(todo.date) - today);
          if (diff < nearestDiff) {
            nearestDiff = diff;
            nearestTodo = todo;
          }
        }
      });

      const convertedEvents = todos.map((todo) => {
        const isNearest = nearestTodo && nearestTodo.toDoId === todo.toDoId;
        return {
          title: todo.title,
          start: todo.date,
          isComplete: todo.isComplete,
          isNearest, // 여기에 isNearest 추가
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
