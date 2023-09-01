import {
  HeaderBlock,
  StyledLink } from './Header.style';
import { AiOutlineArrowLeft } from 'react-icons/ai';

interface IHeaderProps {
  headerText: string
}

function Header(props: IHeaderProps) {
  return (
    <>
      <HeaderBlock>
        <StyledLink to="/crew">
          <AiOutlineArrowLeft />
        </StyledLink>
        <p>{props.headerText}</p>
      </HeaderBlock>
    </>
  );
};

export default Header;
