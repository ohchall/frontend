import {
  MyProfileBlock,
  StyledLink,
  TitleContainer,
  TableWrapper,
  LinkContainer
 } from './MyProfile.style';

function MyProfile() {
  return (
    <MyProfileBlock>
      <TitleContainer>
        <p>김오챌</p>
        <LinkContainer>
          <StyledLink to='/mypage'>마이페이지</StyledLink>
          <StyledLink to='/'>알림</StyledLink>
          <StyledLink to='/logout'>로그아웃</StyledLink>
        </LinkContainer>
      </TitleContainer>

      <TableWrapper>
        <table>
          <thead>
            <tr>
              <th>이번달 목표.</th>
              <th>매주 3회 이상 운동하기</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan='3'>이번주 투두</td>
              <td>화 | 오후07시 테니스 '텟텟'크루 참여</td>
            </tr>
            <tr>
              <td>금 | 오전06시 헬스장 - 하체</td>
            </tr>
            <tr>
              <td>토 | 오전11시 필라테스 '필테필테' 크루...</td>
            </tr>
          </tbody>
        </table>
      </TableWrapper>
    </MyProfileBlock>
  )
}

export default MyProfile;
