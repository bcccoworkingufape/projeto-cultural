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
				<img src={logo} height={141} alt="logo"/>
			</div>
 	   
			<p className='d-flex justify-content-center font-h3-32-ubuntu login_text mt-5 mb-5'>Login</p>

			<div className='mx-auto text-white'>

				<div className='container p-5 main'>
					<form>
						<div className='row'>
							<div className="form-group">
								<label className="mb-2 font-subtitle-16-ubuntu">Email</label>
								<input type="email" className="form-control" placeholder="name@email.com" />
							</div>

							<div className="form-group mt-4 ">
								<div className="d-flex">
										<label className="mb-2 font-subtitle-16-ubuntu">Senha</label>
										<a href='?#' className="link ms-auto font-subtitle-16-ubuntu forgot_password">Esqueceu sua senha?</a>
								</div>
								<input type="password" className="form-control" />
							</div>
						</div>

						<div className='row m-0 mt-4'>
							<button type="submit" className="btn btn-dark shadow font-type w-100">Entrar</button>
						</div>
						<div className='line font-subtitle-16-ubuntu'>ou</div>
					</form>
				</div>
			</div>
			<div className="bottom_text text-white d-flex justify-content-center font-body-20-roboto mt-4 p-2">Novo por aqui? <a href='?#' className="link cadastro font-body-20-roboto">&nbsp;Cadastre-se</a></div>
		</>
	);
  }

  export default Login;
