/*import 'bootstrap/dist/css/bootstrap.min.css';*/
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import pyre from '../../../assets/images/pyre.svg';
import './recoverPasswordIntro.scss';
import '../../../stylesheets/_colors.scss';
import '../../../stylesheets/_fonts.scss';
import SignInSignOutButton from "../../../components/buttons/signInSignOutButton/SignInSignOutButton"
import Input from "../../../components/input/input";

function RecoverPasswordIntro() {
		const navigate = useNavigate();
		const ref2 = useRef(null);
		return (
		<>
			<div className='d-flex justify-content-center mt-5'>
				<img src={pyre} height={141} alt="logo"/>
			</div>
 	   
			<p className='d-flex justify-content-center font-h2-40-ubuntu login_text mt-5 mb-5'>Recuperar senha</p>

			<div className='mx-auto text-white'>

				<div className='container p-5 main_recover_intro color_gray'>
					<div className='row color_gray'>
						<span className='color_gray font-button-20-ubuntu mb-4'>Digite seu email e enviaremos um link para você criar uma nova senha.</span>
						<div className="mt-1 color_gray" onFocus={ () => {
								ref2.current.style.opacity = 1;
								
							}} onBlur={ () => {
								ref2.current.style.opacity = 0.8;
							}}>
							<div className="d-flex color_gray">
								<label className="mb-0 font-subtitle-16-ubuntu color_gray opacity_text" ref={ref2}>Digite seu email</label>
							</div>
							<Input/>
						</div>
					</div>
					<div className='row m-0 mt-4 mb-3 color_gray' onClick={() => {navigate("/recoverPassword")}}>
						<SignInSignOutButton>Enviar</SignInSignOutButton>
					</div>
				</div>
			</div>
			<div className="bottom_text text-white d-flex justify-content-center font-body-20-700-roboto mt-4 p-2">Novo por aqui? <a href='?#' className="link signup font-body-20-700-roboto">&nbsp;Cadastre-se</a></div>
		</>
	);
  }

  export default RecoverPasswordIntro;

