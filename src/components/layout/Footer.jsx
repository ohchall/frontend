import { StyledFooter, LinkContainer, StyledLink } from "./Footer.style";

function Footer() {
  return (
    <StyledFooter>
      <LinkContainer>
        <StyledLink to="/login">로그인</StyledLink>
        <StyledLink to="/register">회원가입</StyledLink>
      </LinkContainer>
    </StyledFooter>
  );
}

export default Footer;

const Footersection = styled.footer`
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0px;
  background-color: wheat;
  width: 1000px;
  @media screen and (max-width: 1000px) {
    width: 500px;
    position: absolute;
  }
`;
