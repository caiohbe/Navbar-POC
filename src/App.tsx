import { BrowserRouter, Route, Routes } from "react-router"
import { NavBar } from "./components/NavBar"
import { ResetStyle } from "./styles/ResetStyle"
import { Home } from "./pages/Home"

function App() {
  return (
    <BrowserRouter>
      <ResetStyle />
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
