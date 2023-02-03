import './profile.scss';
import SideMenu from "./components/sideMenu/sideMenu";
import { Outlet } from "react-router-dom";



function Profile(){
	return(
		<div className="d-flex flex-row">
			<SideMenu/>
			<Outlet/>
		</div>
	)
}

export default Profile;
