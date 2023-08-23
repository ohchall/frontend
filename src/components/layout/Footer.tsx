import {
  FooterSection,
  LinkContainer,
  StyledLink,
  StyledFiSmile,
  StyledFiSearch,
  StyledLuUser,
  StyledLuUsers,
} from "./Footer.style";
import { ReactComponent as HomeIcon } from "../../assets/HomeIcon.svg";
import { useDispatch } from "react-redux";
import { setDisplayRemainingComponents } from "../../redux/modules/Modules";

function Footer() {
  const dispatch = useDispatch();
  const homeClickHandler = () => {
    dispatch(setDisplayRemainingComponents(true));
  };
  return (
    <FooterSection>
      <LinkContainer>
        <StyledLink to="/crew">
          <StyledFiSmile />
          <span>크루</span>
        </StyledLink>

        <StyledLink to="/">
          <StyledLuUsers />
          <span>커뮤니티</span>
        </StyledLink>

        <StyledLink to="/" onClick={homeClickHandler}>
          <HomeIcon
            width="42.6px"
            height="24px"
            viewBox="0 6 42.6 24"
            // viewBox="0 0 49 35"
          />
          <span>홈</span>
        </StyledLink>

        <StyledLink to="/search">
          <StyledFiSearch />
          <span>검색</span>
        </StyledLink>

        <StyledLink to="/mypage">
          <StyledLuUser />
          <span>마이페이지</span>
        </StyledLink>
      </LinkContainer>
    </FooterSection>
  );
}

export default Footer;
