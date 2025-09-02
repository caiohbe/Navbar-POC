import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.tsx"
import { ThemeProvider } from "styled-components"
import { lightTheme } from "./styles/lightTheme.ts"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={lightTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>
)
