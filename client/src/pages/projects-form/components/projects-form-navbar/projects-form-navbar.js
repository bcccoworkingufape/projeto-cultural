import { ReactComponent as BasicIcon } from '../../../../assets/images/project-form-basic.svg';
import { ReactComponent as DescriptionIcon } from '../../../../assets/images/project-form-description.svg';
import { ReactComponent as PaymentIcon } from '../../../../assets/images/project-form-payment.svg';
import { ReactComponent as PreviewIcon } from '../../../../assets/images/project-form-preview.svg';
import { ReactComponent as DeleteIcon } from '../../../../assets/images/project-button-delete.svg';
import { ReactComponent as PublishIcon } from '../../../../assets/images/project-button-publish.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

import './projects-form-navbar.scss';

function ProjectsFormNavbar(props) {
	const [ sent, setSent ] = useState(false);
	function handleSubmit(){
		axios({
			method: "post",
			url: "http://3.87.47.178:3000/projects/createProject",
			data: {
				name: props.name,
				description: props.description,
				user_id: props.user.id,
				category_id: 0,//props.categoryId,
				locality: props.location,
			}
		});
		setSent(true);
	}
	return (
		<div className="projects-form-navbar-container">
			<div className="project-image"> </div>
			<h4 className="font-subtitle-24-ubuntu"> Nome do projeto </h4>

			<div className="navbar-items d-flex flex-column justify-content-between">
				<Link className="navbar-item d-flex align-items-center" to="/create/initial">
					<BasicIcon />
					<span style={{ marginLeft: '2px' }}> Básico </span>
				</Link>

				<Link className="navbar-item d-flex align-items-center" to="/create/description">
					<DescriptionIcon />
					<span style={{ marginLeft: '4px' }}> Descrição </span>
				</Link>

				<Link className="navbar-item d-flex align-items-center" to="/create/funding">
					<PaymentIcon />
					<span style={{ marginLeft: '1px' }}> Financiamento </span>
				</Link>

		<Link className="navbar-item d-flex align-items-center" to="/create/preview">
					<PreviewIcon />
					<span> Preview </span>
				</Link>
			</div>

			<div className="navbar-buttons">
		<div style={{textDecoration:"none"}} onClick={handleSubmit}>
				<button>
					<PublishIcon />
					{sent &&
						<p>Informações enviadas!</p>
					}
					<span className="font-button-20-ubuntu"> Publicar </span>
				</button>
		</div>
		</div>
		<Link to="/" style={{textDecoration:"none"}}>
                <button className="delete-button">
                    <DeleteIcon />
                    <span className="font-button-20-ubuntu"> Deletar </span>
                </button>
		</Link>
            </div>
    )
}

export default ProjectsFormNavbar;
