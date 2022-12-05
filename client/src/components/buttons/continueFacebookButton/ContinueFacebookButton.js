import "./ContinueFacebookButton.scss";
import { useNavigate } from "react-router-dom";
import "../../../stylesheets/_fonts.scss";

const ContinueFacebookButton = (props) =>{
    const navigate = useNavigate();
    return(
        <button type="button" className="continueFacebook font-button-20-ubuntu" onClick={() => {navigate(`${props.href}`)}}><img className="bg-transparent" alt="" src="Facebook_logo.svg" height="24px" width="24px"/>Continue com o Facebook</button>
    );
}

export default ContinueFacebookButton;
