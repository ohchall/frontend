import React from "react";
import TodoDetailList from "../components/todo/TodoDetailList";
import { styled } from "styled-components";

function TodoListPage() {
  return (
    <TodoDetailListSection>
      <TodoDetailList />
    </TodoDetailListSection>
  );
}

export default TodoListPage;

const TodoDetailListSection = styled.section`
  width: 100%;
  height: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  & h1 {
    font-size: 20px;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;
