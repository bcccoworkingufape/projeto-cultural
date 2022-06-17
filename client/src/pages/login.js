/*import 'bootstrap/dist/css/bootstrap.min.css';*/

function login() {
    return (
        <>
         <div className='container col-4 mt-5'>
                        
            <p className='d-flex justify-content-center'>Login</p>

            <div className='col d-flex justify-content-between'>
                <button type="submit" className="btn btn-border font-type">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-google icon-social" viewBox="0 0 16 16">
                        <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                    </svg>
                    Entrar com Google
                </button>

                <button type="submit" className="btn offset-custom btn-border font-type">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-facebook icon-social" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                    </svg>
                    Entrar com Facebook
                </button>
            </div>

            <hr />

        </div>


        <div className='container col-4'>
            <form>
                <div className='row'>
                    <div className="form-group mt-4">
                        <label className="mb-1">Email</label>
                        <input type="email" className="form-control" />
                    </div>

                    <div className="form-group mt-4 ">
                        <label className="mb-1">Senha</label>
                        <input type="password" className="form-control" />
                        <small><a href='?#' className="link">Esqueceu sua senha?</a></small>
                    </div>
                </div>

                <div className='row m-0 mt-4'>
                    <button type="submit" className="btn btn-dark shadow font-type w-100">Entrar</button>
                </div>
            </form>
        </div>

        <div className='container col-4 mt-5'>
            <h6 className='d-flex justify-content-center mb-4' style={{fontWeight: 500}}><b>Ainda não tem conta?</b></h6>

            <div className='col d-flex justify-content-between'>
                <button type="submit" className="btn btn-light shadow font-type">Sou Criador</button>
                <button type="submit" className="btn offset-custom btn-light shadow font-type">Sou Financiador</button>
            </div>
        </div>  
        </>
    );
  }

  export default login;