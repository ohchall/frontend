import { Link } from 'react-router-dom';
import { 
  StyledHeader,
  InputContainer,
  LinkContainer,
  StyledLink } from './Header.style';
import { useState } from 'react';

function Header() {
  const [keyword, setKeyword] = useState('');

  const onChangeKeyword = (e) => {
    setKeyword(e.target.value);
  }

  const onClickSearch = () => {
    console.log('keyword: ', keyword);
  }

  return (
    <>
      <StyledHeader>
        <div>
          <Link to='/'>OhChalle</Link>
        </div>

        <div>
          <InputContainer>
            <input
              type='text'
              value={keyword}
              onChange={onChangeKeyword}
            />
            <button onClick={onClickSearch}>검색</button>
          </InputContainer>

          <LinkContainer>
            <StyledLink to='/login'>로그인</StyledLink>
            <StyledLink to='/register'>회원가입</StyledLink>
          </LinkContainer>
        </div>
      </StyledHeader>
    </>
  )
}

export default Header;
