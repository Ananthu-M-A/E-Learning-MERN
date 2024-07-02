import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./layout/Layout"
import NoPage from "./pages/NoPage"
import Home from "./pages/Home"
import MyLearning from "./pages/MyLearning"
import OnlineCourses from "./pages/OnlineCourses"
import FindCareers from "./pages/FindCareers"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/my-learning" element={<MyLearning />} />
          <Route path="/online-courses" element={<OnlineCourses />} />
          <Route path="/find-careers" element={<FindCareers />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
