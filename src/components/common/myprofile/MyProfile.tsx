import { useFetchTodos } from "../../../api/TodoApi";
import { startOfWeek, endOfWeek, isWithinInterval, parseISO } from "date-fns";
import {
  MyProfileBlock,
  Header,
  StyledLink,
  LinkContainer,
  StyledLuUser,
  StyledLuHeart,
  StyledLuLogOut,
  StyledLuScrap,
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
    (todo) => !todo.isComplete
  );

  const sortedThisWeekUncompletedTodos = thisWeekUncompletedTodos.sort(
    (a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateA - dateB;
    }
  );

  const motivationQuotes = [
    "지금부터라도 시작하세요!",
    "운동은 건강의 지름길이에요!",
    "힘들 때가 성장하는 시간이에요!",
    "땀은 지방이 우는 소리!",
    "헬스장은 나의 친구!",
    "오늘의 땀이 내일의 미소를 만들어!",
    "지금 힘들면, 내일은 쉬워져요!",
    "무거운 철을 들어, 가벼운 몸을 만들어!",
    "나만의 시간, 건강한 나를 만드는 시간!",
    "네가 원하는 몸, 오늘도 포기하지 마!",
  ];

  const randomQuote =
    motivationQuotes[Math.floor(Math.random() * motivationQuotes.length)];

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
          {/* <StyledLink to="/mypage">
            <StyledLuInbox />
          </StyledLink>
          <StyledLink to="/">
            <StyledLuBell />
          </StyledLink> */}
          <StyledLink to="/scrap">
            <StyledLuScrap />
          </StyledLink>
          <StyledLink to="/liked">
            <StyledLuHeart />
          </StyledLink>
          <StyledLink to="/" onClick={logoutHandler}>
            <StyledLuLogOut />
          </StyledLink>
        </LinkContainer>
      </Header>

      <div>
        <ThisMonthGoal>
          <p>" {randomQuote} "</p>
        </ThisMonthGoal>

        <ThisWeekTodo>
          <p>이번주 투두.</p>
          <div>
            {sortedThisWeekUncompletedTodos.length > 0 ? (
              sortedThisWeekUncompletedTodos.map((todo) => (
                <Todo key={todo.toDoId}>
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
