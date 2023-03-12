import pyre from '../../../assets/images/pyre.svg';
import './signUp-email-introduction.scss';
import SignInSignOutButton from "../../../components/buttons/signInSignOutButton/SignInSignOutButton"
import Input from './../../../components/input/input';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function SignUpEmailIntroduction() {
	const [ emailValue, setEmailValue ] = useState('');
	const [ passwordValue, setPasswordValue ] = useState('');
	const [ passwordVerValue, setPasswordVerValue ] = useState('');
	const [ nameValue, setNameValue ] = useState('');
	const [ signedUpValue, setSignedUpValue ] = useState('');

	const handleEmailChange = (event) => {
		setEmailValue(event.target.value);
	};
	const handlePasswordChange = (event) => {
		setPasswordValue(event.target.value);
	};
	const handlePasswordVerChange = (event) => {
		setPasswordVerValue(event.target.value);
	};
	const handleNameChange = (event) => {
		setNameValue(event.target.value);
	};

	function signup_request(){
		setSignedUpValue(true);
		axios({
			method: "post",
			url: "http://3.87.47.178:3000/users/signup",
			data: {
				name: nameValue,
				email: emailValue,
				password: passwordValue,
				user_type: "artista",
				imageURL: "",
			},
		});
	}

	return (
		<div className="sign-up-container">
			<div className='d-flex justify-content-center mt-5'>
				<img src={pyre} height={141} alt="logo" />
			</div>

			<p className='d-flex justify-content-center font-h2-40-ubuntu login_text mt-5 mb-5'>Cadastro</p>

			<div className='mx-auto text-white'>
				<div className='container p-5 main_signup color_gray'>
					<Input value={nameValue} handleOnChange={handleNameChange} label="Nome"></Input>
					<Input value={emailValue} handleOnChange={handleEmailChange} label="Email"></Input>
					<Input value={passwordValue} handleOnChange={handlePasswordChange} type="password" label="Senha"></Input>
					<Input value={passwordVerValue} handleOnChange={handlePasswordVerChange} type="password" label="Repetir senha"></Input>
					<div className='row m-0 mt-4 mb-3 color_gray justift-content-center'>
						{signedUpValue &&
							<p className="signed_up"> Informações enviadas para cadastro! </p>
						}
						<div className="p-0 link" onClick={signup_request}>
							<SignInSignOutButton>Cadastrar</SignInSignOutButton>
						</div>
					</div>
				</div>
			</div>
			<div className="bottom_text text-white d-flex justify-content-center font-body-20-700-roboto mt-4 p-2">
				Já tem conta?
				<Link to='/login' className="link signup font-body-20-700-roboto">&nbsp;Faça login</Link></div>
			<div className="d-flex justify-content-center text-grey font-body-16-roboto font-weigth-400">
				Ao criar uma conta você concorda com os
				<a className="external-links" href='/'>&nbsp;Termos de Serviço.</a>
			</div>
			<div className="d-flex justify-content-center text-grey font-body-16-roboto font-weigth-400">
				Para mais informações acesse nossa
				<a className="external-links" href='/'>&nbsp;Política de Privacidade.</a>
			</div>
		</div>
	);
}

export default SignUpEmailIntroduction;
