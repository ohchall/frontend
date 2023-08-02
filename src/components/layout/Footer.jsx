import {
  StyledFooter,
  LinkContainer,
  StyledLink,
  Footersection,
} from "./Footer.style";

function Footer() {
  return (
    <Footersection>
      <LinkContainer>
        <StyledLink to="/login">로그인</StyledLink>
        <StyledLink to="/register">회원가입</StyledLink>
      </LinkContainer>
    </Footersection>
  );
}

export default Footer;
