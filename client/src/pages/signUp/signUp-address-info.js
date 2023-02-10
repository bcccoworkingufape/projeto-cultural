import SignUpForms from "./signUp-forms/signUp-forms";
import Input from './../../components/input/input';
import NextButton from './../../components/buttons/nextButton.js/NextButton';
import BackButton from './../../components/buttons/backButton/BackButton';
import './signUp-personal-info.scss';
import './signUp-address-info.scss';
import { Link } from 'react-router-dom';

function SignUpAddressInfo() {
    return (
        <div className="container">
            <SignUpForms loadingProgress={100}></SignUpForms>

            <div className="input-fields d-flex">
                <div className="right-address-inputs"> 
                    <Input label="CEP*"></Input>
                    <Input label="Cidade*"></Input>
                    <Input label="Rua*"></Input>
                </div>

                <div className="left-address-inputs"> 
                    <Input label="Estado*"></Input>
                    <Input label="Bairro*"></Input>
                    <Input label="Número*"></Input>
                </div>


            </div>

            <div className="d-flex justify-content-end buttons-line">
                <Link to="/signup/personal-information" style={{textDecoration: "none"}}><BackButton> Anterior </BackButton></Link>
                <Link to="/" style={{textDecoration: "none"}}><NextButton> Próximo </NextButton></Link>
            </div>

        </div>
    );
}

export default SignUpAddressInfo;
