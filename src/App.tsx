import { BrowserRouter, Route, Routes } from "react-router"
import { NavBar } from "./NavBar"
import { ResetStyle } from "./styles/ResetStyle"
import { Home } from "./pages/Home"

function App() {
  return (
    <BrowserRouter>
      <ResetStyle />
      <NavBar /> {/*FIXME*/}
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
