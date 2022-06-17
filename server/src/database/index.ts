import { updateTypeAssertion } from 'typescript';
import { appDataSource } from './data-source';
import { User } from './entities/User';

export default async (): Promise<void> => {
    return appDataSource.initialize()
    .then( () => console.log("Vanco de dados incializado") )
    .catch(error => console.log(`Ocorreu um erro durante a inicialização do banco de dados: ${error}`));
}   







