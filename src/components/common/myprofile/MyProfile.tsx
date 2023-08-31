import { useFetchTodos } from "../../../api/TodoApi";
import { startOfWeek, endOfWeek, isWithinInterval, parseISO } from "date-fns";
import {
  MyProfileBlock,
  Header,
  StyledLink,
  LinkContainer,
  StyledLuUser,
  // StyledLuHeart,
  StyledLuLogOut,
  StyledLuScrap,
  ThisMonthGoal,
  ThisWeekTodo,
  Todo,
  Week,
  WeekSpan,
} from "./MyProfile.style";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/config/ConfigStore";

function MyProfile() {
  const logoutHandler = () => {
    localStorage.removeItem("Access");
    localStorage.removeItem("Refresh");
    window.location.reload();
  };

  const userInfo = useSelector((state: RootState) => state.user);
  // console.log(userInfo);

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
    "운동하라. 잘 먹어라. 인내하라. 당신의 몸은 보답할 것이다. -작자 미상",
    "운동은 사람의 몸과 감정과 정신력의 창조적 변화를 위한 약이다. -캐럴 웰치",
    "오늘 당신이 느끼는 고통은 내일 당신이 느낄 힘이 될 것이다. -작자 미상",
    "변명을 늘어 놓는 것은 한 시간에 0칼로리 밖에 소모하지 않는다. -작자 미상",
    "당신의 몸은 해 낼 수 있다. 당신의 마음만 설득하면 된다. -작자 미상",
    "정확하게 반복하고 허세 없이 운동해라. -제이 커틀러",
    "의지로 바꿀 수 있는 유일한 것이 몸 밖에 없더라구요. -한혜진",
    "나를 배부르게 하는 것들이 나를 파괴한다. -안젤리나 졸리",
    "태어나서 한번도 야식을 먹어본 적이 없어요. -김연아",
    "인생은 살이 쪘을 때와 안 쪘을 때로 나뉜다. -이소라",
    "운동이 끝나고 먹는 거기까지가 운동이다. -김종국",
    "독서는 마음을 위한 것이고, 운동은 몸을 위한 것이다. -조셉 에디슨",
    "세상에 있는 유일한 나쁜 운동은 안하는 운동뿐이다. -작자 미상",
    "지금은 이 운동이 힘들지만, 언젠가는 워밍업이 될 것이다. -작자 미상",
    "남들이 그만둘 때, 난 계속한다. -라자르 안젤로프",
    "포기는 선택이지 운명이 아니예요. -바비 로버트",
    "간단해요, 흔들리면 그건 지방이예요. -아놀드 슈왈 제네거",
    "몸을 만들고 싶으면 말로 떠들지 말고 30분이라도 체육관을 가서 몸으로 떠들어라. -제이든 스타뎀",
    "내가 운동하는 이유는 삶의 질을 높여 인생을 즐기기 위함이다. -케너스 H. 쿠퍼",
    "아침에 일어나 운동하는 것이, 매일 거울을 보고 자신의 모습을 싫어하는 것보다 쉬운 법이다. -작자 미상",
    "다이어트를 할 때 생각을 맣이 하지 마세요. 그냥 행동만 하면 돼요. 적게 먹을 것, 운동할 것, 꾸준히 할 것. -김단순",
  ];

  const parsedMotivationQuotes = motivationQuotes.map((quote) => {
    const [content, author] = quote.split(" -");
    return { content, author };
  });

  const randomQuoteObj =
    parsedMotivationQuotes[
      Math.floor(Math.random() * parsedMotivationQuotes.length)
    ];

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  return (
    <MyProfileBlock>
      <Header>
        <p>{userInfo.nickname}</p>
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
          {/* <StyledLink to="/liked">
            <StyledLuHeart />
          </StyledLink> */}
          <StyledLink to="/" onClick={logoutHandler}>
            <StyledLuLogOut />
          </StyledLink>
        </LinkContainer>
      </Header>

      <div>
        <ThisMonthGoal>
          <h3
            style={{
              float: "left",
              position: "absolute",
              left: "15px",
              maxWidth: "75%",
            }}
          >
            {randomQuoteObj.content}
          </h3>
          <h4
            style={{
              float: "right",
              position: "absolute",
              bottom: 0,
              right: "15px",
            }}
          >
            {randomQuoteObj.author}
          </h4>
        </ThisMonthGoal>

        <ThisWeekTodo>
          <p>이번주 투두</p>
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
              <h3>이번주 투두가 없습니다.</h3>
            )}
          </div>
        </ThisWeekTodo>
      </div>
    </MyProfileBlock>
  );
}

export default MyProfile;
