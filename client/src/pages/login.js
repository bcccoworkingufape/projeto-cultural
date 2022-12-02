/*import 'bootstrap/dist/css/bootstrap.min.css';*/
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import logo from '../assets/images/logo.svg';
import './login.scss';
import '../stylesheets/_colors.scss';
import '../stylesheets/_fonts.scss';
import SignInSignOutButton from "../components/buttons/signInSignOutButton/SignInSignOutButton"
import ContinueGoogleButton from "../components/buttons/continueGoogleButton/ContinueGoogleButton"
import ContinueFacebookButton from "../components/buttons/continueFacebookButton/ContinueFacebookButton"
import Input from "../components/Input/input"

function Login() {
		const navigate = useNavigate();
		const ref = useRef(null);
		const ref2 = useRef(null);
		return (
		<>
			<div className='d-flex justify-content-center mt-5'>
				<img src={logo} height={141} alt="logo"/>
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
							<label className="mb-2 font-subtitle-16-ubuntu color_gray opacity_text" ref={ref}>Email</label>
							<Input placeholder="name@email.com" />
						</div>
						<div className="mt-4 color_gray" onFocus={ () => {
								ref2.current.style.opacity = 1;
								
							}} onBlur={ () => {
								ref2.current.style.opacity = 0.8;
							}}>
							<div className="d-flex color_gray">
								<label className="mb-2 font-subtitle-16-ubuntu color_gray opacity_text" ref={ref2}>Senha</label>
								<a href='?#' className="link ms-auto font-subtitle-12-ubuntu forgot_password color_gray">Esqueceu sua senha?</a>
							</div>
							<Input/>
						</div>
					</div>
					<div className='row m-0 mt-4 mb-3 color_gray'>
						<SignInSignOutButton>Entrar</SignInSignOutButton>
					</div>
					<div className='line font-subtitle-16-ubuntu color_gray'>ou</div>
					<div className="mb-4 mt-3 color_gray"><ContinueGoogleButton/></div>
					<div className="mb-2 mt-2 color_gray"><ContinueFacebookButton/></div>
				</div>
			</div>
			<div className="bottom_text text-white d-flex justify-content-center font-body-20-700-roboto mt-4 p-2">Novo por aqui? <a href='?#' className="link signup font-body-20-700-roboto">&nbsp;Cadastre-se</a></div>
		</>
	);
  }

  export default Login;
