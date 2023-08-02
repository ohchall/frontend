import { Link } from 'react-router-dom';
import { 
  StyledHeader,
  InputContainer } from './Header.style';
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

        <InputContainer>
          <input
            type='text'
            value={keyword}
            onChange={onChangeKeyword}
          />
          <button onClick={onClickSearch}>검색</button>
        </InputContainer>
      </StyledHeader>
    </>
  )
}

export default Header;
