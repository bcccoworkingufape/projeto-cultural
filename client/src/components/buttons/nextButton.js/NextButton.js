import "./NextButton.scss"
import { useNavigate } from "react-router-dom"

const NextButton = (props) => {
    const navigate =  useNavigate();
    return(
        <button type="button" className={props.className} onClick={() => {navigate(`${props.href}`)}}>{props.children}</button>
    )
}
export default NextButton;