import { useState, useEffect } from "react";
import {
  UpdatedTodo,
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
  TodoCompleteListContainer,
} from "./TodoDetailList.style";
import TodoAddModal from "./TodoAddModal";
import TodoUpdateModal from "./TodoUpdateModal";

type Todo = UpdatedTodo;

function TodoDetailList() {
  const { data, isLoading, isError } = useFetchTodos();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [, setEvents] = useState<any[]>([]);
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>([]);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState<boolean>(false);
  const [todoToUpdate, setTodoToUpdate] = useState<Todo | null>(null);
  const currentMonth = new Date().getMonth();
  const deleteTodoMutation = useDeleteTodoMutation();
  const updateTodoMutation = useUpdateTodoMutation();
  const [visibleTodoId, setVisibleTodoId] = useState<string | null>(null);
  const updateisCompleteMutation = useUpdateIsSuccessMutation();
  const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];

  const toggleButtonsVisibility = (id: string) => {
    if (visibleTodoId === id) {
      setVisibleTodoId(null);
    } else {
      setVisibleTodoId(id);
    }
  };

  const handleCheckboxChange = async (todo: Todo) => {
    const today = new Date();
    today.setHours(24, 0, 0, 0);
    if (new Date(todo.date) > today) {
      alert("이후 일정을 미리 완료할 수 없습니다.");
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

  type TodoEvent = {
    title: string;
    start: string;
    isComplete: boolean;
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openUpdateModal = (todo: Todo) => {
    setTodoToUpdate(todo);
    setIsUpdateModalOpen(true);
  };

  const closeUpdateModal = () => {
    setIsUpdateModalOpen(false);
  };

  useEffect(() => {
    const convertTodoToEvent = (todo: Todo): TodoEvent => {
      return {
        title: todo.title,
        start: todo.date,
        isComplete: todo.isComplete ?? false,
      };
    };

    if (data) {
      const convertedEvents: TodoEvent[] = data.map(convertTodoToEvent);
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

  const todoDeleteHandler = async (todoId: string) => {
    try {
      await deleteTodoMutation.mutateAsync(todoId);
      alert("일정이 삭제되었습니다.");
      setVisibleTodoId(null);
    } catch (error) {
      console.error("삭제 실패:", error);
    }
  };

  const todoUpdateHandler = async (updatedTodo: Todo) => {
    try {
      await updateTodoMutation.mutateAsync(updatedTodo);
      console.log("수정 성공");
      closeUpdateModal();
      setVisibleTodoId(null);
    } catch (error) {
      console.error("수정 실패:", error);
    }
  };

  const uncompletedTodos = filteredTodos.filter((todo) => !todo.isComplete);
  const completedTodos = filteredTodos.filter((todo) => todo.isComplete);

  const sortedUncompletedTodos = [...uncompletedTodos].sort((a, b) => {
    // 날짜를 Date 객체로 변환하여 비교
    const dateA: any = new Date(a.date);
    const dateB: any = new Date(b.date);
    return dateA - dateB;
  });

  const sortedCompletedTodos = [...completedTodos].sort((a, b) => {
    // 날짜를 Date 객체로 변환하여 비교
    const dateA: any = new Date(a.date);
    const dateB: any = new Date(b.date);
    return dateA - dateB;
  });

  return (
    <>
      {isModalOpen && <TodoAddModal onRequestClose={closeModal} />}
      <TodosContainer>
        <div className="TodolsitTitle">
          <h2>미완료</h2>
        </div>
        <TodoListContainer>
          <TodosList>
            {sortedUncompletedTodos.map((todo) => (
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
                  <MoreButtonContainer
                    visible={visibleTodoId === todo.toDoId ? "true" : "false"}
                  >
                    <button onClick={() => openUpdateModal(todo)}>수 정</button>
                    <button onClick={() => todoDeleteHandler(todo.toDoId)}>
                      삭 제
                    </button>
                  </MoreButtonContainer>
                )}
              </TodosBox>
            ))}
          </TodosList>
        </TodoListContainer>
        <br></br>
        <div className="TodolsitTitle">
          <h2>완료</h2>
        </div>
        <TodoCompleteListContainer>
          <TodosList>
            {sortedCompletedTodos.map((todo) => (
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
                  <MoreButtonContainer
                    visible={visibleTodoId === todo.toDoId ? "true" : "false"}
                  >
                    <button onClick={() => openUpdateModal(todo)}>수 정</button>
                    <button onClick={() => todoDeleteHandler(todo.toDoId)}>
                      삭 제
                    </button>
                  </MoreButtonContainer>
                )}
              </TodosBox>
            ))}
          </TodosList>
        </TodoCompleteListContainer>
      </TodosContainer>
      {isUpdateModalOpen && (
        <TodoUpdateModal
          isOpen={isUpdateModalOpen}
          todo={todoToUpdate}
          onSubmit={todoUpdateHandler}
          onRequestClose={closeUpdateModal}
          isComplete
        />
      )}
    </>
  );
}

export default TodoDetailList;
