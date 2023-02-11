import './profile.scss';
import SideMenu from "./components/sideMenu/sideMenu";
import Header from "../../components/header/header";
import { Outlet } from "react-router-dom";

function Profile(){
	return(
		<div>
			<Header/>
			<div className="d-flex flex-row justify-content-center">
				<SideMenu/>
				<Outlet/>
			</div>
		</div>
	)
}

export default Profile;
