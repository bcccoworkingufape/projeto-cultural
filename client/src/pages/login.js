import 'bootstrap/dist/css/bootstrap.min.css';

function login() {
    return (
        <>
        <div className='container col-4'>
            <form>
                <div className='row'>
                    <div className="form-group mt-4 ">
                        <label>Email</label>
                        <input type="email" className="form-control" />
                    </div>
                    <div className="form-group mt-4 ">
                        <label>Senha</label>
                        <input type="password" className="form-control" />
                        <small className="form-text text-muted"><a href='?#'>Esqueceu sua senha?</a></small>
                    </div>
                </div>
                <div className='row w-100 m-0 mt-4'>
                    <button type="submit" className="btn btn-primary shadow-sm p-2">Entrar</button>
                </div>
            </form>
        </div>

        <div className='container col-4 mt-5'>
            <div className='align-items-center'>
                <p className='d-flex justify-content-center'>Ainda não tem conta?</p>

                <div className='col'>
                    <button type="submit" className="btn btn-primary p-3 w-50">Sou Criador</button>
                    <button type="submit" className="btn btn-primary p-3 w-50">Sou Financiador</button>
                </div>
            </div>
        </div>
        </>
    );
  }

  export default login;