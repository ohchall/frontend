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

function TodoUpdateModal({
  isOpen,
  todo,
  onSubmit,
  onRequestClose,
  isComplete,
}) {
  const [title, setTitle] = useState(todo.title || "");
  const [content, setContent] = useState(todo.content || "");
  const [date, setDate] = useState(todo.date || "");

  const handleSubmit = () => {
    if (!title.trim() || !content.trim() || !date.trim()) {
      alert("빈 값으로 수정할 수 없습니다.");
      return;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todoDate = new Date(date);
    todoDate.setHours(0, 0, 0, 0);
    const isCompleteToUpdate = todoDate < today;

    onSubmit({
      toDoId: todo.toDoId,
      title,
      content,
      date,
      isComplete: isCompleteToUpdate,
    });
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
                value={title}
                maxLength={24}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <img src={TodoAdd2} alt="content" />
              <input
                type="text"
                name="content"
                placeholder="content"
                value={content}
                maxLength={50}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
            <div>
              <img src={TodoAdd3} alt="date" />
              <input
                type="date"
                name="date"
                placeholder="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
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
