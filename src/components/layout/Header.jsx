import { Link } from 'react-router-dom';
import { StyledHeader } from './Header.style';

function Header() {
  return (
    <>
      <StyledHeader>
        <div>
          <Link to='/'>OhChalle</Link>
        </div>
      </StyledHeader>
    </>
  )
}

export default Header;
