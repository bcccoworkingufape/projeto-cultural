import Funding from './../projects-form/components/funding/funding';
import ProjectsFormNavbar from '../projects-form/components/projects-form-navbar/projects-form-navbar';

import { useState } from 'react';
import FormCard from '../projects-form/components/form-card/form-card';
import Description from './../projects-form/components/description/description';
import Header from './../../components/header/header';
import axios from 'axios';

function CreateProjectTest() {
	const [projectData, setProjectData] = useState({
		name: '',
		locality: '',
		category_id: '',
		description: '',
		user_id: JSON.parse(localStorage.getItem('logged_user')).id,
		images: []
	});
	if(projectData.user_id === undefined){
		projectData.user_id = JSON.parse(localStorage.getItem('logged_user')).uid;
	}

	const [navbarValue, setNavbarValue] = useState('1');

	function valueNavbar(value) {
		setNavbarValue(value);
	}

	function updateProjectData(data) {
		setProjectData({ ...projectData, ...data });
	}

	function submit() {
				axios.post("http://localhost:3000/projects/createProject",
				projectData
			).then(response => { 
				alert('Projeto criado com sucesso');
				window.location.replace('http://localhost:3001/explore');
			})
			.catch(error => {
				alert('Ocorreu um erro no login. Confira as informções e tente novamente');
			});
	}

	return (
		<div>
			<Header />
			<div className="d-flex">
				<ProjectsFormNavbar navbarValue={valueNavbar} submitButtonClick={submit}></ProjectsFormNavbar>
				<div>
					{navbarValue === '1' && (
						<FormCard projectData={updateProjectData} currentProjectData={projectData}> </FormCard>
					)}

					{navbarValue === '2' && (
						<Description projectData={updateProjectData} currentProjectData={projectData}> </Description>
					)}

					{navbarValue === '3' && (
						<Funding> </Funding>
					)}

					{navbarValue === '4' && (
						<Funding> </Funding>
					)}
				</div>


			</div>
		</div>
	)
}

export default CreateProjectTest;
