import 'bootstrap/dist/css/bootstrap.min.css';

function login() {
    return (
        <>
        <div className='container col-4'>
            <form className='d-flex justify-content-around'>
                <div className='row'>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Senha</label>
                        <input type="password" className="form-control" />
                        <small className="form-text text-muted"><a href='?#'>Esqueceu sua senha?</a></small>
                    </div>
                    <button type="submit" className="btn btn-primary">Entrar</button>
                </div>
            </form>
        </div>

        <div className='container col-4 mt-5'>
            <div className='align-items-center'>
                <p>Ainda não tem conta?</p>

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