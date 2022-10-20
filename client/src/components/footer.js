import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.scss';

function Footer() {
	return (
	<footer className="bg-dark text-white">
		<div className="d-flex align-items-center justify-content-center">
			<div className="col">
				<h3 className="text-uppercase">Lorem Ipsum</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam iaculis justo ut ipsum sagittis, eget laoreet neque gravida. Duis nec sem bibendum, imperdiet lorem ac, luctus mi. Proin bibendum ut ex euismod efficitur. Duis fringilla condimentum orci, id tincidunt tortor fermentum eu.
				</p>
			</div>
			<div className="col">
				<h3 className="text-uppercase">Lorem Ipsum</h3>
				<p>
			    		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam iaculis justo ut ipsum sagittis, eget laoreet neque gravida. Duis nec sem bibendum, imperdiet lorem ac, luctus mi. Proin bibendum ut ex euismod efficitur. Duis fringilla condimentum orci, id tincidunt tortor fermentum eu.
				</p>
			</div>
		</div>
		<div className="copyright bg-secondary d-flex align-items-center justify-content-center">
	    		<h6 className="text-uppercase">Copyright</h6>
		</div>
	</footer>
	);
}
  
export default Footer;
