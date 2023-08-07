import React, { useState } from "react";

function TodoUpdateModal({ isOpen, todo, onSubmit, onRequestClose }) {
  const [updatedTodo, setUpdatedTodo] = useState({
    id: todo.id,
    title: todo.title,
    content: todo.content,
    date: todo.date,
  });

  const onChangeTodoHandler = (e) => {
    const { name, value } = e.target;
    setUpdatedTodo({
      ...updatedTodo,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    onSubmit(updatedTodo);
  };

  return (
    <>
      {isOpen && (
        <div>
          <h2>Todo 수정</h2>
          <div>
            <input
              type="text"
              name="title"
              placeholder="title"
              value={updatedTodo.title}
              onChange={onChangeTodoHandler}
            ></input>
          </div>
          <div>
            <input
              type="text"
              name="content"
              placeholder="content"
              value={updatedTodo.content}
              onChange={onChangeTodoHandler}
            ></input>
          </div>
          <div>
            <input
              type="date"
              name="date"
              placeholder="date"
              value={updatedTodo.date}
              onChange={onChangeTodoHandler}
            ></input>
          </div>
          <button onClick={handleSubmit}>수정 완료</button>
          <button onClick={onRequestClose}>닫기</button>
        </div>
      )}
    </>
  );
}

export default TodoUpdateModal;
