import {
  LinkContainer,
  StyledLink,
  FooterSection,
} from "./Footer.style";

function Footer() {
  return (
    <FooterSection>
      <LinkContainer>
        <StyledLink to="/crew">크루</StyledLink>
        <StyledLink to="/">커뮤니티</StyledLink>
        <StyledLink to="/">홈</StyledLink>
        <StyledLink to="/">검색</StyledLink>
        <StyledLink to="/mypage">마이페이지</StyledLink>
      </LinkContainer>
    </FooterSection>
  );
}

export default Footer;
