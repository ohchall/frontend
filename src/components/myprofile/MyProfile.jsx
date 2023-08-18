import { useFetchTodos } from "../../api/TodoApi";
import { startOfWeek, endOfWeek, isWithinInterval, parseISO } from "date-fns";
import {
  MyProfileBlock,
  Header,
  StyledLink,
  LinkContainer,
  StyledLuUser,
  StyledLuInbox,
  StyledLuBell,
  StyledLuLogOut,
  ThisMonthGoal,
  ThisWeekTodo,
  Todo,
  Week,
  WeekSpan,
} from "./MyProfile.style";


function MyProfile() {
  const logoutHandler = () => {
    localStorage.removeItem("Access");
    localStorage.removeItem("Refresh");
    window.location.reload();
  };

  const { data, isLoading, isError } = useFetchTodos();
  const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
  const startOfThisWeek = startOfWeek(new Date());
  const endOfThisWeek = endOfWeek(new Date());
  const thisWeekTodos = data
    ? data.filter((todo) => {
        const todoDate = parseISO(todo.date);
        return isWithinInterval(todoDate, {
          start: startOfThisWeek,
          end: endOfThisWeek,
        });
      })
    : [];

  const thisWeekUncompletedTodos = thisWeekTodos.filter(
    (todo) => !todo.isSuccess
  );

  const sortedThisWeekUncompletedTodos = thisWeekUncompletedTodos.sort(
    (a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateA - dateB; // 날짜가 빠른 순으로 정렬
    }
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  return (
    <MyProfileBlock>
      <Header>
        <p>김오챌</p>
        <LinkContainer>
          <StyledLink to="/mypage">
            <StyledLuUser />
          </StyledLink>
          <StyledLink to="/mypage">
            <StyledLuInbox />
          </StyledLink>
          <StyledLink to="/">
            <StyledLuBell />
          </StyledLink>
          <StyledLink to="/" onClick={logoutHandler}>
            <StyledLuLogOut />
          </StyledLink>
        </LinkContainer>
      </Header>

      <div>
        <ThisMonthGoal>
          <p>이번달 목표.</p>
          <span>매주 3회 이상 운동하기</span>
        </ThisMonthGoal>

        <ThisWeekTodo>
          <p>이번주 투두.</p>
          <div>
            {sortedThisWeekUncompletedTodos.length > 0 ? (
              sortedThisWeekUncompletedTodos.map((todo) => (
                <Todo key={todo.id}>
                  <span>{todo.content}</span>
                  <Week>
                    {daysOfWeek.map((day, index) => (
                      <WeekSpan
                        key={day}
                        $isCurrent={index === new Date(todo.date).getDay()}
                      >
                        {day}
                      </WeekSpan>
                    ))}
                  </Week>
                </Todo>
              ))
            ) : (
              <h3>이번주 투두가 없습니다....</h3>
            )}
          </div>
        </ThisWeekTodo>
      </div>
    </MyProfileBlock>
  );
}

export default MyProfile;
