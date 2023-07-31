import React from "react";
import { useFetchTodos } from "../api/TodoApi";
import { styled } from "styled-components";

function MyPage() {
  const { data, isLoading, isError } = useFetchTodos();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }

  return (
    <>
      <h2>My Page</h2>
      <ul>
        {data.map((todo) => (
          <TodosDiv key={todo.id}>
            <div>Title: {todo.title}</div>
            <div>Content: {todo.content}</div>
            <div>Date: {todo.date}</div>
          </TodosDiv>
        ))}
      </ul>
    </>
  );
}

export default MyPage;

const TodosDiv = styled.div`
  border: 1px solid black;
`;
