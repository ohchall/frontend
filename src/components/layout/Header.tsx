import { useNavigate } from 'react-router-dom';
import {
  HeaderBlock,
  StyledAiOutlineArrowLeft } from './Header.style';

interface IHeaderProps {
  headerText: string
}

function Header(props: IHeaderProps) {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <HeaderBlock>
        <button onClick={goBack}>
          <StyledAiOutlineArrowLeft />
        </button>
        <p>{props.headerText}</p>
      </HeaderBlock>
    </>
  );
};

export default Header;
