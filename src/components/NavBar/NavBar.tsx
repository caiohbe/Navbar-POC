import { useState } from "react"
import burgerButton from "../../assets/burgerButton.svg"
import homeLogo from "../../assets/homeLogo.svg"
import closeButton from "../../assets/closeButton.svg"
import searchIcon from "../../assets/searchIcon.svg"
import { GlobalStyle } from "../../styles/globalStyle"
import {
  Nav,
  LogoLink,
  StyledSvg,
  Input,
  Button,
  Ul,
  CloseButton,
  MenuButton,
  Overlay,
  StyledNavLink,
} from "./NavBarStyles"

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

const navCollection = ROUTES.map((route) => (
  <li key={route.label}>
    <StyledNavLink to={route.path}>{route.label}</StyledNavLink>
  </li>
))

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <GlobalStyle $noScroll={isMenuOpen} />
      <Nav>
        <LogoLink to={"/"}>
          <StyledSvg src={homeLogo} alt='Home logo' />
        </LogoLink>
        <Input $open={isMenuOpen} placeholder='Pesquisar' />
        <Button onClick={() => setIsMenuOpen(true)}>
          Pesquisar <img src={searchIcon} alt='search' />
        </Button>
        <Ul $open={isMenuOpen}>
          <CloseButton onClick={() => setIsMenuOpen(false)}>
            <StyledSvg src={closeButton} alt='Close button' />
          </CloseButton>
          {navCollection}
        </Ul>
        <MenuButton onClick={() => setIsMenuOpen(true)}>
          <StyledSvg src={burgerButton} alt='burgerButton' />
        </MenuButton>
        <Overlay onClick={() => setIsMenuOpen(false)} $open={isMenuOpen} />
      </Nav>
    </>
  )
}
