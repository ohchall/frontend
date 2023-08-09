import React, { useState, useEffect } from "react";
import {
  useFetchTodos,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} from "../../api/TodoApi";
import {
  TodosContainer,
  TodoListContainer,
  TodosList,
  TodosBox,
  ModalContainer,
  CalendarCenterBox,
  MoreButton,
  MoreButtonContainer,
  DayColor,
} from "./TodoList.style";
import TodoAddModal from "./TodoAddModal";
import Calendar from "../calendar/Calendar";
import TodoUpdateModal from "./TodoUpdateModal";

function TodoList() {
  const { data, isLoading, isError } = useFetchTodos();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [events, setEvents] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [todoToUpdate, setTodoToUpdate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const deleteTodoMutation = useDeleteTodoMutation();
  const updateTodoMutation = useUpdateTodoMutation();
  const [visibleTodoId, setVisibleTodoId] = useState(null);

  const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];

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

  const convertTodoToEvent = (todo) => {
    return {
      title: todo.title,
      start: todo.date,
    };
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openUpdateModal = (todo) => {
    setTodoToUpdate(todo);
    setIsUpdateModalOpen(true);
  };

  const closeUpdateModal = () => {
    setIsUpdateModalOpen(false);
  };

  useEffect(() => {
    if (data) {
      const convertedEvents = data.map(convertTodoToEvent);
      setEvents(convertedEvents);

      const filtered = data.filter((todo) => {
        const todoMonth = new Date(todo.date).getMonth();
        return todoMonth === currentMonth;
      });
      setFilteredTodos(filtered);
    }
  }, [data, currentMonth]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  const todoDeleteHandler = async (todoId) => {
    try {
      await deleteTodoMutation.mutateAsync(todoId);
      console.log("삭제 성공");
    } catch (error) {
      console.error("삭제 실패:", error);
    }
  };

  //
  const todoUpdateHandler = async (updatedTodo) => {
    try {
      await updateTodoMutation.mutateAsync(updatedTodo);
      console.log("수정 성공");
      closeUpdateModal();
    } catch (error) {
      console.error("수정 실패:", error);
    }
  };

  return (
    <>
      <CalendarCenterBox>
        <Calendar events={events} onMonthChange={onMonthChange} />
      </CalendarCenterBox>
      <br></br>
      {isModalOpen && (
        <ModalContainer>
          <TodoAddModal isOpen={isModalOpen} onRequestClose={closeModal} />
        </ModalContainer>
      )}
      <TodosContainer>
        <h2>투두 리스트</h2>
        <TodoListContainer>
          <TodosList>
            {filteredTodos.map((todo) => (
              <TodosBox key={todo.id}>
                <input type="checkbox"></input>
                <div>
                  <h2>{todo.title}</h2>
                  <h3>{todo.content}</h3>
                  <h4>날짜 | {todo.date}</h4>
                  <div>
                    {daysOfWeek.map((day, index) => (
                      <DayColor
                        key={index}
                        $isCurrent={index === new Date(todo.date).getDay()}
                      >
                        {day}
                      </DayColor>
                    ))}
                  </div>
                </div>
                <MoreButton onClick={() => toggleButtonsVisibility(todo.id)}>
                  ...
                </MoreButton>
                {visibleTodoId === todo.id && (
                  <MoreButtonContainer>
                    <button onClick={() => openUpdateModal(todo)}>수 정</button>
                    <button onClick={() => todoDeleteHandler(todo.id)}>
                      삭 제
                    </button>
                  </MoreButtonContainer>
                )}
              </TodosBox>
            ))}
          </TodosList>
        </TodoListContainer>
        <button onClick={openModal}>+</button>
      </TodosContainer>
      {isUpdateModalOpen && (
        <ModalContainer>
          <TodoUpdateModal
            isOpen={isUpdateModalOpen}
            todo={todoToUpdate}
            onSubmit={todoUpdateHandler}
            onRequestClose={closeUpdateModal}
          />
        </ModalContainer>
      )}
    </>
  );
}

export default TodoList;
