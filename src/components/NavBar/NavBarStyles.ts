import styled from "styled-components"
import { NavLink } from "react-router"

// =======================================
// Types
// =======================================
export interface OpenProps {
  $open: boolean
}

// =======================================
// Links
// =======================================
const StyledLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.text.inverse};
  height: 100%;
  display: flex;
  align-items: center;
  padding: 1rem;
  text-decoration: none;
  border-bottom: 0.15rem solid transparent;
  transition: ${({ theme }) => theme.transitions.fast};
  font-size: ${({ theme }) => theme.typography.sizes.large};
`

export const StyledNavLink = styled(StyledLink)`
  &.active {
    border-color: ${({ theme }) => theme.colors.secondary};
    filter: brightness(115%);
    color: ${({ theme }) => theme.colors.secondary};
  }

  &:hover {
    filter: brightness(115%);
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.text.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    &.active {
      border: none;
      background-color: ${({ theme }) => theme.colors.secondary};
      color: ${({ theme }) => theme.colors.primary};
      font-weight: bold;
    }
  }
`

export const LogoLink = styled(StyledLink)`
  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    display: none;
  }
`

// =======================================
// Buttons
// =======================================
export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 2rem;
  height: 2rem;
  display: none;
  margin-left: 1rem;
  width: 7rem;
  font-size: ${({ theme }) => theme.typography.sizes.large};

  img {
    width: 1rem;
  }

  &:hover {
    cursor: pointer;
  }

  @media (min-width: ${({ theme }) =>
      theme.breakpoints.tablet}) and (max-width: ${({ theme }) =>
      theme.breakpoints.laptop}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const MenuButton = styled.button`
  border: none;
  background-color: transparent;
  display: none;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }
`

export const CloseButton = styled(MenuButton)`
  margin-left: auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
`

// =======================================
// Input
// =======================================
export const Input = styled.input<OpenProps>`
  border-radius: 2rem;
  border: none;
  height: 2rem;
  padding-left: 0.5rem;
  width: 30%;
  margin: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex: 1;
    margin-left: 0.5rem;
  }

  @media (max-width: ${({ theme }) =>
      theme.breakpoints.laptop}) and (min-width: ${({ theme }) =>
      theme.breakpoints.tablet}) {
    transition: ${({ theme }) => theme.transitions.normal};
    display: block;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    z-index: 10;
    position: fixed;
    width: 90%;
    top: ${({ $open }) => ($open ? "25%" : "20%")};
    left: 50%;
    translate: -50%;
    opacity: ${({ $open }) => ($open ? "100%" : "0%")};
    pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
  }
`

// =======================================
// Images / SVGs
// =======================================
export const StyledSvg = styled.img`
  width: 2rem;
  height: 2rem;
`

// =======================================
// Layout
// =======================================
export const Nav = styled.nav`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  height: 3rem;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  right: 0;
  z-index: 10;
`

export const Ul = styled.ul<OpenProps>`
  display: flex;
  list-style: none;
  padding: 0;
  height: 100%;
  margin-left: auto;
  z-index: 10;
  overflow-y: scroll;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    li {
      width: 100%;
    }

    transition: ${({ theme }) => theme.transitions.normal};
    flex-direction: column;
    align-items: flex-start;
    position: fixed;
    top: 0;
    right: ${({ $open }) => ($open ? "0%" : "-100%")};
    width: 300px;
    background-color: ${({ theme }) => theme.colors.primary};
    height: 100svh;
  }
`

// =======================================
// Overlay
// =======================================
export const Overlay = styled.div<OpenProps>`
  transition: ${({ theme }) => theme.transitions.fast};
  background-color: black;
  opacity: ${({ $open }) => ($open ? "50%" : "0%")};
  position: fixed;
  display: none;
  inset: 0;
  z-index: 9;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    display: block;
    pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
  }
`
