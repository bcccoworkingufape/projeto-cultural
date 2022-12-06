
import NextButton from './../buttons/nextButton.js/NextButton';
import './pop-up-modal.scss';

function PopUpModal(props) {
    return (
        <div class="d-flex flex-column pop-up-container">
            <h1 class="font-h2-56-ubuntu"> {props.title} </h1>
            <p> {props.description} </p>

            <NextButton className="confirm-button"> {props.buttonValue} </NextButton>
        </div>
    )
} 

export default PopUpModal;