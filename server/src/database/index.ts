import { appDataSource } from './data-source';

export default async (): Promise<void> => {
    return appDataSource.initialize()
    .then( () => console.log("Banco de dados incializado") )
    .catch(error => console.log(`Ocorreu um erro durante a inicialização do banco de dados: ${error}`));
}   







