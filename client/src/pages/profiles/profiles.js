import './profiles.scss';
import Header from "../../components/header/header";
import { Outlet } from "react-router-dom";

function Profiles(){
	return(
		<div>
			<Header/>
			<div className="d-flex flex-row justify-content-center">
				<Outlet/>
			</div>
		</div>
	)
}

export default Profiles;