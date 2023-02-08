import './card-big.scss';
import test from '../../assets/images/test.jpg';

function CardBig({ url, title, author }) {
	return (
		<div className="card-big-container d-flex flex-column">
			<img className="card-big-img"/>
			<span className="card-big-title font-h2-40-ubuntu">{title}</span>
			<span className="card-big-author font-subtitle-16-ubuntu">{author}</span>

			<style jsx>{`
				.card-big-img {
					background: linear-gradient(90deg, rgba(0, 0, 0, 0.8) 7.66%, rgba(0, 0, 0, 0.73665) 17.55%, rgba(0, 0, 0, 0) 66.96%), url(${test});
					background-size: cover;
					filter: grayscale(100%);
					background-position: center 25%;
				}
				.card-big-img:hover{
					background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(90deg, rgba(0, 0, 0, 0.8) 5.21%, rgba(0, 0, 0, 0.592) 27.05%, rgba(0, 0, 0, 0) 55.9%, rgba(0, 0, 0, 0.536) 93.15%), url(${test});
					background-size: cover;
					filter: grayscale(0%);
					border: 0.5px solid #151416;
					box-shadow: 0px 0px 20px rgba(79, 79, 79, 0.5);
				        background-position: center 25%;
				}

			`}</style>
		</div>
	)
}

export default CardBig;
