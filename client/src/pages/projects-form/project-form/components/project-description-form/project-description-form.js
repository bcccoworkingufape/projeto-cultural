import Input from '../../../../../components/input/input';
import ProjectFormInfoPage from '../info-page/info-page';


function ProjectDescriptionForm() {
    return(
        <div className="form-container-basic">
        <div className="project-form-basic">
            <ProjectFormInfoPage title='Descrição'
                description={`Você poderá adicionar textos, imagens e vídeos sobre o seu projeto.`}> </ProjectFormInfoPage>

            <div className="project-form-input d-flex justify-content-between">
                <h3> Nome do projeto </h3>
                <Input></Input>
            </div>

            <div className="project-form-input d-flex justify-content-between">
                <div className="project-form-field-info">
                    <h3> Local do projeto </h3>
                    <p> Onde o projeto foi construído </p>
                </div>
                <Input> </Input>
            </div>

            <div className="project-form-input d-flex justify-content-between">
                <div className="project-form-field-info">
                    <h3> Tags </h3>
                    <p> Selecione a principal categoria do seu projeto  </p>
                </div>
                <Input> </Input>
            </div>

            <div className="project-form-input d-flex justify-content-between">
                <div className="project-form-field-info">
                    <h3> Imagens </h3>
                    <p> Você pode incluir até 4 imagens </p>
                </div>
            </div>

        </div>
    </div>
    )

}

export default ProjectDescriptionForm;