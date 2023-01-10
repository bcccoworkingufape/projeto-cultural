import "./LoginNavButton.scss"

const LoginNavButton = (props) => {
    return(
        <button type="submit" className="login font-button-20-ubuntu">{props.children}</button>
    );
}

export default LoginNavButton;
