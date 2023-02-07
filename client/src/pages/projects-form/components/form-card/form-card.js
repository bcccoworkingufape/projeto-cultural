import './form-card.scss';

function FormCard() {
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
						<input className="initial-block-action"/>
					</div>
					<div className="d-flex flex-row initial-block">
						<div className="d-flex flex-column initial-block-text">
							<span className="initial-block-title font-subtitle-24-ubuntu">Local do projeto</span>
							<span className="initial-block-description font-body-16-roboto">Onde o projeto foi construído</span>
						</div>
						<input className="initial-block-action"/>
					</div>
					<div className="d-flex flex-row initial-block">
						<div className="d-flex flex-column initial-block-text">
							<span className="initial-block-title font-subtitle-24-ubuntu">Tags</span>
							<span className="initial-block-description font-body-16-roboto">Selecione as categorias do seu projeto</span>
						</div>
						<input className="initial-block-action"/>
					</div>
					<div className="d-flex flex-row initial-block">
						<div className="d-flex flex-column initial-block-text">
							<span className="initial-block-title font-subtitle-24-ubuntu">Imagens</span>
							<span className="initial-block-description font-body-16-roboto">Você pode incluir até 4 imagens</span>
						</div>
						<input className="initial-block-action"/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FormCard;
