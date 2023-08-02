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
  const deleteTodoMutation = useDeleteTodoMutation();
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [todoToUpdate, setTodoToUpdate] = useState(null);
  const updateTodoMutation = useUpdateTodoMutation();

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
    }
  }, [data]);

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
      <Calendar events={events} />
      <button onClick={openModal}>Todo 업로드</button>
      {isModalOpen && (
        <ModalContainer>
          <TodoModal isOpen={isModalOpen} onRequestClose={closeModal} />
          <button onClick={closeModal}>닫기</button>
        </ModalContainer>
      )}
      <h2>Todo</h2>
      <TodosContainer>
        <TodoList>
          {data.map((todo) => (
            <TodosBox key={todo.id}>
              <div>Title: {todo.title}</div>
              <div>Content: {todo.content}</div>
              <div>Date: {todo.date}</div>
              <button onClick={() => todoDeleteHandler(todo.id)}>삭제</button>
              <button onClick={() => openUpdateModal(todo)}>수정</button>
            </TodosBox>
          ))}
        </TodoList>
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

export default Todo;

const TodosContainer = styled.div`
  display: flex;
  width: 100%;
`;

const TodoList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const TodosBox = styled.div`
  border: 1px solid black;
  width: 200px;
  height: 80px;
  text-align: center;
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
  z-index: 1;
`;
