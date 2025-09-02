import { useState } from "react"
import { NavLink } from "react-router"
import styled from "styled-components"
import burgerButton from "../assets/burgerButton.svg"
import homeLogo from "../assets/homeLogo.svg"
import closeButton from "../assets/closeButton.svg"

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
  color: ${(props) => props.theme.colors.text.inverse};
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

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    &.active {
      border: none;
      background-color: ${(props) => props.theme.colors.secondary};
      color: ${(props) => props.theme.colors.primary};
      font-weight: bold;
    }
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
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Nav>
      <LogoLink to={"/"}>
        <StyledSvg src={homeLogo} alt='Home logo' />
      </LogoLink>

      <Ul $open={isMenuOpen}>
        <CloseButton onClick={() => setIsMenuOpen(false)}>
          <StyledSvg src={closeButton} alt='Close button' />
        </CloseButton>
        {navCollection}
      </Ul>
      <MenuButton onClick={() => setIsMenuOpen(true)}>
        <StyledSvg src={burgerButton} alt='burgerButton' />
      </MenuButton>
      <Overlay
        onClick={() => setIsMenuOpen(false)}
        $open={isMenuOpen}
      ></Overlay>
    </Nav>
  )
}

interface OpenProps {
  $open: boolean
}

const MenuButton = styled.button`
  border: none;
  background-color: transparent;
  display: none;
  &:hover {
    cursor: pointer;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: block;
  }
`

const CloseButton = styled(MenuButton)`
  margin-left: auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
`

const StyledSvg = styled.img`
  width: 2rem;
  height: 2rem;
`

const Nav = styled.nav`
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  height: 3rem;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  right: 0;
  z-index: 10;
`

const Ul = styled.ul<OpenProps>`
  display: flex;
  list-style: none;
  padding: 0;
  height: 100%;

  z-index: 10;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    li {
      width: 100%;
    }

    transition: 200ms ease-in-out;

    flex-direction: column;
    align-items: flex-start;
    position: fixed;
    top: 0;
    right: ${(props) => (props.$open ? "0%" : "-100%")};
    width: 300px;
    background-color: ${(props) => props.theme.colors.primary};
    height: 100svh;
  }
`

const Overlay = styled.div<OpenProps>`
  transition: 150ms ease-in-out;
  background-color: black;
  opacity: ${(props) => (props.$open ? "50%" : "0%")};
  position: fixed;
  display: none;
  inset: 0;
  z-index: 9;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: block;
    pointer-events: ${(props) => (props.$open ? "auto" : "none")};
  }
`
