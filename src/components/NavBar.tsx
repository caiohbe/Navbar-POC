import { useState } from "react"
import { NavLink } from "react-router"
import styled from "styled-components"
import burgerButton from "../assets/burgerButton.svg"
import homeLogo from "../assets/homeLogo.svg"

interface NavItem {
  label: string
  path: string
}

const ROUTES: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "Blog", path: "/blog" },
  { label: "Sobre nós", path: "/about" },
  { label: "Notícias", path: "/news" },
  { label: "Merch", path: "/merch" },
  { label: "Entre em contato", path: "/contact" },
]

const StyledLink = styled(NavLink)`
  color: ${(props) => props.theme.colors.text.primary};
  height: 100%;
  display: flex;
  align-items: center;
  padding: 1rem;
  text-decoration: none;
  border-bottom: 0.15rem solid transparent;
  transition: 150ms ease-in-out;
  font-size: ${(props) => props.theme.typography.sizes.large};
`

const StyledNavLink = styled(StyledLink)`
  &.active {
    border-color: ${(props) => props.theme.colors.secondary};
    filter: brightness(115%);
    color: ${(props) => props.theme.colors.secondary};
  }

  &:hover {
    filter: brightness(115%);
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.text.primary};
  }
`

const LogoLink = styled(StyledLink)`
  margin-right: auto;
`

const navCollection = ROUTES.map((route) => {
  return (
    <li key={route.label}>
      {<StyledNavLink to={route.path}>{route.label}</StyledNavLink>}
    </li>
  )
})

export function NavBar() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <Nav>
        <LogoLink to={"/"}>
          <StyledSvg src={homeLogo} alt='Home logo' />
        </LogoLink>
        <Ul>{navCollection}</Ul>
      </Nav>
      {/* <Overlay $open={isMenuOpen}></Overlay> */}
    </>
  )
}

interface OpenProps {
  $open: boolean
}

const StyledSvg = styled.img`
  width: 2rem;
  height: 2rem;
  &:hover {
    cursor: pointer;
  }
`

const Nav = styled.nav`
  transition: 2000ms ease-in-out;
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  height: 5.5svh;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  right: 0;
  z-index: 10;
`

const Ul = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  height: 100%;
`

// const Overlay = styled.div<OpenProps>`
//   transition: 2000ms ease-in-out;
//   background-color: ${(props) =>
//     props.$open ? "oklch(0 0 0 / 50%)" : "oklch(0 0 0 / 0%)"};
//   position: fixed;
//   inset: 0;
//   display: ${(props) => (props.$open ? "block" : "none")};
//   z-index: 9;
// `
