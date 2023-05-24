// import Login from './components/login'
// import "./App.css"
import LandingPage from "./components/LandingPage/LandingPage"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import SignIn from "./components/Authentication/SignIn"
import LogIn from "./components/Authentication/LogIn"
import Profile from "./components/Profile/Profile"


function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/signIn" element={<SignIn/>}/>
          <Route path="/logIn" element={<LogIn/>}/>
          <Route path="/dashboard" element={<Profile/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
