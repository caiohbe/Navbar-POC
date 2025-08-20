import { DefaultTheme } from "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      background: {
        dark: string
        default: string
        light: string
      }
      text: {
        primary: string
        secondary: string
        inverse: string
      }
    }
    typography: {
      fontFamily: string
      sizes: {
        small: string
        base: string
        large: string
        xLarge: string
      }
      weight: {
        regular: number
        medium: number
        bold: number
      }
    }
    spacing: (factor: number) => string
  }
}
