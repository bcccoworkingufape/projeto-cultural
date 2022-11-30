import "./LoginButton.scss"
import { useNavigate } from 'react-router-dom'

const LoginButton = (props) => {
    const navigate = useNavigate();
    return(
        <button type="submit" className="login" onClick={() => {navigate("/signup")}}>Login</button>
    );
}

export default LoginButton;