import './cardCreate.scss';
import addSign from '../../assets/images/add-sign.svg';
import { Link } from 'react-router-dom';

function CardCreate({ url, title, author }) {
	return (
		<Link to="/create/initial" style={{textDecoration: "none"}}>
			<div className="cardCreate-container d-flex flex-column">
				<span className="cardCreate-title">Novo projeto</span>
				<img className="cardCreate-img" src={addSign}/>
			</div>
		</Link>
	)
}

export default CardCreate;
