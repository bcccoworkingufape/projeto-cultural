import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from './pages/landingPage.js';
import Login from './pages/login.js';
import SignUp from './pages/signUp.js';

import LoginButton from './components/buttons/loginButton/LoginButton';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>

        <Route path="/test" element={<LoginButton href= "/login">Login</LoginButton>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
