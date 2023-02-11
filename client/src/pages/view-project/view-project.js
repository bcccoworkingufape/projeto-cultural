import './view-project.scss';
import { Outlet } from "react-router-dom";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

function ViewProject(){
	return(
		<div>
			<Header/>
			<div className="d-flex flex-column align-items-center">
				<Outlet/>
				<Footer/>
			</div>
		</div>
	)
}

export default ViewProject;
