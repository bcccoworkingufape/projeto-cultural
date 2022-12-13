import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from './pages/landingPage.js';
import Login from './pages/login/login.js';
import SignUp from './pages/signUp/signUp.js';
import SignUpEmailIntroduction from './pages/signUp/signUp-email-introduction/signUp-email-introduction';

import SignInSignOutButton from './components/buttons/signInSignOutButton/SignInSignOutButton';
import ContinueGoogleButton from './components/buttons/continueGoogleButton/ContinueGoogleButton';
import ContinueFacebookButton from './components/buttons/continueFacebookButton/ContinueFacebookButton';
import BackButton from './components/buttons/backButton/BackButton';
import NextButton from './components/buttons/nextButton.js/NextButton';
import LoginNavButton from './components/buttons/loginNavButton/LoginNavButton';
import SignUpPersonalInfo from './pages/signUp/signUp-personal-info';
import SignUpAddressInfo from './pages/signUp/signUp-address-info';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signup/intro" element={<SignUpEmailIntroduction/>}/>
        <Route path="/signup/personal-information" element={<SignUpPersonalInfo/>}/>
        <Route path="/signup/address-information" element={<SignUpAddressInfo/>}/>

        {/*Exemplos de uso dos botoes*/}
        <Route path="/test" element={<SignInSignOutButton>Cadastrar</SignInSignOutButton>}/> 
        <Route path="/test1" element={<ContinueGoogleButton href="/login"/>}/>
        <Route path="/test2" element={<ContinueFacebookButton href= "/login"/>}/>
        <Route path="/test3" element={<BackButton href="/login">Voltar</BackButton>}/>
        <Route path="/test4" element={<NextButton href="/login">Próximo</NextButton>}/>
        <Route path="/test5" element={<LoginNavButton></LoginNavButton>}/>     
        <Route path="/" element={<LandingPage></LandingPage>}/>     

      </Routes>
    </BrowserRouter>
  );
}

export default App;
