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

	const [valor, setValor] = useState(1);

	function handleChange(event) {
		setValor(event.target.dataset.value);
		props.navbarValue(event.target.dataset.value);
	}

	return (
		<div className="projects-form-navbar-container">
			<div className="project-image"> </div>
			<h4 className="font-subtitle-24-ubuntu"> Nome do projeto </h4>

			<div className="navbar-items d-flex flex-column justify-content-between">
				<a onClick={handleChange} data-value={1} className="navbar-item d-flex align-items-center">
					<BasicIcon onClick={handleChange} data-value={1} />
					<span onClick={handleChange} data-value={1} style={{ marginLeft: '2px' }}> Básico </span>
				</a>

				<a onClick={handleChange} data-value={2} className="navbar-item d-flex align-items-center">
					<DescriptionIcon onClick={handleChange} data-value={2} />
					<span onClick={handleChange} data-value={2} style={{ marginLeft: '4px' }}> Descrição </span>
				</a>

				<a onClick={handleChange} data-value={3} className="navbar-item d-flex align-items-center">
					<PaymentIcon onClick={handleChange} data-value={3} />
					<span onClick={handleChange} data-value={3} style={{ marginLeft: '1px' }}> Financiamento </span>
				</a>

				<a onClick={handleChange} data-value={4} className="navbar-item d-flex align-items-center">
					<PreviewIcon onClick={handleChange} data-value={4}/>
					<span onClick={handleChange} data-value={4}> Preview </span>
				</a>
			</div>

			<div className="navbar-buttons">
				<div style={{ textDecoration: "none" }}>
					<button onClick={props.submitButtonClick}>
						<PublishIcon />
						<span className="font-button-20-ubuntu"> Publicar </span>
					</button>
				</div>
			</div>
			<Link to="/explore" style={{ textDecoration: "none" }}>
				<button className="delete-button">
					<DeleteIcon />
					<span className="font-button-20-ubuntu"> Deletar </span>
				</button>
			</Link>
		</div>
	)
}

export default ProjectsFormNavbar;
