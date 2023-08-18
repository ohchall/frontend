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
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");

  const onChangeTodoHandler = (e) => {
    const { name, value } = e.target;
    if (name === "title") setTitle(value);
    if (name === "content") setContent(value);
    if (name === "date") setDate(value);
  };

  const todoSubmithandler = () => {
    if (!title || !content || !date) {
      alert("입력창을 다시 한 번 확인해주세요!");
      return;
    }
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todoDate = new Date(date);
    todoDate.setHours(0, 0, 0, 0);
    const isComplete = todoDate < today;

    addTodoMutation.mutate(
      { title, content, date, isComplete },
      {
        onSuccess: (data) => {
          console.log("저장 성공:", data);
          setTitle("");
          setContent("");
          setDate("");
          onRequestClose();
        },
        onError: (error) => {
          console.error("저장 실패:", error);
        },
      }
    );
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
              value={title}
              maxLength={24}
              onChange={(e) => onChangeTodoHandler(e)}
            ></input>
          </div>
          <div>
            <img src={TodoAdd2} alt="content" />
            <input
              type="text"
              name="content"
              placeholder="content"
              value={content}
              maxLength={50}
              onChange={(e) => onChangeTodoHandler(e)}
            ></input>
          </div>
          <div>
            <img src={TodoAdd3} alt="date" />
            <input
              type="date"
              name="date"
              placeholder="date"
              value={date}
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
