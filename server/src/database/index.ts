import { appDataSource } from './data-source';

appDataSource.initialize().then().catch(error => console.log(error));