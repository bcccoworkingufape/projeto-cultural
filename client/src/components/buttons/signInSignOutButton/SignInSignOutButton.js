import "./SignInSignOutButton.scss" 
import "../../../stylesheets/_fonts.scss"

const SignInSignOutButton = (props) =>{
    return(
        <button type="submit" className="signInSignOut font-button-20-ubuntu">{props.children}</button>
    );
}

export default SignInSignOutButton;
