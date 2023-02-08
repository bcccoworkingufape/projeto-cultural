import './footer.scss';
import Logo from "../../assets/images/pyre.svg";

function Footer() {
	return (
	<footer className="footer-container">
		<div className="d-flex flex-row justify-content-between">
			<div className="footer-logo">
				<img src={Logo}/>
			</div>
			<div className="footer-info-1 d-flex flex-column">
				<span className="foorter-info-title font-h3-32-ubuntu">Redes Sociais</span>
				<span className="footer-info-item font-body-20-700-roboto">LinkedIn</span>
				<span className="footer-info-item font-body-20-700-roboto">Instagram</span>
				<span className="footer-info-item font-body-20-700-roboto">Novidade</span>
			</div>
			<div className="footer-info-2 d-flex flex-column">
				<span className="foorter-info-title font-h3-32-ubuntu">Outros</span>
				<span className="footer-info-item font-body-20-700-roboto">Blog</span>
				<span className="footer-info-item font-body-20-700-roboto">Termos de uso</span>
				<span className="footer-info-item font-body-20-700-roboto">Política e privacidade</span>
			</div>
		</div>
		<span className="footer-copyright font-body-16-roboto">@ Pyre 2022 copyright. All rights reserved.</span>
	</footer>
	);
}
  
export default Footer;
