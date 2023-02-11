import './explore.scss';
import Header from "../../components/header/header";
import Featured from "./components/featured/featured";
import Popular from "./components/popular/popular";
import Recent from "./components/recent/recent";
import Footer from "../../components/footer/footer";

function Explore(){
	return(
		<div>
			<Header/>
			<div className="d-flex flex-column align-items-center">
				<Featured/>
				<Recent/>
				<Popular/>
				<Footer/>
			</div>
		</div>
	)
}

export default Explore;
