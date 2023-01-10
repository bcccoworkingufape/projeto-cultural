import './signUp-forms.scss';
import SignUpSuperiorMenu from '../components/signUp-superior-menu/signUp-superior-menu';
import loadingProgress50 from '../../../assets/images/loading-signup-50.svg';
import loadingProgress100 from '../../../assets/images/loading-signup-100.svg';


function SignUpForms({ loadingProgress }) {
    return (
        <div>
            <SignUpSuperiorMenu> </SignUpSuperiorMenu>

            <div className="d-flex justify-content-between">
                <div className="pageInfo">
                    <h1 className="font-h2-56-ubuntu"> Cadastro </h1>
                    <p className="font-subtitle-24-ubuntu font-weigth-500 primary-grey-text-color">
                        Algumas informações pessoais serão necessárias para
                        que você possa financiar ou publicar um projeto.
                        Não se preocupe, respeitamos a Lei de Proteção
                        de Dados (LGPD) e suas informações estarão seguras
                        conosco.
                    </p>

                    <h3 className="font-h3-32-ubuntu form-title"> Informações Pessoais </h3>
                </div>

                {loadingProgress === 50 ?
                    <img src={loadingProgress50} height={162} alt="loading-progress" /> :
                    <img src={loadingProgress100} height={162} alt="loading-progress" />
                }
            </div>
        </div>
    )
}

export default SignUpForms;