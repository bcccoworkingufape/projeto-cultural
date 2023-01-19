import './portfolio.scss';
import Frame from "./components/frame/frame";

function Portfolio(){
	return(
		<div className="portfolio-container">
			<p className="portfolio-words font-h3-32-ubuntu">Portfólio</p>
			<p className="portfolio-words portfolio-subword font-body-16-roboto pt-1">Você pode adicionar imagens, fotos e vídeos nessa seção</p>
		<Frame inverseOrientation="false"/>
		<Frame inverseOrientation="true"/>
		<Frame inverseOrientation="false"/>
		</div>
	)
}

export default Portfolio;
