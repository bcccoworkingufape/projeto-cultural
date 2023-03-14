import './form-card.scss';
import Upload from "../../../../assets/images/upload.svg";
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';

function FormCard(props) {
	const [tagsOptions, setTagsOptions] = useState([]);
	const [projectInfo, setProjectInfo] = useState(props.projectData);
	const { currentProjectData } = props;
	const inputImage = useRef(null);
	var images = [];

	function handleChange(event) {
		const { name, value } = event.target;
		props.projectData({ ...projectInfo, [name]: value });
	}

	useEffect(() => {
		axios.get("http://localhost:3000/categories").then(response => {
			setTagsOptions(response.data.categories);
		}).catch(err => {
			alert("Ocorreu um erro ao tentar carregar as catergorias. Reinicie a página para tentar novamente.")
		})
	}, []);

	const handleimagesChange = (event) => {
		images = currentProjectData.images;

		const { name } = event.target;
		[...event.target.files].forEach(file => {
			images.push({data: file, url: URL.createObjectURL(file)});
			console.log(images);
		})
		if(Object.keys(images).length > 4){
			images.shift();
		}
		currentProjectData.images = images;
		props.projectData({ ...projectInfo, [name]: currentProjectData.images });
		console.log(currentProjectData);
	};
	const imageOnClick = () => {
		inputImage.current.click()
	}
	const deleteImage = (event) => {
		console.log(currentProjectData);
		//console.log(event);
		//console.log(props.projectData);
		props.projectData(...projectInfo.filter(function(pic) {
		//	console.log(pic.url);
		//	console.log(event.target.attributes[0].value);
			return pic.url !== event.target.attributes[0].value;
		}));
	}
	return (
		<div>
			<div className="d-flex flex-column initial-container">
				<span className="initial-title font-h3-32-ubuntu">Informações básicas sobre o seu projeto</span>
				<span className="initial-description font-body-16-roboto">Crie sua campanha de sucesso: Registre seu projeto cultural e amplie sua visibilidade no PYRE</span>
				<div className="d-flex flex-column">
					<div className="d-flex flex-row initial-block">
						<div className="d-flex flex-column initial-block-text">
							<span className="initial-block-title font-subtitle-24-ubuntu">Nome do projeto</span>
							<span className="initial-block-description font-body-16-roboto">Esse é o nome que será exibido</span>
						</div>
						<input name="name" value={currentProjectData?.name} onChange={handleChange} className="initial-block-action" />
					</div>
					<div className="d-flex flex-row initial-block">
						<div className="d-flex flex-column initial-block-text">
							<span className="initial-block-title font-subtitle-24-ubuntu">Local do projeto</span>
							<span className="initial-block-description font-body-16-roboto">Onde o projeto foi construído</span>
						</div>
						<input name="locality" value={currentProjectData?.locality} onChange={handleChange} className="initial-block-action" />
					</div>
					<div className="d-flex flex-row initial-block">
						<div className="d-flex flex-column initial-block-text">
							<span className="initial-block-title font-subtitle-24-ubuntu">Tags</span>
							<span className="initial-block-description font-body-16-roboto">Selecione a categoria do seu projeto</span>
						</div>
						{tagsOptions && (
							<select className="initial-block-action initial-block-select" value={currentProjectData?.category_id} name="category_id" onChange={handleChange}>
								<option>Categorias</option>
								{tagsOptions.map((option) => (
									<option className="initial-block-select" onChange={handleChange} key={option.name} value={option.id}>
										{option.name}
									</option>
								))}
							</select>
						)}
					</div>
					<div className="d-flex flex-row initial-block">
						<div className="d-flex flex-column initial-block-text">
							<span className="initial-block-title font-subtitle-24-ubuntu">Imagens</span>
							<span className="initial-block-description font-body-16-roboto">Você pode incluir até 4 imagens</span>
						</div>
						{currentProjectData.images.map((pic, index) => (
							<img src={pic.url} key={index} className="initial-images-arr" onClick={deleteImage}/>
						))}
						<button className="initial-upload-button initial-block-action font-button-20-ubuntu" onClick={imageOnClick}>
							<div className="d-flex flex-row">
								Upload
								<img src={Upload} style={{marginLeft: "29px"}}/>
								<input type="file" name="images" id="images" ref={inputImage} style={{display: "none"}} onChange={handleimagesChange} multiple/>
							</div>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FormCard;
