// import Login from './components/login'
// import "./App.css"
import LandingPage from "./components/LandingPage/LandingPage"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import LogIn from "./components/Authentication/LogIn"
import SignUp from "./components/Authentication/SignUp"
import Profile from "./components/Profile/Profile"
import ForgotPassword from "./components/Authentication/ForgotPassword"
import Quiz from "./components/Quiz/Quiz"



const App: React.FC = () => {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/login" element={<LogIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/dashboard" element={<Profile/>}/>
          <Route path="/forgotpass" element={<ForgotPassword/>}/>
          <Route path='/:userID/quiz' element={<Quiz/>}/>
          <Route path='/:userID/dashboard' element={<Profile/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
