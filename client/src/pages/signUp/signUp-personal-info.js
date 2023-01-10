import SignUpForms from "./signUp-forms/signUp-forms";
import Input from './../../components/input/input';
import NextButton from './../../components/buttons/nextButton.js/NextButton';
import BackButton from './../../components/buttons/backButton/BackButton';
import './signUp-personal-info.scss';

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
                <BackButton> Anterior </BackButton>
                <NextButton> Próximo </NextButton>
            </div>

        </div>
    );
}

export default SignUpPersonalInfo;
