import {
  StyledFooter,
  LinkContainer,
  StyledLink } from "./Footer.style";

function Footer() {
  return (
    <StyledFooter>
      <LinkContainer>
        <StyledLink to='/login'>로그인</StyledLink>
        <StyledLink to='/register'>회원가입</StyledLink>
      </LinkContainer>
    </StyledFooter>
  );
};

export default Footer;