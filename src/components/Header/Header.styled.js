import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Headers = styled.header`
  background-image: radial-gradient(ellipse, #101cb9, #14c3cf);
  height: 60px;
 
`;

export const Nav = styled.nav`
  height: 60px;

`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  gap: 50px;
  height: 100%;
  list-style-type: none;
margin-left: 50px;
 
`;


export const MenuLink = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  color: var(--primary-color-white);
  &:hover {
    color: rgba(255, 255, 255, 0.5);
  }
`;