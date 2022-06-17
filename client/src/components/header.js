import 'bootstrap/dist/css/bootstrap.min.css';
import './header.scss';
import logo from '../assets/images/logo.svg';

function Header() {
    return (
    <header className="bg-dark text-white">
            <div className="container header d-flex align-items-center justify-content-center">
                <div className='col-2'>
                    <a href="/" className="d-flex align-items-center justify-content-center text-white text-decoration-none">
                        <img src={logo} height= {30} alt="logo" />
                    </a>
                </div>
                <div className="col-3 offset-3 d-flex ">
                    <input type="text" className ="form-control col-11" placeholder="Busque um projeto"/>
                    <button className ="btn btn-light submitButton" type="button">Buscar</button>
                </div>

                <div className="col-3 offset-3 d-flex">
                    <button type="button" className="btn loginButton btn-light">Entrar</button>
                </div>
            </div>

    </header>
    );
  }
  
  export default Header;