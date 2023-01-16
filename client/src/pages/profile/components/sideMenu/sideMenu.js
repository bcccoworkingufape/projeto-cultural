import { ReactComponent as MyProjectsIcon } from '../../../../assets/images/user-my-projects.svg';
import { ReactComponent as ShutdownIcon } from '../../../../assets/images/user-shutdown.svg';
import { ReactComponent as PortfolioIcon } from '../../../../assets/images/user-portfolio.svg';
import { ReactComponent as ProfileIcon } from '../../../../assets/images/user-profile.svg';

import './sideMenu.scss';


function SideMenu() {
    return (
        <div className="sidemenu-container">
            <div className="sidemenu-items d-flex flex-column justify-content-between">
                <div className="sidemenu-item d-flex align-items-center">
                    <MyProjectsIcon/>
                    <span> Meus projetos </span>
                </div>
                <div className="sidemenu-item d-flex align-items-center">
                    <ProfileIcon/>
                    <span> Perfil </span>
                </div>
                <div className="sidemenu-item d-flex align-items-center">
                    <PortfolioIcon/>
                    <span> Portfolio </span>
                </div>
                <div className="sidemenu-item d-flex align-items-center mt-auto">
                    <ShutdownIcon/>
                    <span> Sair </span>
                </div>
            </div>
        </div>
    )
}

export default SideMenu;
