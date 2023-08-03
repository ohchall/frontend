import React, { useState, useEffect } from "react";
import {
  useFetchTodos,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} from "../api/TodoApi";
import { styled } from "styled-components";
import TodoModal from "./TodoModal";
import Calendar from "./Calendar";
import TodoUpdateModal from "./TodoUpdateModal";

function Todo() {
  const { data, isLoading, isError } = useFetchTodos();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [events, setEvents] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [todoToUpdate, setTodoToUpdate] = useState(null);

  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const deleteTodoMutation = useDeleteTodoMutation();
  const updateTodoMutation = useUpdateTodoMutation();

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
    <TodosContainer>
      <Calendar events={events} onMonthChange={onMonthChange} />
      <br></br>
      <button onClick={openModal}>Todo 업로드</button>
      {isModalOpen && (
        <ModalContainer>
          <TodoModal isOpen={isModalOpen} onRequestClose={closeModal} />
        </ModalContainer>
      )}
      <h2>TODO</h2>
      <TodoListContainer>
        <TodoList>
          {filteredTodos.map((todo) => (
            <TodosBox key={todo.id}>
              <div>Title: {todo.title}</div>
              <div>Content: {todo.content}</div>
              <div>Date: {todo.date}</div>
              <button onClick={() => todoDeleteHandler(todo.id)}>삭제</button>
              <button onClick={() => openUpdateModal(todo)}>수정</button>
            </TodosBox>
          ))}
        </TodoList>
      </TodoListContainer>
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
    </TodosContainer>
  );
}

export default Todo;

const TodosContainer = styled.div`
  > button {
    margin-bottom: 10px;
  }
`;

const TodoListContainer = styled.div`
  display: flex;
  overflow-x: auto;
  width: 100%;
  max-width: 400px;
  margin-bottom: 100px;
  scrollbar-width: none;
  -ms-overflow-style: none; /* IE and Edge */
  &::-webkit-scrollbar {
    display: none;
  }
`;

const TodoList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 75px;
`;

const TodosBox = styled.div`
  border: 1px solid #9999;
  border-radius: 10%;
  width: 250px;
  text-align: center;
  margin-right: 10px;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 1;
`;
