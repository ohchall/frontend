import {
  LinkContainer,
  StyledLink,
  FooterSection,
} from "./Footer.style";

function Footer() {
  return (
    <FooterSection>
      <LinkContainer>
        <StyledLink to="/login">로그인</StyledLink>
        <StyledLink to="/register">회원가입</StyledLink>
      </LinkContainer>
    </FooterSection>
  );
}

export default Footer;
