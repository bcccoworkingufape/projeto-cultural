import './featured.scss';
import { Outlet } from "react-router-dom";
import Card from "../../../../components/card/card";

function Featured(){
	return(
		<div className="featured-container">
			<span className="featured-title font-h2-56-ubuntu">Destaques</span>
			<div className="featured-card-container-container">
				<div className="d-flex flex-row featured-card-container">
					<div className="featured-card-workaround">
						<Card title="Stickman" author="por Lucas Branco"/>
					</div>
					<div className="featured-card-workaround">
						<Card title="Stickman" author="por Lucas Branco"/>
					</div>
				</div>
				<div className="d-flex flex-row featured-card-container">
					<div className="featured-card-workaround">
						<Card title="Stickman" author="por Lucas Branco"/>
					</div>
					<div className="featured-card-workaround">
						<Card title="Stickman" author="por Lucas Branco"/>
					</div>
				</div>
			</div>
			<span className="font-subtitle-24-ubuntu d-flex featured-extra justify-content-end">Ver mais</span>
	</div>
	)
}

export default Featured;

