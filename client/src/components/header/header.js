import 'bootstrap/dist/css/bootstrap.min.css';
import './header.scss';
import pyre from '../../assets/images/pyre.svg';
import { useNavigate } from 'react-router-dom'
import '../../stylesheets/_fonts.scss';
import InputHeader from "../../components/input_header/input_header";
import LoginNavButton from "../../components/buttons/loginNavButton/LoginNavButton"
import SignupNavButton from "../../components/buttons/signupNavButton/SignupNavButton"

function Header() {
    const navigate = useNavigate();
    
    return (
    <header>
            <div className="header d-flex align-items-center justify-content-around">
                <div className="justify-items-start">
			<a href="/">
				<img src={pyre} height= {55} alt="logo"/>
	                </a>
	        </div>
		<div className="text-header font-button-20-ubuntu"> Explorar </div>
		<div className="text-header font-button-20-ubuntu"> Blog </div>
		<div className="text-header font-button-20-ubuntu"> Sobre nós </div>
 
                <div className="d-flex col-5 offset-1">
			<InputHeader/>
                </div>

                <div className="d-flex">
			<div className="me-3" onClick={() => {navigate("/login")}} ><LoginNavButton/></div>
			<div onClick={() => {navigate("/signup")}}><SignupNavButton/></div>
                </div>
            </div>

    </header>
    );
  }
  
  export default Header;
