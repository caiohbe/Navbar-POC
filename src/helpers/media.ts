import { css } from "styled-components"
import { lightTheme as theme } from "../styles/lightTheme"

export const media = {
  mobile: (styles: any) => css`
    @media (max-width: ${theme.breakpoints.mobile}) {
      ${styles}
    }
  `,
  tablet: (styles: any) => css`
    @media (max-width: ${theme.breakpoints.tablet}) {
      ${styles}
    }
  `,
  laptop: (styles: any) => css`
    @media (max-width: ${theme.breakpoints.laptop}) {
      ${styles}
    }
  `,
  desktop: (styles: any) => css`
    @media (max-width: ${theme.breakpoints.desktop}) {
      ${styles}
    }
  `,
}
