import React, { useState } from "react";
import { useAddTodoMutation } from "../../api/TodoApi";
import {
  ModalContainer,
  ModalContent,
  ModalTitle,
  ModalShadow,
} from "./TodoAddModal.style";
import TodoAdd1 from "../../assets/TodoAdd1.svg";
import TodoAdd2 from "../../assets/TodoAdd2.svg";
import TodoAdd3 from "../../assets/TodoAdd3.svg";
import TodoAdd4 from "../../assets/TodoAdd4.svg";

function TodoAddModal({ onRequestClose }) {
  const addTodoMutation = useAddTodoMutation();
  const [todo, setTodo] = useState({
    title: "",
    content: "",
    date: "",
    isSuccess: false,
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
    <ModalShadow>
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
              value={todo.title}
              onChange={(e) => onChangeTodoHandler(e)}
            ></input>
          </div>
          <div>
            <img src={TodoAdd2} alt="content" />
            <input
              type="text"
              name="content"
              placeholder="content"
              value={todo.content}
              onChange={(e) => onChangeTodoHandler(e)}
            ></input>
          </div>
          <div>
            <img src={TodoAdd3} alt="date" />
            <input
              type="date"
              name="date"
              placeholder="date"
              value={todo.date}
              onChange={(e) => onChangeTodoHandler(e)}
            ></input>
          </div>
          <div>
            <button onClick={todoSubmithandler}>등록하기</button>
          </div>
        </ModalContent>
      </ModalContainer>
    </ModalShadow>
  );
}

export default TodoAddModal;
