import { ReactComponent as MyProjectsIcon } from '../../../../assets/images/user-my-projects.svg';
import { ReactComponent as ShutdownIcon } from '../../../../assets/images/user-shutdown.svg';
import { ReactComponent as PortfolioIcon } from '../../../../assets/images/user-portfolio.svg';
import { ReactComponent as ProfileIcon } from '../../../../assets/images/user-profile.svg';
import { Link } from "react-router-dom";

import './sideMenu.scss';


function SideMenu() {
    return (
        <div className="sidemenu-container">
            <div className="sidemenu-items d-flex flex-column justify-content-between">
                <div className="sidemenu-item d-flex align-items-center">
		    <Link to="/profile/info" style={{ textDecoration: 'none' }}>
                        <MyProjectsIcon style={{ marginRight: "3px", marginLeft: "3px"}}/>
                        <span> Meus projetos </span>
		    </Link>
                </div>
                <div className="sidemenu-item d-flex align-items-center">
		    <Link to="/profile/info" style={{ textDecoration: 'none' }}>
                        <ProfileIcon/>
	                <span> Perfil </span>
		    </Link>
                </div>
                <div className="sidemenu-item d-flex align-items-center">
		    <Link to="/profile/portfolio" style={{ textDecoration: 'none' }}>
	                <PortfolioIcon/>
		        <span> Portfolio </span>
		    </Link>
                </div>
                <div className="sidemenu-item d-flex align-items-center mt-auto">
                    <ShutdownIcon style={{ marginRight: "3px", marginLeft: "3px"}}/>
                    <span> Sair </span>
                </div>
            </div>
        </div>
    )
}

export default SideMenu;
