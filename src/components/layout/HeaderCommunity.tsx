import { HeaderBlock, StyledLink } from "./HeaderCommunity.style";
import { AiOutlineArrowLeft } from "react-icons/ai";

const HeaderCommunity: React.FC = () => {
  return (
    <>
      <HeaderBlock>
        <StyledLink to="/community">
          <AiOutlineArrowLeft />
        </StyledLink>
        <p>커뮤니티</p>
      </HeaderBlock>
    </>
  );
};

export default HeaderCommunity;
