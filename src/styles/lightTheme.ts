import type { DefaultTheme } from "styled-components"
import { designTokens } from "./designTokens"

export const lightTheme: DefaultTheme = {
  ...designTokens,
  colors: {
    primary: "oklch(0.2928 0.0626 273.17)",
    secondary: "oklch(0.7442 0.1811 56.41)",
    // secondary: "oklch(0.7961 0.1789 69.03)",
    background: {
      dark: "oklch(0.9 0 0)",
      default: "oklch(0.95 0 0)",
      light: "oklch(1 0 0)",
    },
    text: {
      primary: "oklch(0.05 0 0)",
      secondary: "oklch(0.3 0 0)",
      inverse: "oklch(0.95 0 0)",
    },
  },
}
