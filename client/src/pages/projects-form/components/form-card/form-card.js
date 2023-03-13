import './form-card.scss';
import Upload from "../../../../assets/images/upload.svg";
import { useOutletContext } from "react-router-dom";

function FormCard() {
	const { name, location, tags, imageURL } = useOutletContext();
	const handleNameChange = (event) => {
		name.setName(event.target.value);
	};
	const handleLocationChange = (event) => {
		location.setLocation(event.target.value);
	};
	const handleTagsChange = (event) => {
		tags.setTags(event.target.value);
	};
	const handleimageURLChange = (event) => {
		imageURL.setImageURL(event.target.value);
	};
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
						<input value={name.name} onChange={handleNameChange} className="initial-block-action"/>
					</div>
					<div className="d-flex flex-row initial-block">
						<div className="d-flex flex-column initial-block-text">
							<span className="initial-block-title font-subtitle-24-ubuntu">Local do projeto</span>
							<span className="initial-block-description font-body-16-roboto">Onde o projeto foi construído</span>
						</div>
						<input value={location.location} onChange={handleLocationChange} className="initial-block-action"/>
					</div>
					<div className="d-flex flex-row initial-block">
						<div className="d-flex flex-column initial-block-text">
							<span className="initial-block-title font-subtitle-24-ubuntu">Tags</span>
							<span className="initial-block-description font-body-16-roboto">Selecione as categorias do seu projeto</span>
						</div>
						<input value={tags.tags} onChange={handleTagsChange} className="initial-block-action"/>
					</div>
					<div className="d-flex flex-row initial-block">
						<div className="d-flex flex-column initial-block-text">
							<span className="initial-block-title font-subtitle-24-ubuntu">Imagens</span>
							<span className="initial-block-description font-body-16-roboto">Você pode incluir até 4 imagens</span>
						</div>
						<button className="initial-upload-button initial-block-action font-button-20-ubuntu">
							<div className="d-flex flex-row">
								Upload
								<img src={Upload} style={{marginLeft: "29px"}}/>
							</div>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FormCard;
