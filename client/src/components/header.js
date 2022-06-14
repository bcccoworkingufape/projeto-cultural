import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/images/logo.svg';

function Header() {
    return (
    <header className="p-3 bg-dark text-white">
        <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a href="/" className="d-flex align-items-center mb-0 mb-lg-0 text-white text-decoration-none">
                    <img src={logo} height= {30} alt="logo" />
                </a>

                <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
 
                </ul>

                <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-auto" role="search">
                    <div>
                    <input type="search" className="form-control form-control-dark text-white bg-dark" placeholder="Busque um projeto" aria-label="Search"/>
                    </div>


                </form>

                <div className="text-end">
                <button type="button" className="btn btn-outline-light me-2">Entrar</button>
                </div>
            </div>
        </div>
    </header>
    );
  }
  
  export default Header;