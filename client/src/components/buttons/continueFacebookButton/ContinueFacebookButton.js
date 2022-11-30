import "./ContinueFacebookButton.scss";
import { useNavigate } from "react-router-dom";

const ContinueFacebookButton = (props) =>{
    const navigate = useNavigate();
    return(
        <button type="button" className="continueFacebook" onClick={() => {navigate(`${props.href}`)}}>Continue com o Facebook</button>
    );
}

export default ContinueFacebookButton;