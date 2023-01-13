/*import 'bootstrap/dist/css/bootstrap.min.css';*/
import { Link } from 'react-router-dom';
import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {auth} from "../../services/firebase"
import pyre from '../../assets/images/pyre.svg';
import './signUp.scss';
import '../../stylesheets/_colors.scss';
import '../../stylesheets/_fonts.scss';
import SignInSignOutButton from "../../components/buttons/signInSignOutButton/SignInSignOutButton"
import ContinueGoogleButton from "../../components/buttons/continueGoogleButton/ContinueGoogleButton"

function SignUp() {
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

	return (
		<div className="sign-up-container">
			<div className='d-flex justify-content-center mt-5'>
				<img src={pyre} height={141} alt="logo"/>
			</div>
 	   
			<p className='d-flex justify-content-center font-h2-40-ubuntu login_text mt-5 mb-5'>Cadastro</p>

			<div className='mx-auto text-white teste'>
				<div className='container p-5 main_signup color_gray'>
					<div className="mb-4 color_gray"><ContinueGoogleButton signIn = {handleGoogleSingIn}/></div>
					<div className='ouline font-subtitle-16-ubuntu color_gray'>ou</div>
					<div className='m-0 mt-4 mb-3 color_gray'>
						<Link to="intro" className="link"><SignInSignOutButton>Cadastre usando email</SignInSignOutButton></Link>
					</div>
				</div>
			</div>
			<div className="font-body-20-700-roboto d-flex justify-content-center mt-4 p-2 text-white" >Já tem conta?&nbsp;
				<Link to="/login" className="link font-body-20-700-roboto signup">Faça login</Link>
			</div>
		</div>
	);
  }

  export default SignUp;

