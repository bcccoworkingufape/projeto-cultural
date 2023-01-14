import { ReactComponent as BasicIcon } from '../../../../assets/images/project-form-basic.svg';
import { ReactComponent as DescriptionIcon } from '../../../../assets/images/project-form-description.svg';
import { ReactComponent as PaymentIcon } from '../../../../assets/images/project-form-payment.svg';
import { ReactComponent as PreviewIcon } from '../../../../assets/images/project-form-preview.svg';

import { ReactComponent as DeleteIcon } from '../../../../assets/images/project-button-delete.svg';
import { ReactComponent as PublishIcon } from '../../../../assets/images/project-button-publish.svg';

import './projects-form-navbar.scss';


function ProjectsFormNavbar() {
    return (
        <div className="projects-form-navbar-container">
            <div className="project-image"> </div>
            <h4 className="font-subtitle-24-ubuntu"> Nome do projeto </h4>

            <div class="navbar-items d-flex flex-column justify-content-between">
                <div className="navbar-item d-flex align-items-center">
                    <BasicIcon />
                    <span style={{ marginLeft: '2px' }}> Básico </span>
                </div>

                <div className="navbar-item d-flex align-items-center">
                    <DescriptionIcon />
                    <span style={{ marginLeft: '4px' }}> Descrição </span>
                </div>

                <div className="navbar-item d-flex align-items-center">
                    <PaymentIcon />
                    <span style={{ marginLeft: '1px' }}> Financiamento </span>
                </div>

                <div className="navbar-item d-flex align-items-center">
                    <PreviewIcon />
                    <span> Preview </span>
                </div>
            </div>

            <div class="navbar-buttons">
                <button>
                    <PublishIcon />
                    <span className="font-button-20-ubuntu"> Publicar </span>
                </button>
                <button className="delete-button">
                    <DeleteIcon />
                    <span className="font-button-20-ubuntu"> Deletar </span>
                </button>
            </div>




        </div>
    )
}

export default ProjectsFormNavbar;