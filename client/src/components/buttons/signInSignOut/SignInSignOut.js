import "./SignInSignOut.scss" 

const SignInSignOut = (props) =>{
    return(
        <button type="submit" className="signInSignOut">{props.children}</button>
    );
}

export default SignInSignOut;