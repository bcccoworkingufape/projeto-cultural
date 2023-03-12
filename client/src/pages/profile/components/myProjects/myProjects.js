import './myProjects.scss';
import Card from "../../../../components/card/card";
import CardCreate from "../../../../components/card-create/cardCreate";
import { Link } from 'react-router-dom';

function MyProjects(){
	return(
		<div className="myProjects-container">
			<p className="myProjects-words font-h3-32-ubuntu">Meus projetos</p>
			<div className="myProjects-main d-flex flex-row">
				<div className="d-flex flex-column">
					<Link to="/project/arcanjo"><Card title="Arcanjo" author="voce"/></Link>
					<Link to="/project/arcanjo"><Card title="Arcanjo" author="voce"/></Link>
				</div>
				<div className="d-flex flex-column">
					<Link to="/project/arcanjo"><Card title="Arcanjo" author="voce"/></Link>
					<Link to="/create/initial" style={{textDecoration: "none"}}><CardCreate /></Link>
				</div>
			</div>
		</div>
	)
}

export default MyProjects;
