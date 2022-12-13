import pyre from '../../../../assets/images/pyre.svg';
import './signUp-superior-menu.scss';

function SignUpSuperiorMenu() {
    return (
        <div className="superior-menu-container d-flex align-items-center justify-content-between"> 
            <img src={pyre} height={162} width={55.35} alt="logo" />
            <a className="external-links">&nbsp;Termos de Serviço</a>
            <a className="external-links">&nbsp;Política de Privacidade</a>
        </div>
    )
}

export default SignUpSuperiorMenu;