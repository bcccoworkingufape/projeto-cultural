import "./ContinueGoogleButton.scss";
import { useNavigate } from "react-router-dom";

const ContinueGoogleButton = (props) =>{
    const navigate = useNavigate();
    return(
        <button type="button" className="continueGoogle" onClick={() => {navigate(`${props.href}`)}}>Continue com o Google</button>
    );
}

export default ContinueGoogleButton;