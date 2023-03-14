import LoginNavButton from '../../components/buttons/loginNavButton/LoginNavButton';
import NotSignedupHeader from '../../components/notSignedupHeader/notSignedupHeader';
import './landingPage.scss';

function LandingPage() {
    return (
        <div className="d-flex flex-column landing-page">
            <NotSignedupHeader></NotSignedupHeader>
            <div className="d-flex flex-column align-items-center center-text justify-content-center">
                <h1 className="font-h1-64-ubuntu"> Desperte sua criatividade e mergulhe na cultura: descubra o marketing cultural </h1>
                <p className="font-subtitle-24-500-ubuntu"> Encontre, conecte-se, inspire-se </p>

                <div className="d-flex align-items-center center-buttons">
                    <LoginNavButton> Financiar </LoginNavButton>
                    <div className="text-header font-button-20-ubuntu link center-link"> Saiba mais </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;