import './info.scss';
import UploadButton from '../../../../components/buttons/uploadButton/uploadButton';
import Input from '../../../../components/input/input';

function Info(){
	return(
		<div className="info-container">
			<p className="info-words font-h3-32-ubuntu">Perfil público</p>
			<p className="info-words info-subword font-body-16-roboto pt-1">Im the Scatman Ski-bi dibby dib yo da dub dub Yo da dub dub Ski-bi dibby dib yo da dub dub Yo da dub dub (Im the Scatman) Ski-bi dibby dib yo da dub dub Yo da dub dub Ski-bi dibby dib yo da dub dub Yo da dub dub Ba-da-ba-da-ba-be bop bop bodda bope Bop ba bodda bope Be bop ba bodda bope Bop ba bodda Ba-da-ba-da-ba-be bop ba bodda bope Bop ba bodda bope Be bop ba bodda bope Bop ba bodda bope</p>
			
			<div className="d-flex flex-row info-subcontainer">
				<div>
					<p className="info-subcontainer-masterword font-subtitle-24-ubuntu">Foto de perfil</p>
					<p className="info-subcontainer-subword font-body-16-roboto">Escolha uma foto com boa iluminação</p>
				</div>
				<div className="info-subcontainer-extra align-items-end">
					<UploadButton></UploadButton>
				</div>
			</div>
			
			<div className="d-flex flex-row info-subcontainer">
				<div>
					<p className="info-subcontainer-masterword font-subtitle-24-ubuntu">Nome público</p>
					<p className="info-subcontainer-subword font-body-16-roboto">Informe seu nome e um sobrenome</p>
				</div>
				<div className="info-subcontainer-extra align-items-end">
					<Input placeholder="Nome Sobrenome" style={{width: "500px"}}></Input>
				</div>
			</div>

			<div className="d-flex flex-row info-subcontainer">
				<div>
					<p className="info-subcontainer-masterword font-subtitle-24-ubuntu">Sobre</p>
					<p className="info-subcontainer-subword font-body-16-roboto">Descreva sobre você em um twitte</p>
				</div>
				<div className="info-subcontainer-extra align-items-end">
					<Input placeholder="Lorem Ipsum bem grande"></Input>
				</div>
			</div>

			<div className="d-flex flex-row info-subcontainer mb-5">
				<div>
					<p className="info-subcontainer-masterword font-subtitle-24-ubuntu">Presença online</p>
					<p className="info-subcontainer-subword font-body-16-roboto">Adicione o link de suas redes sociais<br/>para aumentar o engajamento com os<br/>financiadores</p>
				</div>
				<div className="info-subcontainer-extra align-items-end">
					<Input placeholder="Facebook"></Input>
					<Input placeholder="Instagram"></Input>
					<Input placeholder="Twitter"></Input>
					<Input placeholder="Tiktok"></Input>
					<Input placeholder="Youtube"></Input>
					<Input placeholder="Site pessoal"></Input>
				</div>
			</div>
			
			<p className="info-words font-h3-32-ubuntu pt-4">Informações pessoais</p>
			<p className="info-words info-subword font-body-16-roboto pt-1">Essas informações não são públicas e não serão compartilhadas com outros usuários.</p>

			<div className="d-flex flex-row info-subcontainer">
				<div>
					<p className="info-subcontainer-masterword font-subtitle-24-ubuntu">Dados pessoais</p>
					<p className="info-subcontainer-subword font-body-16-roboto">Esses dados foram informados<br/>durante o cadastro e para a sua<br/>segurança não podem ser alterados.</p>
				</div>
				<div className="info-subcontainer-extra align-items-end">
					<Input></Input>
					<Input></Input>
					<Input></Input>
				</div>
			</div>

			<div className="d-flex flex-row info-subcontainer">
				<div>
					<p className="info-subcontainer-masterword font-subtitle-24-ubuntu">Endereço</p>
					<p className="info-subcontainer-subword font-body-16-roboto">Esses dados foram informados<br/>durante o cadastro e para a sua<br/>segurança não podem ser alterados.</p>
				</div>
				<div className="info-subcontainer-extra align-items-end">
					<Input></Input>
					<Input></Input>
					<Input></Input>
				</div>
			</div>

		</div>
	)
}

export default Info;
