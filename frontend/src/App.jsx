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
import { MealDetails } from "./sub-components/MealDetails"
import { FullDetails } from "./sub-components/FullDetails"
import { Login } from "./components/login"
import { ProtectedRoute } from "./sub-components/ProtectedRoute"
import { Toaster } from "react-hot-toast"

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
        <Route path="/patient" element={<ProtectedRoute><Patient /></ProtectedRoute>} />
        <Route path="/record" element={<ProtectedRoute> <Record/></ProtectedRoute>}></Route>
        <Route path="/mealdetails" element={<ProtectedRoute><MealDetails/></ProtectedRoute>}></Route>
        <Route path="/full" element={<ProtectedRoute><FullDetails/></ProtectedRoute>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
      </BrowserRouter>
      
      <Toaster
         position="top-center"
          toastOptions={{
         success: {
          duration: 3000,
             style: {
              border: '1px solid #008000',
              padding: '16px',
             color: '#008000',
      },
      iconTheme: {
        primary: '#008000',
        secondary: '#FFFAEE',
      },
    },
    error: {
      duration: 3000,
      style: {
        border: '1px solid #ff0000',
        padding: '16px',
        color: '#ff0000',
      },
      iconTheme: {
        primary: '#ff0000',
        secondary: '#FFFAEE',
      },
    },
  }}
/>
    </>
  )
}

export default App
