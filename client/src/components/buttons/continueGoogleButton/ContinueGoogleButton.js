import "./ContinueGoogleButton.scss";
import { useNavigate } from "react-router-dom";
import "../../../stylesheets/_fonts.scss";

const ContinueGoogleButton = (props) =>{
    const navigate = useNavigate();
    return(
        <button type="button" className="continueGoogle font-button-20-ubuntu" onClick={() => {navigate(`${props.href}`)}}><img className="bg-transparent" alt="" src="/Google_logo.svg" height="24px" width="24px"/>Continue com o Google</button>
    );
}

export default ContinueGoogleButton;
