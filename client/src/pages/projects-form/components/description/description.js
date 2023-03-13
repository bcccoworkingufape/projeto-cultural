import './description.scss';
import { useOutletContext } from "react-router-dom";

/* function handleSubmit(e) {
	e.preventDefault();

	const form = e.target;
	const formData = new FormData(form);

	fetch('/some-api', { method: form.method, body: formData });

}*/ // submit sera feito pelo navbar

function Description() {
	const { description } = useOutletContext();
	const handleDescriptionChange = (event) => {
		description.setDescription(event.target.value);
	};
	return( 
		<div> 
			<div className="d-flex flex-column description-container">
				<span className="description-title font-h3-32-ubuntu">Descrição</span>
				<span className="description-description font-body-16-roboto">Você poderá adicionar textos, imagens e vídeos sobre o seu projeto.</span>
				{/*<form method="post" onsubmit={handleSubmit}>
					*/}<textarea className="description-textarea" value={description.description} onChange={handleDescriptionChange}/>{/*
					<button type="submit" className="font-button-20-ubuntu">Alterar</button>
				</form>*/}
			</div>
		</div>
	)
}

export default Description;
