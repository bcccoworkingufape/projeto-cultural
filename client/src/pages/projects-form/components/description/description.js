import './description.scss';
import { useState } from 'react';


function Description(props) {
	const [projectInfo, setProjectInfo] = useState(props.projectData);
	const { currentProjectData } = props;
	const handleDescriptionChange = (event) => {
		const { name, value } = event.target;
		props.projectData({ ...projectInfo, [name]: value });
	};
	
	return (
		<div>
			<div className="d-flex flex-column description-container">
				<span className="description-title font-h3-32-ubuntu">Descrição</span>
				<span className="description-description font-body-16-roboto">Você poderá adicionar textos, imagens e vídeos sobre o seu projeto.</span>
				<textarea name="description" className="description-textarea" value={currentProjectData?.description} onChange={handleDescriptionChange} />
			</div>
		</div>
	)
}

export default Description;
