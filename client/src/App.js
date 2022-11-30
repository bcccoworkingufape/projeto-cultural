import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from './pages/landingPage.js';
import Login from './pages/login.js';
import SignUp from './pages/signUp.js';

import SignInSignOut from './components/buttons/signInSignOut/SignInSignOut';
import ContinueGoogle from './components/buttons/continueGoogleButton/ContinueGoogleButton';
import ContinueFacebookButton from './components/buttons/continueFacebookButton/ContinueFacebookButton';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>

        

        <Route path="/test" element={<SignInSignOut>Cadastrar</SignInSignOut>}/> 
        <Route path="/test1" element={<ContinueGoogle href="/login"/>}/>
        <Route path="/test2" element={<ContinueFacebookButton href= "/login"/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
