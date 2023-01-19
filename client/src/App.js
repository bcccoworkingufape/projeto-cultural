import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from './context/authContext';
import { auth} from './services/firebase';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

import LandingPage from './pages/landing/landingPage.js';
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
import Logout from './pages/logoutTest/logout';
import RecoverPasswordIntro from './pages/recoverPassword/recoverPasswordIntro/recoverPasswordIntro';
import RecoverPassword from './pages/recoverPassword/recoverPassword/recoverPassword';
import ProjectsFormNavbar from './pages/projects-form/components/projects-form-navbar/projects-form-navbar';

import Portfolio from './pages/profile/components/portfolio/portfolio';


function App() {
  const [user, setUser] = useState(undefined);

  useEffect(()=>{
    onAuthStateChanged(auth, (user) =>{
      user && console.log("logado como: " + user.displayName);
      setUser(user);
    })

  })

  return (
    <AuthProvider value={user}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/login" element={ !user ? <Login/> : <Navigate to={"/logout"}/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/signup/intro" element={<SignUpEmailIntroduction/>}/>
          <Route path="/signup/personal-information" element={<SignUpPersonalInfo/>}/>
          <Route path="/signup/address-information" element={<SignUpAddressInfo/>}/>
          <Route path="/recoverPasswordIntro" element={<RecoverPasswordIntro/>}/>
          <Route path="/recoverPassword" element={<RecoverPassword/>}/>
          <Route path="/test" element={<ProjectsFormNavbar/>}/>

	  {/*teste*/}
	  <Route path="/portfolio" element={<Portfolio/>}/>

          {/*Exemplos de uso dos botoes*/}
          <Route path="/test" element={<SignInSignOutButton>Cadastrar</SignInSignOutButton>}/> 
          <Route path="/test1" element={<ContinueGoogleButton href="/login"/>}/>
          <Route path="/test2" element={<ContinueFacebookButton href= "/login"/>}/>
          <Route path="/test3" element={<BackButton href="/login">Voltar</BackButton>}/>
          <Route path="/test4" element={<NextButton href="/login">Próximo</NextButton>}/>
          <Route path="/test5" element={<LoginNavButton></LoginNavButton>}/>     
          <Route path="/logout" element={<Logout/>}/>     

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
