import { DefaultTheme } from "styled-components"
import type { DesignTokens } from "./designTokens"

declare module "styled-components" {
  export interface DefaultTheme extends DesignTokens {
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
  }
}
