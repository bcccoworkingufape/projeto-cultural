import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'projeto-cultural',
    synchronize: false,
    logging: true,
    "migrations": [
         "src/database/migrations/*.ts"
    ],
  });
  
  export default AppDataSource;