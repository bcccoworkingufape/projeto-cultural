import './popular.scss';
import CardBig from "../../../../components/card-big/card-big";
import CardSmall from "../../../../components/card-small/card-small";
import Card from "../../../../components/card/card";

function Popular(){
	return(
		<div className="popular-container">
			<span className="popular-title font-h2-56-ubuntu">Populares</span>
			<div className="popular-card-container-container">
				<div className="d-flex flex-row popular-card-container">
					<div className="popular-card-workaround">
						<CardBig title="Stickman" author="Lucas Branco"/>
					</div>
					<div className="d-flex flex-column">
						<div className="d-flex flex-row popular-card-container">
							<div className="popular-card-workaround">
								<CardSmall title="Stickman" author="Lucas Branco"/>
							</div>
							<div className="popular-card-workaround">
								<CardSmall title="Stickman" author="Lucas Branco"/>
							</div>
						</div>
						<Card title="Stickman" author="Lucas Branco"/>
					</div>
				</div>
			</div>
			<span className="font-subtitle-24-ubuntu d-flex popular-extra justify-content-end">Ver mais</span>
	</div>
	)
}

export default Popular;

