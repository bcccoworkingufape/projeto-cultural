import './userProfile.scss';
import test from "../../../assets/images/test.jpg";
import profileImage from "../../../assets/images/user-profile.svg";
import shortText from "../../../assets/images/project-form-description.svg";
import threeLines from "../../../assets/images/three-lines.svg";
import facebookPic from "../../../assets/images/profile-facebook.svg";
import instagramPic from "../../../assets/images/profile-instagram.svg";
import tiktokPic from "../../../assets/images/profile-tiktok.svg";
import twitterPic from "../../../assets/images/profile-twitter.svg";
import linkPic from "../../../assets/images/profile-link.svg";
import youtubePic from "../../../assets/images/profile-youtube.svg";
import portfolioPic from "../../../assets/images/user-portfolio.svg";
import projectPic from "../../../assets/images/project-form-basic.svg";
import contribuitionPic from "../../../assets/images/project-form-payment.svg";
import { Link } from 'react-router-dom';
import Frame from "../../profile/components/portfolio/components/frame/frame";
import Card from "../../../components/card/card";

function UserProfile(){
	return(
		<div> 
			<div className="d-flex flex-row first-section">
				<img className="profile-image" alt="an user" src={test}/>
				<div className="d-flex flex-column general-info">
					<div className="profile-little-text font-button-20-ubuntu">
						<img src={profileImage} style={{height: "24px"}}/>
						<span className="p-2">Criador</span>
					</div>
					<span className="profile-name font-h3-32-ubuntu">Fulano de Tal</span>
					<div className="profile-little-text font-button-20-ubuntu">
						<img src={shortText} style={{height: "6px", width: "16px"}}/>
						<span className="p-2">Sobre</span>
					</div>
					<span className="profile-description-text font-body-16-roboto" style={{width: "476px"}}>Lorem ipsum dolor sit amet consectetur. Morbi nec odio iaculis velit at dapibus accumsan ultrices. Molestie vulputate mollis a ac cursus odio aliquam dui in. Lorem ipsum dolor sit amet consectetur. Morbi nec odio iaculisLorem ipsum dolor sit amet consectetur. Morbi nec odio iaculis velit at dapibus accumsan ultrices. Molestie vulputate mollis a ac cursus odio aliquam dui in. Lorem ipsum dolor sit amet consectetur. Morbi nec odio iaculis </span>
				</div>
				<div className="d-flex flex-column general-info-2">
					<div className="profile-little-text font-button-20-ubuntu">
						<img src={threeLines} style={{height: "14px", width: "14px"}}/>
						<span className="p-2">Presença online</span>
					</div>
					<span className="profile-description-text" style={{width: "474px", marginBottom: "45px"}}>Clique nos links das redes sociais para conhecer mais sobre o (nome) e sua relevância online.</span>
					<div className="d-flex flex-row">
						<div className="d-flex flex-column">
							<div className="profile-button"><img src={facebookPic}/><span className="font-body-16-roboto p-3">Facebook</span></div>
							<div className="profile-button"><img src={instagramPic}/><span className="font-body-16-roboto p-2">Instagram</span></div>
							<div className="profile-button"><img src={tiktokPic}/><span className="font-body-16-roboto p-1">Tiktok</span></div>
						</div>
						<div className="d-flex flex-column">
							<div className="profile-button"><img src={twitterPic}/><span className="font-body-16-roboto">Twitter</span></div>
							<div className="profile-button"><img src={linkPic}/><span className="font-body-16-roboto">Site pessoal</span></div>
							<div className="profile-button"><img src={youtubePic}/><span className="font-body-16-roboto">Youtube</span></div>
						</div>
					</div>
				</div>
			</div>
			<div className="d-flex flex-column second-section">
				<div className="d-flex flex-column second-main">
					<div className="font-button-20-ubuntu">
						<img src={portfolioPic}/>
						<span className="second-bigger-text">Portfólio</span>
					</div>
					<div className="d-flex flex-row" style={{width: "1395px"}}>
						<span className="second-smaller-text">Conheça melhor o trabalho de (nome) através da galeria em seu portfólio</span>
						<Link to="/profiles/(nome)/portfolio" className="second-link"><span className="font-subtitle-16-ubuntu">Ver mais</span></Link>
					</div>
					<div>
						<Frame inverseOrientation="false"/>
					</div>
				</div>

				<div className="d-flex flex-column second-main">
					<div className="font-button-20-ubuntu">
						<img src={projectPic}/>
						<span className="second-bigger-text p-1">Projetos</span>
					</div>
					<div className="d-flex flex-row" style={{width: "1595px"}}>
						<span className="second-smaller-text">Esses são os projetos publicados pelo (nome) até o momento. Clique no card para conhecer mais.</span>
						<Link to="/profiles/(nome)/portfolio" className="second-link"><span className="font-subtitle-16-ubuntu">(X) publicados</span></Link>
					</div>
					<div className="d-flex flex-row">
						<div className="d-flex flex-column">
							<Card title="Arcanjo" author="voce"/>
							<Card title="Arcanjo" author="voce"/>
						</div>
						<div className="d-flex flex-column">
							<Card title="Arcanjo" author="voce"/>
							<Card title="Arcanjo" author="voce"/>
						</div>

					</div>
				</div>

				<div className="d-flex flex-column second-main">
					<div className="font-button-20-ubuntu">
						<img src={contribuitionPic}/>
						<span className="second-bigger-text p-1">Contribuições</span>
					</div>
					<div className="d-flex flex-row" style={{width: "1595px"}}>
						<span className="second-smaller-text">Esses projetos contaram com a contribuição financeira do (nome)</span>
						<Link to="/profiles/(nome)/portfolio" className="second-link"><span className="font-subtitle-16-ubuntu">(X) contribuições</span></Link>
					</div>
					<div>
						<span className="second-smaller-text">Colocar aqui as contribuições</span>
					</div>
				</div>
				



			</div>
		</div>
	)
}

export default UserProfile;
