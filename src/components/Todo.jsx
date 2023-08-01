import React, { useState, useEffect } from "react";
import { useFetchTodos } from "../api/TodoApi";
import { styled } from "styled-components";
import TodoModal from "./TodoModal";
import FullCalendar from "@fullcalendar/react"; // FullCalendar import 추가
import dayGridPlugin from "@fullcalendar/daygrid";

function Todo() {
  const { data, isLoading, isError, refetch } = useFetchTodos();
  const [isModalOpen, setIsModalOpen] = useState(false);
  // FullCalendar 이벤트 형식으로 변환된 Todo 데이터를 담을 상태
  const [events, setEvents] = useState([]);

  // Todo 데이터를 FullCalendar 이벤트 형식으로 변환하는 함수
  const convertTodoToEvent = (todo) => {
    return {
      title: todo.title,
      start: todo.date, // Todo 데이터에 있는 날짜를 이벤트의 시작 날짜로 사용
    };
  };

  // FullCalendar 컴포넌트에 대한 calendarOptions 변수 정의
  const calendarOptions = {
    plugins: [dayGridPlugin],
    initialView: "dayGridMonth",
    buttonText: {
      today: "오늘",
      month: "월",
    },
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (data) {
      const convertedEvents = data.map(convertTodoToEvent);
      setEvents(convertedEvents); // events 상태 업데이트
    }
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }
  return (
    <>
      {/* FullCalendar 컴포넌트에 events 배열을 props로 전달하여 Todo 항목을 표시 */}
      <FullCalendar {...calendarOptions} events={events} />
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
            </TodosBox>
          ))}
        </TodoList>
      </TodosContainer>
    </>
  );
}

export default Todo;

const TodosContainer = styled.div`
  display: flex;
  width: 500px;
`;

const TodoList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const TodosBox = styled.div`
  border: 1px solid black;
  width: 200px;
  text-align: center;
  margin-left: 20px;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;
