import './description.scss';
import Input from "../../../../components/input/input";

function Description() {
	return( 
		<div> 
			<div className="d-flex flex-column description-container">
				<span className="description-title font-h3-32-ubuntu">Descrição</span>
				<span className="description-description font-body-16-roboto">Você poderá adicionar textos, imagens e vídeos sobre o seu projeto.</span>
				<Input/>
			</div>
		</div>
	)
}

export default Description;
