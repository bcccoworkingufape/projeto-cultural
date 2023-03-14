import './form-card.scss';
import Upload from "../../../../assets/images/upload.svg";
<<<<<<< HEAD
import axios from 'axios';
import { useState, useEffect } from 'react';

function FormCard(props) {
	const [tagsOptions, setTagsOptions] = useState([]);
	const [projectInfo, setProjectInfo] = useState(props.projectData);

	const { currentProjectData } = props;

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

	return (
		<div>
=======
import { useOutletContext } from "react-router-dom";
import { useRef, useState } from "react";

function FormCard() {
	const inputImage = useRef(null);
	const [name, setName, location, setLocation, tags, setTags, images, setImages] = useOutletContext();
	const handleNameChange = (event) => {
		console.log(name);
		setName(event.target.value);
	};
	const handleLocationChange = (event) => {
		setLocation(event.target.value);
	};
	const handleTagsChange = (event) => {
		setTags(event.target.value);
	};
	const handleimagesChange = (event) => {
		[...event.target.files].forEach(file => {
			setImages([
				...images,
				{
					data: file,
					url: URL.createObjectURL(file)
				}
			])
		})

		console.log(images);
	};
	const imageOnClick = () => {
		inputImage.current.click()
		console.log(images);
	}
	const deleteImage = (event) => {
		console.log(event);
		console.log(images);
		console.log();
		setImages(images.filter(function(pic) {
			console.log(pic.url);
			console.log(event.target.attributes[0].value);
			return pic.url !== event.target.attributes[0].value;
		}));
	}
	return( 
		<div> 
>>>>>>> c9f057912cd99753688f3eb9807600e62d509b8c
			<div className="d-flex flex-column initial-container">
				<span className="initial-title font-h3-32-ubuntu">Informações básicas sobre o seu projeto</span>
				<span className="initial-description font-body-16-roboto">Crie sua campanha de sucesso: Registre seu projeto cultural e amplie sua visibilidade no PYRE</span>
				<div className="d-flex flex-column">
					<div className="d-flex flex-row initial-block">
						<div className="d-flex flex-column initial-block-text">
							<span className="initial-block-title font-subtitle-24-ubuntu">Nome do projeto</span>
							<span className="initial-block-description font-body-16-roboto">Esse é o nome que será exibido</span>
						</div>
<<<<<<< HEAD
						<input name="name" value={currentProjectData?.name} onChange={handleChange} className="initial-block-action" />
=======
						<input value={name} onChange={handleNameChange} className="initial-block-action"/>
>>>>>>> c9f057912cd99753688f3eb9807600e62d509b8c
					</div>
					<div className="d-flex flex-row initial-block">
						<div className="d-flex flex-column initial-block-text">
							<span className="initial-block-title font-subtitle-24-ubuntu">Local do projeto</span>
							<span className="initial-block-description font-body-16-roboto">Onde o projeto foi construído</span>
						</div>
<<<<<<< HEAD
						<input name="locality" value={currentProjectData?.locality} onChange={handleChange} className="initial-block-action" />
=======
						<input value={location} onChange={handleLocationChange} className="initial-block-action"/>
>>>>>>> c9f057912cd99753688f3eb9807600e62d509b8c
					</div>
					<div className="d-flex flex-row initial-block">
						<div className="d-flex flex-column initial-block-text">
							<span className="initial-block-title font-subtitle-24-ubuntu">Tags</span>
							<span className="initial-block-description font-body-16-roboto">Selecione a categoria do seu projeto</span>
						</div>
<<<<<<< HEAD
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
=======
						<input value={tags} onChange={handleTagsChange} className="initial-block-action"/>
>>>>>>> c9f057912cd99753688f3eb9807600e62d509b8c
					</div>
					<div className="d-flex flex-row initial-block">
						<div className="d-flex flex-column initial-block-text">
							<span className="initial-block-title font-subtitle-24-ubuntu">Imagens</span>
							<span className="initial-block-description font-body-16-roboto">Você pode incluir até 4 imagens</span>
						</div>
						        {images?.map(pic => 
								<img src={pic.url} className="initial-images-arr" onClick={deleteImage}/>
						        )}
						<button className="initial-upload-button initial-block-action font-button-20-ubuntu" onClick={imageOnClick}>
							<div className="d-flex flex-row">
								Upload
<<<<<<< HEAD
								<img src={Upload} style={{ marginLeft: "29px" }} />
=======
								<img src={Upload} style={{marginLeft: "29px"}}/>
								<input type="file" name="image" id="image" ref={inputImage} style={{display: "none"}} onChange={handleimagesChange} multiple/>
>>>>>>> c9f057912cd99753688f3eb9807600e62d509b8c
							</div>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FormCard;
