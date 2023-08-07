import React, { useState } from "react";
import { useAddTodoMutation } from "../../api/TodoApi";

function TodoAddModal({ onRequestClose }) {
  const addTodoMutation = useAddTodoMutation();
  const [todo, setTodo] = useState({
    title: "",
    content: "",
    date: "",
  });

  const onChangeTodoHandler = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setTodo({
      ...todo,
      [name]: value,
    });
  };

  const todoSubmithandler = () => {
    console.log(todo);
    addTodoMutation.mutate(todo, {
      onSuccess: (data) => {
        console.log("저장 성공:", data);
        setTodo({
          title: "",
          content: "",
          date: "",
        });
        onRequestClose();
      },
      onError: (error) => {
        console.error("저장 실패:", error);
      },
    });
  };

  return (
    <>
      <h2>운동 기록 TODO</h2>
      <div>
        <input
          type="text"
          name="title"
          placeholder="title"
          value={todo.title}
          onChange={(e) => onChangeTodoHandler(e)}
        ></input>
      </div>
      <div>
        <input
          type="text"
          name="content"
          placeholder="content"
          value={todo.content}
          onChange={(e) => onChangeTodoHandler(e)}
        ></input>
      </div>
      <div>
        <input
          type="date"
          name="date"
          placeholder="date"
          value={todo.date}
          onChange={(e) => onChangeTodoHandler(e)}
        ></input>
      </div>
      <div>
        <button onClick={todoSubmithandler}>Todo 추가</button>
        <button onClick={onRequestClose}>닫기</button>
      </div>
    </>
  );
}

export default TodoAddModal;
