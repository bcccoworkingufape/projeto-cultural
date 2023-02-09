import './project.scss';
import test from "../../../assets/images/test.jpg";
import Share from "../../../assets/images/share.svg";
import Handshake from "../../../assets/images/handshake.svg";
import Dollar from "../../../assets/images/dollar.svg";
import Hand from "../../../assets/images/hand.svg";

function Project(){
	return(
		<div className="project-container">
			<div className="d-flex flex-column">
				<span className="project-title font-h2-64-ubuntu align-self-center">O Portal</span>
				<span className="project-author font-subtitle-16-500-ubuntu align-self-center">Por Nome Sobrenome</span>
				<div className="project-main d-flex flex-row">
					<div className="project-details d-flex flex-column">
						<img className="project-big-image" src={test}/>
						<div className="d-flex flex-row">
							<img className="project-small-image" src={test}/>
							<img className="project-small-image" src={test}/>
							<img className="project-small-image" src={test}/>
							<img className="project-small-image" src={test}/>
							<img className="project-small-image" src={test}/>
						</div>
						<div className="project-after-image d-flex flex-row align-items-center">
							<div>tags</div>
							<div className="d-flex flex-row" style={{marginLeft: "auto"}}>
								<span style={{marginRight: "20px"}} className="align-self-center">Compartilhar</span>
								<img src={Share}/>
							</div>
						</div>
						<div className="project-info d-flex flex-column">
							<span className="project-info-title">Sobre o Projeto</span>
							<span className="project-info-description">Lorem ipsum dolor sit amet consectetur. Nulla felis vel amet nec viverra amet. Duis diam elit ut volutpat in donec gravida. Integer suscipit mi volutpat congue faucibus. Quis commodo turpis lorem ridiculus magnis. Libero volutpat risus mi pharetra rutrum nibh volutpat.</span>
						</div>
					</div>
					<div className="project-extra d-flex flex-column">
						<div className="project-extra-support d-flex flex-column">
							<span className="project-extra-title font-h3-32-ubuntu">Como apoiar?</span>
							<span className="project-extra-description font-subtitle-16-ubuntu">Esse projeto recebe apoio por financiamentos, patrocínios e doações</span>
							<button className="font-button-20-ubuntu">Apoiar</button>
						</div>
						<div className="project-extra-author d-flex flex-column">
							<span className="project-extra-author-title font-subtitle-24-ubuntu">Sobre o criador</span>
							<div className="project-extra-author-info d-flex flex-row">
								<img src={test} className="project-extra-pic"/>
								<div className="d-flex flex-column">
									<span className="project-extra-author-name">Nome Sobrenome</span>
									<span className="project-extra-author-rank">X projetos criados</span>
								</div>
							</div>
						</div>
						<span className="project-extra-rewards font-h3-32-ubuntu">Recompensas</span>
						<div className="project-extra-funding d-flex flex-column">
							<span className="project-extra-funding-title font-h3-32-ubuntu">Financiamento</span>
							<img className="project-extra-funding-img" src={Handshake}/>
							<span className="project-extra-funding-text">Quis commodo turpis lorem ridiculus magnis. Libero volutpat risus mi pharetra rutrum nibh volutpat. Quis commodo turpis lorem ridiculus magnis. Libero volutpat risus mi pharetra rutrum nibh volutpat.</span>
						</div>
						<div className="project-extra-funding d-flex flex-column">
							<span className="project-extra-funding-title font-h3-32-ubuntu">Financiamento</span>
							<img className="project-extra-funding-img" src={Dollar}/>
							<span className="project-extra-funding-text">Quis commodo turpis lorem ridiculus magnis. Libero volutpat risus mi pharetra rutrum nibh volutpat. Quis commodo turpis lorem ridiculus magnis. Libero volutpat risus mi pharetra rutrum nibh volutpat.</span>
						</div>
						<div className="project-extra-funding d-flex flex-column">
							<span className="project-extra-funding-title font-h3-32-ubuntu">Doações</span>
							<img className="project-extra-funding-img" src={Hand}/>
							<span className="project-extra-funding-text">Quis commodo turpis lorem ridiculus magnis. Libero volutpat risus mi pharetra rutrum nibh volutpat. Quis commodo turpis lorem ridiculus magnis. Libero volutpat risus mi pharetra rutrum nibh volutpat.</span>
						</div>


					</div>
				</div>
			</div>

		</div>
	)
}

export default Project;
