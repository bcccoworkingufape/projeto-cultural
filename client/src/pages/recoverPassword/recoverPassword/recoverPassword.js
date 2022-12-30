/*import 'bootstrap/dist/css/bootstrap.min.css';*/
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import pyre from '../../../assets/images/pyre.svg';
import './recoverPassword.scss';
import '../../../stylesheets/_colors.scss';
import '../../../stylesheets/_fonts.scss';
import SignInSignOutButton from "../../../components/buttons/signInSignOutButton/SignInSignOutButton"
import Input from "../../../components/input/input";

function RecoverPassword() {
		const navigate = useNavigate();
		const ref_ops = useRef(null);
		const ref = useRef(null);
		const ref2 = useRef(null);
		const refi1 = useRef(null);
		const refi2 = useRef(null);

		function verifyPassword() {
			
			if(refi1.current.children[0].children[1].value != refi2.current.children[0].children[1].value){
				ref_ops.current.hidden = false;
			}else{
				ref_ops.current.hidden = true;
			}
		}



		return (
		<>
			<div className='d-flex justify-content-center mt-5'>
				<img src={pyre} height={141} alt="logo"/>
			</div>
 	   
			<p className='d-flex justify-content-center font-h2-40-ubuntu login_text mt-5 mb-5'>Recuperar senha</p>

			<div className='mx-auto text-white'>

				<div className='container p-5 main_recover_intro color_gray'>
					<div className='row color_gray'>
						<span className='color_gray font-button-20-ubuntu mb-4'>Crie uma nova senha.</span>
						<div className="mt-1 color_gray" onFocus={ () => {
								ref.current.style.opacity = 1;
								
							}} onBlur={ () => {
								ref.current.style.opacity = 0.8;
							}}>
							<div className="d-flex color_gray">
								<label className="mb-0 font-subtitle-16-ubuntu color_gray opacity_text" ref={ref}>Senha</label>
							</div>
							<div ref={refi1} className="color_gray"> {/* ref retorna null se estiver no <Input/> */}
								<Input type="password"/>
							</div>
						</div>
						<div className="mt-1 color_gray" onFocus={ () => {
								ref2.current.style.opacity = 1;
								
							}} onBlur={ () => {
								ref2.current.style.opacity = 0.8;
							}}>
							<div className="d-flex color_gray">
								<label className="mb-0 font-subtitle-16-ubuntu color_gray opacity_text" ref={ref2}>Repetir senha</label>
							</div>
							<div ref={refi2} className="color_gray">
								<Input type="password"/>
							</div>
						</div>
						<span className="font-subtitle-12-ubuntu color_gray ops_error" hidden ref={ref_ops}><img src="info.svg"/>&nbsp;&nbsp;Ops! As senhas devem ser iguais</span>	
					</div>
					<div className='row m-0 mt-4 mb-3 color_gray' onClick={verifyPassword}>
						<SignInSignOutButton >Criar nova senha</SignInSignOutButton>
					</div>
				</div>
			</div>
		</>
	);
  }

  export default RecoverPassword;


