import { useNavigate } from 'react-router-dom';
import { 
  StyledHeader,
  ButtonContainer } from './Header.style';

function Header() {
  const navigate = useNavigate();

  const onClickLogo = () => {
    navigate("/");
  };

  const onClickLogin = () => {
    navigate("/login");
  }

  const onClickRegister = () => {
    navigate("/register");
  }

  return (
    <>
      <StyledHeader>
        <div>
          <p onClick={onClickLogo}>OhChalle</p>
        </div>

        <ButtonContainer>
          <button onClick={onClickLogin}>로그인</button>
          <button onClick={onClickRegister}>회원가입</button>
        </ButtonContainer>
      </StyledHeader>
    </>
  )
}

export default Header;
