import './description.scss';
import { useState } from 'react';


function Description(props) {
	const [projectInfo, setProjectInfo] = useState(props.projectData);
	const { currentProjectData } = props;

<<<<<<< HEAD
	const handleDescriptionChange = (event) => {
		const { name, value } = event.target;
		props.projectData({ ...projectInfo, [name]: value });
=======
	fetch('/some-api', { method: form.method, body: formData });

}*/ // submit sera feito pelo navbar

function Description() {
	const [ name, setName, location, setLocation, tags, setTags, images, setImage, description, setDescription ] = useOutletContext();
	const handleDescriptionChange = (event) => {
		setDescription(event.target.value);
>>>>>>> c9f057912cd99753688f3eb9807600e62d509b8c
	};
	
	return (
		<div>
			<div className="d-flex flex-column description-container">
				<span className="description-title font-h3-32-ubuntu">Descrição</span>
				<span className="description-description font-body-16-roboto">Você poderá adicionar textos, imagens e vídeos sobre o seu projeto.</span>
<<<<<<< HEAD
				<textarea name="description" className="description-textarea" value={currentProjectData?.description} onChange={handleDescriptionChange} />
=======
				{/*<form method="post" onsubmit={handleSubmit}>
					*/}<textarea className="description-textarea" value={description} onChange={handleDescriptionChange}/>{/*
					<button type="submit" className="font-button-20-ubuntu">Alterar</button>
				</form>*/}
>>>>>>> c9f057912cd99753688f3eb9807600e62d509b8c
			</div>
		</div>
	)
}

export default Description;
