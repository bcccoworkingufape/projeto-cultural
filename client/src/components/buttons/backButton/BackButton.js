import "./BackButton.scss"
import { useNavigate } from "react-router-dom"

const BackButton = (props) => {
    const navigate =  useNavigate();
    return(
        <button type="button" className="back" onClick={() => {navigate(`${props.href}`)}}>{props.children}</button>
    )
}
export default BackButton;