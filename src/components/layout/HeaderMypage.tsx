import { HeaderBlock, StyledLink } from "./HeaderMypage.style";
import { AiOutlineArrowLeft } from "react-icons/ai";

const HeaderMypage: React.FC = () => {
  return (
    <>
      <HeaderBlock>
        <StyledLink to="/mypage">
          <AiOutlineArrowLeft />
        </StyledLink>
        <p>마이페이지</p>
      </HeaderBlock>
    </>
  );
};

export default HeaderMypage;
