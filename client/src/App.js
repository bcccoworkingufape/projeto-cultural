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
import Info from './pages/profile/components/info/info';
import Profile from './pages/profile/profile';
import Header from './components/header/header';
import NotSignedupHeader from './components/notSignedupHeader/notSignedupHeader';
import Profiles from './pages/profiles/profiles';
import UserProfile from './pages/profiles/components/userProfile';
import UserPortfolio from './pages/profiles/components/userPortfolio';
import FormCard from './pages/projects-form/components/form-card/form-card';
import CreateProject from './pages/projects-form/createProject';
import Description from './pages/projects-form/components/description/description';
import Funding from './pages/projects-form/components/funding/funding';
import Card from './components/card/card';
import Explore from './pages/explore/explore';
import CardSmall from './components/card-small/card-small';
import CardBig from './components/card-big/card-big';
import Search from './pages/search/search';
import ViewProject from './pages/view-project/view-project';
import Project from './pages/view-project/components/project';

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
					<Route path="/profile" element={<Profile/>}>
						<Route path="/profile/portfolio" element={<Portfolio/>}/>
						<Route path="/profile/info" element={<Info/>}/>
					</Route>
					<Route path="/profiles" element={<Profiles/>}>
						<Route path="/profiles/:userId" element={<UserProfile/>}/>
						<Route path="/profiles/:userId/portfolio" element={<UserPortfolio/>}/>
					</Route>
					<Route path="/create" element={<CreateProject/>}>
						<Route path="/create/initial" element={<FormCard/>}/>
						<Route path="/create/description" element={<Description/>}/>
						<Route path="/create/funding" element={<Funding/>}/>
					</Route>
					<Route path="/explore" element={<Explore/>}/>
					<Route path="/search" element={<Search/>}>
						<Route path="/search/:searchName" element={<Search/>}/>
					</Route>
					<Route path="/project" element={<ViewProject/>}>
						<Route path="/project/:projectName" element={<Project/>}/>
					</Route>

					{/*Exemplos de uso dos botoes*/}
					<Route path="/test" element={<SignInSignOutButton>Cadastrar</SignInSignOutButton>}/> 
					<Route path="/test1" element={<ContinueGoogleButton href="/login"/>}/>
					<Route path="/test2" element={<ContinueFacebookButton href= "/login"/>}/>
					<Route path="/test3" element={<BackButton href="/login">Voltar</BackButton>}/>
					<Route path="/test4" element={<NextButton href="/login">Próximo</NextButton>}/>
					<Route path="/test5" element={<LoginNavButton></LoginNavButton>}/>		 
					<Route path="/logout" element={<Logout/>}/>

					{/*test*/}
					<Route path="/header1" element={<Header/>}/>
					<Route path="/header2" element={<NotSignedupHeader/>}/>
					<Route path="/test" element={<ProjectsFormNavbar/>}/>
					<Route path="/card" element={<Card/>}/>
					<Route path="/cardsmall" element={<CardSmall/>}/>
					<Route path="/cardbig" element={<CardBig/>}/>

				</Routes>
			</BrowserRouter>
		</AuthProvider>
	);
}

export default App;
