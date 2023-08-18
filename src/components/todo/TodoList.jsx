import React, { useState } from "react";
import {
  useFetchTodos,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
  useUpdateIsSuccessMutation,
} from "../../api/TodoApi";
import {
  TodosContainer,
  TodoListContainer,
  TodosList,
  TodosBox,
  CalendarCenterBox,
  MoreButton,
  MoreButtonContainer,
  DayColor,
} from "./TodoList.style";
import TodoAddModal from "./TodoAddModal";
import Calendar from "../calendar/Calendar";
import TodoUpdateModal from "./TodoUpdateModal";
import { useNavigate } from "react-router-dom";
import useTodoState from "../../hook/useTodoState";
import useModal from "../../hook/useModal";

function TodoList() {
  const { data: todos, isLoading, isError } = useFetchTodos();
  const [todoToUpdate, setTodoToUpdate] = useState(null);
  const deleteTodoMutation = useDeleteTodoMutation();
  const updateTodoMutation = useUpdateTodoMutation();
  const updateisCompleteMutation = useUpdateIsSuccessMutation();
  const navigate = useNavigate();
  const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
  const {
    events,
    filteredTodos,
    toggleButtonsVisibility,
    onMonthChange,
    visibleTodoId,
  } = useTodoState(todos);
  const addTodoModal = useModal();
  const updateTodoModal = useModal();

  const handleCheckboxChange = async (todo) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (new Date(todo.date) < today) {
      console.log("오늘 이전의 todo는 변경할 수 없습니다.");
      return;
    }

    const updatedTodo = { ...todo, isComplete: !todo.isComplete };
    try {
      await updateisCompleteMutation.mutateAsync(updatedTodo);
      console.log("상태 업데이트 성공");
    } catch (error) {
      console.error("상태 업데이트 실패:", error);
    }
  };

  const todoDeleteHandler = async (todoId) => {
    try {
      await deleteTodoMutation.mutateAsync(todoId);
      console.log("삭제 성공");
      toggleButtonsVisibility(null);
    } catch (error) {
      console.log("todoId", todoId);
      console.error("삭제 실패:", error);
    }
  };

  const todoUpdateHandler = async (updatedTodo) => {
    try {
      await updateTodoMutation.mutateAsync(updatedTodo);
      console.log("수정 성공");
      updateTodoModal.closeModal();
      toggleButtonsVisibility(null);
    } catch (error) {
      console.error("수정 실패:", error);
    }
  };

  const onClickMoveTodolist = () => {
    navigate("/mypage/todolist");
  };

  const uncompletedTodos = filteredTodos.filter((todo) => !todo.isComplete);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <>
      <CalendarCenterBox>
        <Calendar events={events} onMonthChange={onMonthChange} />
      </CalendarCenterBox>
      <br></br>
      {addTodoModal.isOpen && (
        <TodoAddModal
          isOpen={addTodoModal.isOpen}
          onRequestClose={addTodoModal.closeModal}
        />
      )}
      <TodosContainer>
        <div className="TodolsitTitle">
          <h2>투두 리스트</h2>
          <p onClick={() => onClickMoveTodolist()}>더보기</p>
        </div>
        <TodoListContainer>
          <TodosList>
            {uncompletedTodos.map((todo) => (
              <TodosBox key={todo.toDoId} $isComplete={todo.isComplete}>
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange(todo)}
                  checked={todo.isComplete}
                ></input>
                <div className="TodolistContent">
                  <h2>{todo.title}</h2>
                  <h3>{todo.content}</h3>
                  <h4>날짜 | {todo.date}</h4>
                  <div>
                    {daysOfWeek.map((day, index) => (
                      <DayColor
                        key={index}
                        $isCurrent={index === new Date(todo.date).getDay()}
                        $isComplete={todo.isComplete}
                      >
                        {day}
                      </DayColor>
                    ))}
                  </div>
                </div>
                <MoreButton
                  onClick={() => toggleButtonsVisibility(todo.toDoId)}
                >
                  ...
                </MoreButton>
                {visibleTodoId === todo.toDoId && (
                  <MoreButtonContainer>
                    <button
                      onClick={() => {
                        setTodoToUpdate(todo);
                        updateTodoModal.openModal();
                      }}
                    >
                      수 정
                    </button>
                    <button onClick={() => todoDeleteHandler(todo.toDoId)}>
                      삭 제
                    </button>
                  </MoreButtonContainer>
                )}
              </TodosBox>
            ))}
          </TodosList>
        </TodoListContainer>
        <button onClick={addTodoModal.openModal}>+</button>
      </TodosContainer>
      {updateTodoModal.isOpen && (
        <TodoUpdateModal
          isOpen={updateTodoModal.isOpen}
          todo={todoToUpdate}
          onSubmit={todoUpdateHandler}
          onRequestClose={updateTodoModal.closeModal}
        />
      )}
    </>
  );
}

export default TodoList;
