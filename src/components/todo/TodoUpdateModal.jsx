import React, { useState } from "react";
import {
  ModalContainer,
  ModalTitle,
  ModalContent,
  ModalShadow,
} from "./TodoUpdateModal.style";
import TodoAdd1 from "../../assets/TodoAdd1.svg";
import TodoAdd2 from "../../assets/TodoAdd2.svg";
import TodoAdd3 from "../../assets/TodoAdd3.svg";
import TodoAdd4 from "../../assets/TodoAdd4.svg";

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
            <img src={TodoAdd4} onClick={onRequestClose} alt="x" />
          </ModalTitle>
          <ModalContent>
            <div>
              <img src={TodoAdd1} alt="title" />
              <input
                type="text"
                name="title"
                placeholder="title"
                value={updatedTodo.title}
                onChange={onChangeTodoHandler}
              ></input>
            </div>
            <div>
              <img src={TodoAdd2} alt="content" />
              <input
                type="text"
                name="content"
                placeholder="content"
                value={updatedTodo.content}
                onChange={onChangeTodoHandler}
              ></input>
            </div>
            <div>
              <img src={TodoAdd3} alt="date" />
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
