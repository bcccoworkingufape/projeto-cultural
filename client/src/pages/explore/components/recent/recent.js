import './recent.scss';
import CardSmall from "../../../../components/card-small/card-small";

function Recent(){
	return(
		<div className="recent-container">
			<span className="recent-title font-h2-56-ubuntu">Mais recentes</span>
			<div className="recent-card-container-container">
				<div className="d-flex flex-row recent-card-container">
					<div className="recent-card-workaround">
						<CardSmall title="Stickman" author="por Lucas Branco"/>
					</div>
					<div className="recent-card-workaround">
						<CardSmall title="Stickman" author="por Lucas Branco"/>
					</div>
					<div className="recent-card-workaround">
						<CardSmall title="Stickman" author="por Lucas Branco"/>
					</div>
					<div className="recent-card-workaround">
						<CardSmall title="Stickman" author="por Lucas Branco"/>
					</div>
				</div>
				<div className="d-flex flex-row recent-card-container">
					<div className="recent-card-workaround">
						<CardSmall title="Stickman" author="por Lucas Branco"/>
					</div>
					<div className="recent-card-workaround">
						<CardSmall title="Stickman" author="por Lucas Branco"/>
					</div>
					<div className="recent-card-workaround">
						<CardSmall title="Stickman" author="por Lucas Branco"/>
					</div>
					<div className="recent-card-workaround">
						<CardSmall title="Stickman" author="por Lucas Branco"/>
					</div>
				</div>
			</div>
			<span className="font-subtitle-24-ubuntu d-flex recent-extra justify-content-end">Ver mais</span>
	</div>
	)
}

export default Recent;

