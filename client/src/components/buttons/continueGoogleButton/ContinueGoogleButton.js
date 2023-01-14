import "./ContinueGoogleButton.scss";
import "../../../stylesheets/_fonts.scss";
import google_logo from "../../../assets/images/google.svg";

const ContinueGoogleButton = (props) =>{
    return(
        <button type="button" className="continueGoogle font-button-20-ubuntu" onClick={() => {props.signIn()}}><img className="bg-transparent" alt="" src={google_logo} height="24px" width="24px"/>Continue com o Google</button>
    );
}

export default ContinueGoogleButton;
