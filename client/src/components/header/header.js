import 'bootstrap/dist/css/bootstrap.min.css';
import './header.scss';
import notification from '../../assets/images/notification-icon.svg';
import userImage from '../../assets/images/user-img.png';
import pyre from '../../assets/images/pyre.svg';
import signOutIcon from '../../assets/images/sign-out.png';
import { useNavigate } from 'react-router-dom'
import '../../stylesheets/_fonts.scss';
import InputHeader from "../../components/input_header/input_header";
import LoginNavButton from "../../components/buttons/loginNavButton/LoginNavButton"
import SignupNavButton from "../../components/buttons/signupNavButton/SignupNavButton"
import { getAuth, signOut } from "firebase/auth";
import { Link } from "react-router-dom";

function Header() {
	const navigate = useNavigate();
	const auth = getAuth();

	const handleLogOut = () => {
		signOut(auth);
		window.location.href = "/";
		localStorage.removeItem('logged_user');
	}

	const isUserLogged = localStorage.getItem('logged_user');

	return (
		<header>
			<div className="header d-flex align-items-center justify-content-around">
				<div className="justify-items-start" style={{ marginLeft: "168px" }}>
					<a href="/">
						<img src={pyre} height={55} alt="logo" />
					</a>
				</div>

				{!isUserLogged ? (
					<div>
						<div>
							<Link to="/explore" style={{ textDecoration: "none" }}><div className="text-header font-button-20-ubuntu"> Explorar </div></Link>
							<Link to="/blog" style={{ textDecoration: "none" }}><div className="text-header font-button-20-ubuntu"> Blog </div></Link>
							<Link to="/about" style={{ textDecoration: "none" }}><div className="text-header font-button-20-ubuntu"> Sobre nós </div></Link>
						</div>
						<div className="d-flex col-5 offset-1">
							<InputHeader />
						</div>
					</div>
				) :
					(
						<div className="d-flex">
							<Link to="/explore" style={{ textDecoration: "none" }}><div className="text-header font-button-20-ubuntu"> Explorar </div></Link>
							<Link to="/create-project" style={{ textDecoration: "none" }}><div className="text-header font-button-20-ubuntu"> Criar projeto </div></Link>
							<Link to="/profile/projects" style={{ textDecoration: "none" }}><div className="text-header font-button-20-ubuntu"> Meus Projetos </div></Link>
						</div>
					)}

				{!isUserLogged ? (
					<div className="d-flex">
						<div className="me-3" onClick={() => { navigate("/login") }} ><LoginNavButton>Login</LoginNavButton></div>
						<div onClick={() => { navigate("/signup") }}><SignupNavButton /></div>
					</div>
				) : (
					<div className="d-flex justify-content-around">
						<img style={{ marginRight: '64px' }} src={notification} height={30} alt="notifications" />
						<img style={{ marginRight: '64px' }} src={userImage} height={30} alt="userImage" />
						<img onClick={handleLogOut} style={{ marginRight: '64px' }} src={signOutIcon} height={30} alt="signOut" />
					</div>
				)};
			</div>
		</header>
	);

}

export default Header;
