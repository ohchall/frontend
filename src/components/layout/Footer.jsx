import {
  LinkContainer,
  StyledLink,
  FooterSection,
  HomeIconStyle,
} from "./Footer.style";
import HomeIcon from "../../assets/OhChalleHome.svg";
function Footer() {
  return (
    <FooterSection>
      <LinkContainer>
        <StyledLink to="/crew">크루</StyledLink>
        <StyledLink to="/">커뮤니티</StyledLink>
        <StyledLink to="/">
          <HomeIconStyle src={HomeIcon} alt="homelogo" />
        </StyledLink>
        <StyledLink to="/">검색</StyledLink>
        <StyledLink to="/mypage">마이페이지</StyledLink>
      </LinkContainer>
    </FooterSection>
  );
}

export default Footer;
