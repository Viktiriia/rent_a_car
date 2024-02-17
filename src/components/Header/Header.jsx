

import {
  Headers, Nav, Menu, MenuLink
} from './Header.styled';

const Header = () => {
  return (
    <Headers>
    <Nav>
      <Menu>
        <li>
          <MenuLink to="/">Home</MenuLink>
        </li>
        <li>
          <MenuLink to="/catalog">Catalog</MenuLink>
        </li>
        <li>
          <MenuLink to="/favorites">Favorite</MenuLink>
        </li>
      </Menu>
    </Nav>
  </Headers>
  );
};

export default Header;