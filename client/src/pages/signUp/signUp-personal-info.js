import SignUpForms from "./signUp-forms/signUp-forms";
import Input from './../../components/input/input';
import NextButton from './../../components/buttons/nextButton.js/NextButton';
import BackButton from './../../components/buttons/backButton/BackButton';
import './signUp-personal-info.scss';
import { Link } from 'react-router-dom';

function SignUpPersonalInfo() {
    return (
        <div className="container">
            <SignUpForms loadingProgress={50}></SignUpForms>

            <div className="input-fields">
                <Input label="Nome completo"></Input>
                <Input label="CPF/CNPJ"></Input>
                <Input label="Telefone"></Input>
            </div>

            <div className="d-flex justify-content-end buttons-line">
                <Link to="/signup/intro" style={{textDecoration: "none"}}><BackButton> Anterior </BackButton></Link>
                <Link to="/signup/address-information" style={{textDecoration: "none"}}><NextButton> Próximo </NextButton></Link>
            </div>

        </div>
    );
}

export default SignUpPersonalInfo;
