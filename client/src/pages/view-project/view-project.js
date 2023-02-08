import './view-project.scss';
import { Outlet } from "react-router-dom";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

function ViewProject(){
	return(
		<div>
			<Header/>
			<Outlet/>
			<Footer/>
		</div>
	)
}

export default ViewProject;
