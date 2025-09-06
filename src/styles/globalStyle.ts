import { createGlobalStyle } from "styled-components"

interface GlobalStyleProps {
  $noScroll: boolean
}

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  body {
    overflow: ${({ $noScroll }) => ($noScroll ? "hidden" : "auto")};
  }

  * {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
`
