import ProjectsFormNavbar from './../components/projects-form-navbar/projects-form-navbar';
import './project-form.scss';
import ProjectBasicForm from './components/project-basic-form/project-basic-form';

function ProjectForm() {
    return (
        <div className="d-flex">
            <ProjectsFormNavbar> </ProjectsFormNavbar>
                <div className="form-subforms"> 
                    <ProjectBasicForm> </ProjectBasicForm>
                </div>
            </div>

    )
}

export default ProjectForm;