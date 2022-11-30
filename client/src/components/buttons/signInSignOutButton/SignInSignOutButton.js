import "./SignInSignOutButton.scss" 

const SignInSignOutButton = (props) =>{
    return(
        <button type="submit" className="signInSignOut">{props.children}</button>
    );
}

export default SignInSignOutButton;