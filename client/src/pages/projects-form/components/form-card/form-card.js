import './form-card.scss';
import Upload from "../../../../assets/images/upload.svg";
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
			<div className="d-flex flex-column initial-container">
				<span className="initial-title font-h3-32-ubuntu">Informações básicas sobre o seu projeto</span>
				<span className="initial-description font-body-16-roboto">Lorem ipsum grande, bem grande</span>
				<div className="d-flex flex-column">
					<div className="d-flex flex-row initial-block">
						<div className="d-flex flex-column initial-block-text">
							<span className="initial-block-title font-subtitle-24-ubuntu">Nome do projeto</span>
							<span className="initial-block-description font-body-16-roboto">Esse é o nome do projeto</span>
						</div>
						<input value={name} onChange={handleNameChange} className="initial-block-action"/>
					</div>
					<div className="d-flex flex-row initial-block">
						<div className="d-flex flex-column initial-block-text">
							<span className="initial-block-title font-subtitle-24-ubuntu">Local do projeto</span>
							<span className="initial-block-description font-body-16-roboto">Onde o projeto foi construído</span>
						</div>
						<input value={location} onChange={handleLocationChange} className="initial-block-action"/>
					</div>
					<div className="d-flex flex-row initial-block">
						<div className="d-flex flex-column initial-block-text">
							<span className="initial-block-title font-subtitle-24-ubuntu">Tags</span>
							<span className="initial-block-description font-body-16-roboto">Selecione as categorias do seu projeto</span>
						</div>
						<input value={tags} onChange={handleTagsChange} className="initial-block-action"/>
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
								<img src={Upload} style={{marginLeft: "29px"}}/>
								<input type="file" name="image" id="image" ref={inputImage} style={{display: "none"}} onChange={handleimagesChange} multiple/>
							</div>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FormCard;
