import './createProject.scss';
import Header from "../../components/header/header";
import Navbar from "./components/projects-form-navbar/projects-form-navbar";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function CreateProject(user) {
	const [name, setName] = useState('');
	const [location, setLocation] = useState('');
	const [tags, setTags ] = useState('');
	const [imageURL, setImageURL] = useState('');
	const [description, setDescription] = useState('');
	return( 
		<div> 
			<Header/>
			<div className="d-flex flex-row justify-content-center">
				<Navbar name={name} location={location} imageURL={imageURL} description={description} tags={tags} user={user}/>
				<Outlet context={{
					name: [name, setName], 
					location: [location, setLocation],
					tags: [tags, setTags],
					imageURL: [imageURL, setImageURL],
					description: [description, setDescription],
					}}
				/>
			</div>
		</div>
	)
}

export default CreateProject;
