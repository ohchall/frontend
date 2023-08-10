import React, { useState, useEffect } from "react";
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
  MoreButton,
  MoreButtonContainer,
  DayColor,
} from "./TodoDetailList.style";
import TodoAddModal from "./TodoAddModal";
import TodoUpdateModal from "./TodoUpdateModal";

function TodoList() {
  const { data, isLoading, isError } = useFetchTodos();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [events, setEvents] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [todoToUpdate, setTodoToUpdate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const deleteTodoMutation = useDeleteTodoMutation();
  const updateTodoMutation = useUpdateTodoMutation();
  const [visibleTodoId, setVisibleTodoId] = useState(null);
  const updateIsSuccessMutation = useUpdateIsSuccessMutation();

  const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];

  const toggleButtonsVisibility = (id) => {
    if (visibleTodoId === id) {
      setVisibleTodoId(null);
    } else {
      setVisibleTodoId(id);
    }
  };

  const handleCheckboxChange = async (todo) => {
    const updatedTodo = { ...todo, isSuccess: !todo.isSuccess };
    try {
      await updateIsSuccessMutation.mutateAsync(updatedTodo);
      console.log("상태 업데이트 성공");
    } catch (error) {
      console.error("상태 업데이트 실패:", error);
    }
  };

  const convertTodoToEvent = (todo) => {
    return {
      title: todo.title,
      start: todo.date,
    };
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openUpdateModal = (todo) => {
    setTodoToUpdate(todo);
    setIsUpdateModalOpen(true);
  };

  const closeUpdateModal = () => {
    setIsUpdateModalOpen(false);
  };

  useEffect(() => {
    if (data) {
      const convertedEvents = data.map(convertTodoToEvent);
      setEvents(convertedEvents);

      const filtered = data.filter((todo) => {
        const todoMonth = new Date(todo.date).getMonth();
        return todoMonth === currentMonth;
      });
      setFilteredTodos(filtered);
    }
  }, [data, currentMonth]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  const todoDeleteHandler = async (todoId) => {
    try {
      await deleteTodoMutation.mutateAsync(todoId);
      console.log("삭제 성공");
      setVisibleTodoId(null);
    } catch (error) {
      console.error("삭제 실패:", error);
    }
  };

  //
  const todoUpdateHandler = async (updatedTodo) => {
    try {
      await updateTodoMutation.mutateAsync(updatedTodo);
      console.log("수정 성공");
      closeUpdateModal();
      setVisibleTodoId(null);
    } catch (error) {
      console.error("수정 실패:", error);
    }
  };

  const uncompletedTodos = filteredTodos.filter((todo) => !todo.isSuccess);
  const completedTodos = filteredTodos.filter((todo) => todo.isSuccess);

  return (
    <>
      {isModalOpen && (
        <TodoAddModal isOpen={isModalOpen} onRequestClose={closeModal} />
      )}
      <TodosContainer>
        <div className="TodolsitTitle">
          <h2>미완료</h2>
        </div>
        <TodoListContainer>
          <TodosList>
            {uncompletedTodos.map((todo) => (
              <TodosBox key={todo.id} $isSuccess={todo.isSuccess}>
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange(todo)}
                  checked={todo.isSuccess}
                ></input>
                <div>
                  <h2>{todo.title}</h2>
                  <h3>{todo.content}</h3>
                  <h4>날짜 | {todo.date}</h4>
                  <div>
                    {daysOfWeek.map((day, index) => (
                      <DayColor
                        key={index}
                        $isCurrent={index === new Date(todo.date).getDay()}
                        $isSuccess={todo.isSuccess}
                      >
                        {day}
                      </DayColor>
                    ))}
                  </div>
                </div>
                <MoreButton onClick={() => toggleButtonsVisibility(todo.id)}>
                  ...
                </MoreButton>
                {visibleTodoId === todo.id && (
                  <MoreButtonContainer>
                    <button onClick={() => openUpdateModal(todo)}>수 정</button>
                    <button onClick={() => todoDeleteHandler(todo.id)}>
                      삭 제
                    </button>
                  </MoreButtonContainer>
                )}
              </TodosBox>
            ))}
          </TodosList>
        </TodoListContainer>
        <div className="TodolsitTitle">
          <h2>완료</h2>
        </div>
        <TodoListContainer>
          <TodosList>
            {completedTodos.map((todo) => (
              <TodosBox key={todo.id} $isSuccess={todo.isSuccess}>
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange(todo)}
                  checked={todo.isSuccess}
                ></input>
                <div>
                  <h2>{todo.title}</h2>
                  <h3>{todo.content}</h3>
                  <h4>날짜 | {todo.date}</h4>
                  <div>
                    {daysOfWeek.map((day, index) => (
                      <DayColor
                        key={index}
                        $isCurrent={index === new Date(todo.date).getDay()}
                        $isSuccess={todo.isSuccess}
                      >
                        {day}
                      </DayColor>
                    ))}
                  </div>
                </div>
                <MoreButton onClick={() => toggleButtonsVisibility(todo.id)}>
                  ...
                </MoreButton>
                {visibleTodoId === todo.id && (
                  <MoreButtonContainer>
                    <button onClick={() => openUpdateModal(todo)}>수 정</button>
                    <button onClick={() => todoDeleteHandler(todo.id)}>
                      삭 제
                    </button>
                  </MoreButtonContainer>
                )}
              </TodosBox>
            ))}
          </TodosList>
        </TodoListContainer>
      </TodosContainer>
      {isUpdateModalOpen && (
        <TodoUpdateModal
          isOpen={isUpdateModalOpen}
          todo={todoToUpdate}
          onSubmit={todoUpdateHandler}
          onRequestClose={closeUpdateModal}
        />
      )}
    </>
  );
}

export default TodoList;
