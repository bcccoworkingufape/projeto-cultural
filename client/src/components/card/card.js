import './card.scss';
import test from '../../assets/images/test.jpg';

function Card({ url, title, author }) {
	return (
		<div className="card-container d-flex flex-column">
			<img className="card-img"/>
			<span className="card-title font-h2-40-ubuntu">{title}</span>
			<span className="card-author font-subtitle-16-ubuntu">{author}</span>

			<style jsx>{`
				.card-img {
					background: linear-gradient(90deg, rgba(0, 0, 0, 0.8) 7.66%, rgba(0, 0, 0, 0.73665) 17.55%, rgba(0, 0, 0, 0) 66.96%), url(${test});
					background-size: contain;
					filter: grayscale(100%);
				}
				.card-img:hover{
					background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(90deg, rgba(0, 0, 0, 0.8) 5.21%, rgba(0, 0, 0, 0.592) 27.05%, rgba(0, 0, 0, 0) 55.9%, rgba(0, 0, 0, 0.536) 93.15%), url(${test});
					background-size: contain;
					filter: grayscale(0%);
					border: 0.5px solid #151416;
					box-shadow: 0px 0px 20px rgba(79, 79, 79, 0.5);
				}

			`}</style>
		</div>
	)
}

export default Card;
