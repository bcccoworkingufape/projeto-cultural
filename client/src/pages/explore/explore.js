import './explore.scss';
import Header from "../../components/header/header";
import Featured from "./components/featured/featured";
import { Outlet } from "react-router-dom";

function Explore(){
	return(
		<div>
			<Header/>
			<Featured/>
		</div>
	)
}

export default Explore;
