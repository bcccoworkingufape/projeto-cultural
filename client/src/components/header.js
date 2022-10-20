import 'bootstrap/dist/css/bootstrap.min.css';
import './header.scss';
import logo from '../assets/images/logo.svg';
import { useNavigate } from 'react-router-dom'

function Header() {
    const navigate = useNavigate();
    
    return (
    <header className="bg-dark text-white">
            <div className="container header d-flex align-items-center justify-content-center">
                <div className='col-2'>
                    <a href="/" className="d-flex align-items-center justify-content-center text-white text-decoration-none">
                        <img src={logo} height= {30} alt="logo" />
                    </a>
                </div>
                <div className="col-3 offset-3 d-flex ">
                    <input type="text" className ="search-box col-11" placeholder="Busque um projeto" />
                    <button className ="btn btn-light submitButton" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                    </button>
                </div>

                <div className="col-3 offset-3 d-flex">
                    <button type="button" className="btn btn-light loginButton w-50" onClick={() => {navigate("/login")}}>Entrar</button>
                </div>
            </div>

    </header>
    );
  }
  
  export default Header;