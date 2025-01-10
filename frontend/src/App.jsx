import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import { Home } from "./components/home"
import { Signup } from "./components/signup"
import { Admin } from "./components/Admin"
import { Patient } from "./sub-components/Patient"
import { Record } from "./sub-components/Record"

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/admin" element={<Admin/>}></Route>
        <Route path="/patient" element={<Patient/>}></Route>
        <Route path="/record" element={<Record/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
