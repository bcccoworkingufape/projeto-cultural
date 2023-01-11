import './baseboard.scss';
import pyre from '../../assets/images/pyre.svg';
import apple_store from '../../assets/images/download-apple-store-button.svg';
import google_store from '../../assets/images/download-google-store-button.svg';

function Baseboard() {
    return (
        <div className="baseboard-container d-flex flex-column">
            <div className="colums-baseboard d-flex justify-content-between">
                <img src={pyre} height={173} alt="logo" />

                <div className="d-flex flex-column baseboard-column">
                    <h3 className="font-h3-32-ubuntu"> Redes Sociais</h3>
                    <p> Linkedin </p>
                    <p> Instagram </p>
                    <p> Novidades </p>
                </div>

                <div className="d-flex flex-column baseboard-column">
                    <h3 className="font-h3-32-ubuntu"> Outros </h3>
                    <p> Blog </p>
                    <p> Sobre nós </p>
                    <p> Termos de uso </p>
                    <p> Política e privacidade </p>
                </div>

                <div className="d-flex flex-column baseboard-column">
                    <h3 className="font-h3-32-ubuntu"> Faça o download do app </h3>
                    <div className="d-flex">
                        <img src={apple_store} height={56.26} width={200.13} alt="Download app with Apple Store" />
                        <img src={google_store} height={56.26} width={200.13} alt="Download app with Google Store" />
                    </div>

                </div>
            </div>

            <span className="copyright-text font-body-16-700-roboto background-color-grey"> @ Pyre 2022 copyright. All rights reserved. </span>
        </div>
    )

}

export default Baseboard;