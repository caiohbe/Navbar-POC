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

interface Breakpoints {
  mobile: string
  tablet: string
  laptop: string
  desktop: string
}

interface Transitions {
  fast: string
  normal: string
  slow: string
}

export interface DesignTokens {
  typography: Typography
  spacing: (factor: number) => string
  breakpoints: Breakpoints
  transitions: Transitions
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
  breakpoints: {
    mobile: "480px",
    tablet: "768px",
    laptop: "1024px",
    desktop: "1280px",
  },
  transitions: {
    fast: "150ms ease-in-out",
    normal: "250ms ease-in-out",
    slow: "450ms ease-in-out",
  },
}
