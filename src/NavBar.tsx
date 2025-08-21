import { NavLink } from "react-router"
import styled from "styled-components"

export function NavBar() {
  return (
    <NavBarNav>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>Blog</li>
      <li>Sobre nós</li>
    </NavBarNav>
  )
}

const NavBarNav = styled.nav`
  width: 100%;
  background-color: red;
  height: 6svh;
  display: flex;

  li {
    height: 100%;
    background-color: aqua;

    display: flex;
    align-items: center;
    padding: 1rem;
  }
`
