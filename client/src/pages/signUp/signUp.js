/*import 'bootstrap/dist/css/bootstrap.min.css';*/
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import pyre from '../../assets/images/pyre.svg';
import './signUp.scss';
import '../../stylesheets/_colors.scss';
import '../../stylesheets/_fonts.scss';
import SignInSignOutButton from "../../components/buttons/signInSignOutButton/SignInSignOutButton"
import ContinueGoogleButton from "../../components/buttons/continueGoogleButton/ContinueGoogleButton"
import ContinueFacebookButton from "../../components/buttons/continueFacebookButton/ContinueFacebookButton"

function SignUp() {
		// const navigate = useNavigate();
		// const ref = useRef(null);
		// const ref2 = useRef(null);
		return (
		<div className="sign-up-container">
			<div className='d-flex justify-content-center mt-5'>
				<img src={pyre} height={141} alt="logo"/>
			</div>
 	   
			<p className='d-flex justify-content-center font-h2-40-ubuntu login_text mt-5 mb-5'>Cadastro</p>

			<div className='mx-auto text-white teste'>
				<div className='container p-5 main_signup color_gray'>
					<div className="mb-4 color_gray"><ContinueGoogleButton/></div>
					<div className="mb-4 mt-2 color_gray"><ContinueFacebookButton/></div>
					<div className='ouline font-subtitle-16-ubuntu color_gray'>ou</div>
					<div className='row m-0 mt-4 mb-3 color_gray'>
						<SignInSignOutButton>Cadastre usando email</SignInSignOutButton>
					</div>
				</div>
			</div>
			<div className="bottom_text text-white d-flex justify-content-center font-body-20-700-roboto mt-4 p-2">Já tem conta? <a href='?#' className="link signup font-body-20-700-roboto">&nbsp;Faça login</a></div>
		</div>
	);
  }

  export default SignUp;

