import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from './pages/landingPage.js';
import Login from './pages/login.js';
import SignUp from './pages/signUp.js';

import NextButton from './components/buttons/nextButton.js/NextButton';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<LandingPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>

        <Route path="/test" element={<NextButton href = "/login">Próximo</NextButton>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
