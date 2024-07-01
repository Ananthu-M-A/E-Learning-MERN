import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./pages/Layout"
import NoPage from "./pages/NoPage"
import Home from "./pages/Home"
import Login from "./pages/Login"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
