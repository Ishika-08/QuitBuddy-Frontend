// import Login from './components/login'
// import "./App.css"
import LandingPage from "./components/LandingPage/LandingPage"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import LogIn from "./components/Authentication/LogIn"
import SignUp from "./components/Authentication/SignUp"
import Profile from "./components/Profile/Profile"
import ForgotPassword from "./components/Authentication/ForgotPassword"
import Quiz from "./components/Quiz/Quiz"
import Triggers from './components/triggers/triggers'
import NewBlog from "./components/Profile/Blogs/NewBlog"



const App: React.FC = () => {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/login" element={<LogIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/forgotpass" element={<ForgotPassword/>}/>
          <Route path='/:userID/quiz' element={<Quiz/>}/>
          <Route path='/:userID/dashboard' element={<Profile/>}/>
          <Route path='/:userID/trigger' element={<Triggers/>}/>
          <Route path='/newblog' element={<NewBlog/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
