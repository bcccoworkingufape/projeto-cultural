/*import 'bootstrap/dist/css/bootstrap.min.css';*/
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import './login.scss';
import '../stylesheets/_colors.scss';
import '../stylesheets/_fonts.scss';


function Login() {
		const navigate = useNavigate();
		return (
		<>
			<div className='d-flex justify-content-center mt-5'>
				<img src={logo} height={140} alt="logo"/>
			</div>
 	   
			<p className='d-flex justify-content-center font-h3-32-ubuntu login_text mt-5'>Login</p>

			<div className='mx-auto main text-white'>

				<div className='d-flex container p-5'>
					<form>
						<div className='row'>
							<div className="form-group">
								<label className="mb-1">Email</label>
								<input type="email" className="form-control" />
							</div>

							<div className="form-group mt-4 ">
								<div className="d-flex">
										<label className="mb-1">Senha</label>
										<a href='?#' className="link ms-auto subtitle_16_ubuntu forgot_password">Esqueceu sua senha?</a>
								</div>
								<input type="password" className="form-control" />
							</div>
						</div>

						<div className='row m-0 mt-4'>
							<button type="submit" className="btn btn-dark shadow font-type w-100">Entrar</button>
						</div>
					</form>
				</div>

				<div className='container col-4 mt-5'>
					<h6 className='d-flex justify-content-center mb-4' style={{fontWeight: 500}}><b>Ainda não tem conta?</b></h6>

					<div className='col d-flex justify-content-between'>
						<button type="submit" className="btn btn-light shadow font-type w-50" onClick={() => {navigate("/signup")}}>Sou Criador</button>
						<button type="submit" className="btn offset-custom btn-light shadow font-type w-50" onClick={() => {navigate("/signup")}}>Sou Financiador</button>
					</div>
				</div>	
			</div>
		</>
	);
  }

  export default Login;
