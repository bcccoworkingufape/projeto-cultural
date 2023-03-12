import './info-page.scss';

function ProjectFormInfoPage({ title, description }) {
    return (
        <div className="project-form-info-page" >
            <h2 className="font-h3-32-ubuntu"> { title } </h2>
            <p className="font-body-16-400-roboto"> { description } </p>
        </div>
    )
}

export default ProjectFormInfoPage;