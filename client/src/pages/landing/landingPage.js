import LoginNavButton from '../../components/buttons/loginNavButton/LoginNavButton';
import NotSignedupHeader from '../../components/notSignedupHeader/notSignedupHeader';
import './landingPage.scss';

function LandingPage() {
    return (
        <div className="d-flex flex-column landing-page">
            <NotSignedupHeader></NotSignedupHeader>
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