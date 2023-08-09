import React, { useState } from "react";
import {
  ModalContainer,
  ModalTitle,
  ModalContent,
  ModalShadow,
} from "./TodoUpdateModal.style";

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
    <ModalShadow>
      {isOpen && (
        <ModalContainer>
          <ModalTitle>
            <h2>투두리스트</h2>
            <button onClick={onRequestClose}>❌</button>
          </ModalTitle>
          <ModalContent>
            <div>
              <span>⛹️</span>
              <input
                type="text"
                name="title"
                placeholder="title"
                value={updatedTodo.title}
                onChange={onChangeTodoHandler}
              ></input>
            </div>
            <div>
              <span>🏋️</span>
              <input
                type="text"
                name="content"
                placeholder="content"
                value={updatedTodo.content}
                onChange={onChangeTodoHandler}
              ></input>
            </div>
            <div>
              <span>🏌️</span>
              <input
                type="date"
                name="date"
                placeholder="date"
                value={updatedTodo.date}
                onChange={onChangeTodoHandler}
              ></input>
            </div>
            <div>
              <button onClick={handleSubmit}>수정하기</button>
            </div>
          </ModalContent>
        </ModalContainer>
      )}
    </ModalShadow>
  );
}

export default TodoUpdateModal;
