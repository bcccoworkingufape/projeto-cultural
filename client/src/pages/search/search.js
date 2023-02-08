import './search.scss';
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

function Search(){
	return(
		<div>
			<Header/>
			<div className="search-result">
				<div className="d-flex flex-row">
					<div className="d-flex flex-column">
					</div>
					<div className="d-flex flex-column">
					</div>
				</div>
			</div>
			<Footer/>
		</div>
	)
}

export default Search;
