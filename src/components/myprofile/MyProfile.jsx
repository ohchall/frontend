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
  Week } from './MyProfile.style';

function MyProfile() {
  return (
    <MyProfileBlock>
      <Header>
        <p>김오챌</p>
        <LinkContainer>
          <StyledLink to='/mypage'>
            <StyledLuUser />
          </StyledLink>
          <StyledLink to='/mypage'>
            <StyledLuInbox />
          </StyledLink>
          <StyledLink to='/'>
            <StyledLuBell />
          </StyledLink>
          <StyledLink to='/logout'>
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
            <Todo>
              <span>매일 아침 러닝 30분</span>
              <Week>
                <span>M</span>
                <span>T</span>
                <span>W</span>
                <span>T</span>
                <span>F</span>
                <span>S</span>
                <span>S</span>
              </Week>
            </Todo>

            <Todo>
              <span>주 3회 헬스장 가기</span>
              <Week>
                <span>M</span>
                <span>T</span>
                <span>W</span>
                <span>T</span>
                <span>F</span>
                <span>S</span>
                <span>S</span>
              </Week>
            </Todo>

            <Todo>
              <span>오전06시 테니스 텟..</span>
              <Week>
                <span>M</span>
                <span>T</span>
                <span>W</span>
                <span>T</span>
                <span>F</span>
                <span>S</span>
                <span>S</span>
              </Week>
            </Todo>

            <Todo>
              <span>오전11시 필라테스..</span>
              <Week>
                <span>M</span>
                <span>T</span>
                <span>W</span>
                <span>T</span>
                <span>F</span>
                <span>S</span>
                <span>S</span>
              </Week>
            </Todo>
          </div>
        </ThisWeekTodo>
      </div>
    </MyProfileBlock>
  )
}

export default MyProfile;
