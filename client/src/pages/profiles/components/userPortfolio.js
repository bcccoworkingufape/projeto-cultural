import './userPortfolio.scss';
import portfolioPic from "../../../assets/images/user-portfolio.svg";
import { Link } from 'react-router-dom';
import Frame from "../../profile/components/portfolio/components/frame/frame";

function UserPortfolio(){
	return(
		<div> 
			<div className="d-flex flex-column portfolio-section">
				<div className="d-flex flex-column">
					<div className="font-button-20-ubuntu">
						<img src={portfolioPic}/>
						<span className="portfolio-bigger-text">Portfólio</span>
					</div>
					<div className="d-flex flex-row" style={{width: "1095px"}}>
						<span className="portfolio-smaller-text">Conheça melhor o trabalho de (nome) através da galeria em seu portfólio</span>
					</div>
					<div>
						<Frame inverseOrientation="false"/>
						<Frame inverseOrientation="true"/>
						<Frame inverseOrientation="false"/>
					</div>
					<Link to="/profiles/:userId" className="portfolio-link"><div className="back-button"><span className="font-button-20-ubuntu">Voltar</span></div></Link>
				</div>
			</div>
		</div>
	)
}

export default UserPortfolio;
