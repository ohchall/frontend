import {
  HeaderBlock,
  StyledLink } from './Header.style';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const Header: React.FC = () => {
  return (
    <>
      <HeaderBlock>
        <StyledLink to="/crew">
          <AiOutlineArrowLeft />
        </StyledLink>
        <p>참여하고 싶은 크루 둘러보기</p>
      </HeaderBlock>
    </>
  );
};

export default Header;
