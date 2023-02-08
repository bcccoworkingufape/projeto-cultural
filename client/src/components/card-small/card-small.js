import './card-small.scss';
import test from '../../assets/images/test.jpg';

function CardSmall({ url, title, author }) {
	return (
		<div className="card-small-container d-flex flex-column">
			<img className="card-small-img"/>
			<span className="card-small-title font-h2-40-ubuntu">{title}</span>
			<span className="card-small-author font-subtitle-16-ubuntu">{author}</span>

			<style jsx>{`
				.card-small-img {
					background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.68) 100%), url(${test});
					filter: grayscale(100%);
					background-size: cover;
					background-position: center 25%;
				}
				.card-small-img:hover{
					background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.56525) 64.37%, rgba(0, 0, 0, 0.68) 100%), url(${test});
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

export default CardSmall;
