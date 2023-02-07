import './createProject.scss';
import Header from "../../components/header/header";
import Navbar from "./components/projects-form-navbar/projects-form-navbar";
import { Outlet } from "react-router-dom";


function CreateProject() {
	return( 
		<div> 
			<Header/>
			<div className="d-flex flex-row">
				<Navbar/>
				<Outlet/>
			</div>
		</div>
	)
}

export default CreateProject;
