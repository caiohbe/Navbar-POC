interface Typography {
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

export interface DesignTokens {
  typography: Typography
  spacing: (factor: number) => string
}

export const designTokens: DesignTokens = {
  typography: {
    fontFamily: "'Inter', sans-serif",
    sizes: {
      small: "0.875rem",
      base: "1rem",
      large: "1.125rem",
      xLarge: "1.25rem",
    },
    weight: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
  },
  spacing: (factor: number) => `${factor * 0.25}rem`,
}
