import Input from './../../components/input/input';
import pyre from '../../assets/images/pyre.svg';
import LoginNavButton from '../../components/buttons/loginNavButton/LoginNavButton';
import './landingPage.scss';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
    const navigate = useNavigate();

    return (
        <div className="d-flex flex-column landing-page">
            <div className="d-flex justify-content-between landing-header">
                <div className="d-flex align-items-center first-group-header">
                    <img src={pyre} height={55} alt="logo" />
                    <div className="text-header font-button-20-ubuntu link"> Explorar </div>
                    <div className="text-header font-button-20-ubuntu link"> Criar projeto </div>
                    <div className="text-header font-button-20-ubuntu link"> Sobre nós </div>
                </div>

                <div className="d-flex align-items-center first-group-header">
                    <Input placeholder="Pesquisar por projeto"> </Input>
                    <div onClick={() => navigate('/signup')} className="text-header font-button-20-ubuntu link"> Cadastrar </div>
                    <div onClick={() => navigate('/login')}> <LoginNavButton> Login </LoginNavButton> </div>
                </div>
            </div>

            <div className="d-flex flex-column align-items-center center-text justify-content-center">
                <h1 className="font-h1-64-ubuntu"> Laoreet condimentum odio malesuada id fames dolor tellus </h1>
                <p className="font-subtitle-24-500-ubuntu"> Metus nisl condimentum egestas nulla sed mus eget mi tortor. </p>

                <div className="d-flex align-items-center center-buttons">
                    <LoginNavButton> Financiar </LoginNavButton>
                    <div className="text-header font-button-20-ubuntu link center-link"> Saiba mais </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;