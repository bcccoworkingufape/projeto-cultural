import './myProjects.scss';
import Card from "../../../../components/card/card";
import CardCreate from "../../../../components/card-create/cardCreate";

function MyProjects(){
	return(
		<div className="myProjects-container">
			<p className="myProjects-words font-h3-32-ubuntu">Meus projetos</p>
			<div className="myProjects-main d-flex flex-row">
				<div className="d-flex flex-column">
					<Card title="Arcanjo" author="voce"/>
					<Card title="Arcanjo" author="voce"/>
				</div>
				<div className="d-flex flex-column">
					<Card title="Arcanjo" author="voce"/>
					<CardCreate />
				</div>
			</div>
		</div>
	)
}

export default MyProjects;
