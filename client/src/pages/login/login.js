/*import 'bootstrap/dist/css/bootstrap.min.css';*/
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {auth} from "../../services/firebase"
import pyre from '../../assets/images/pyre.svg';
import './login.scss';
import '../../stylesheets/_colors.scss';
import '../../stylesheets/_fonts.scss';
import SignInSignOutButton from "../../components/buttons/signInSignOutButton/SignInSignOutButton"
import ContinueGoogleButton from "../../components/buttons/continueGoogleButton/ContinueGoogleButton"
import Input from "../../components/input/input";
import axios from 'axios';

function Login({ setToken }) {
	const ref = useRef(null);
	const ref2 = useRef(null);
	const [ loginValue, setLoginValue ] = useState('');
	const [ passwordValue, setPasswordValue ] = useState('');
	const [ failValue, setFailValue ] = useState(false);
	
	const handleGoogleSingIn = () =>{
		const provider = new GoogleAuthProvider();

		signInWithPopup(auth, provider)
		.then((result) =>{
			console.log(result);
		})
		.catch((error)=>{
			console.log(error);
		})
	}

	function login_request(){
		axios.post("http://localhost:3000/users/login",
		{
			email: loginValue,
			password: passwordValue,
		}
		).then(response => { 
			localStorage.setItem('logged_user', JSON.stringify(response.data));
			window.location.replace('http://localhost:3001/explore');
		})
		.catch(error => {
			alert('Ocorreu um erro no login. Confira as informções e tente novamente');
		});
	}

	const handleLoginChange = (event) => {
		setLoginValue(event.target.value);
	};

	const handlePasswordChange = (event) => {
		setPasswordValue(event.target.value);
	};

	return (
		<>
			<div className='d-flex justify-content-center mt-5'>
				<img src={pyre} height={141} alt="logo"/>
			</div>
	   
			<p className='d-flex justify-content-center font-h2-40-ubuntu login_text mt-5 mb-5'>Login</p>

			<div className='mx-auto text-white'>

				<div className='container p-5 main_login color_gray'>
					<div className='row color_gray'>
						<div className="color_gray" onFocus={ () => {
								ref.current.style.opacity = 1;
							}} onBlur={ () => {
								ref.current.style.opacity = 0.8;
							}}>
							<label className="mb-0 font-subtitle-16-ubuntu color_gray opacity_text" ref={ref} >Email</label>	
							<Input value={loginValue} handleOnChange={handleLoginChange} placeholder="name@email.com" />
						</div>
						<div className="mt-1 color_gray" onFocus={ () => {
								ref2.current.style.opacity = 1;
							}} onBlur={ () => {
								ref2.current.style.opacity = 0.8;
							}}>
							<div className="d-flex color_gray">
								<label className="mb-0 font-subtitle-16-ubuntu color_gray opacity_text" ref={ref2}>Senha</label>
								<Link to="/recoverPasswordIntro" className="ms-auto font-subtitle-12-ubuntu forgot_password color_gray">Esqueceu sua senha?</Link>
							</div>
							<Input value={passwordValue} handleOnChange={handlePasswordChange} type="password"/>
							{failValue &&
								<div className="d-flex flex-row justify-content-center">
									<label className="font-subtitle-16-ubuntu color_red">Informações de login incorretas!</label>
								</div>
							}

						</div>
					</div>
					<div className='row m-0 mt-4 mb-3 color_gray' onClick = {login_request}>
						<SignInSignOutButton>Entrar</SignInSignOutButton>
					</div>
					<div className='ouline font-subtitle-16-ubuntu color_gray'>ou</div>
					<div className="mb-4 mt-3 color_gray"><ContinueGoogleButton signIn = {handleGoogleSingIn}/></div>
				</div>
			</div>
			<div className="font-body-20-700-roboto d-flex justify-content-center mt-4 p-2 text-white" >Novo por aqui?&nbsp;
				<Link to="/signup" className="font-body-20-700-roboto signup">Cadastre-se</Link>
			</div>
		</>
	);
}

export default Login;
