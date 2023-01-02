import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: 'postgres',
    url: process.env.TYPEORM_URL,
    port: Number(process.env.TYPEORM_PORT),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    synchronize: true,
    logging: false,
    entities: [process.env.TYPEORM_ENTITIES_DIR],
    migrations: [
         __dirname + process.env.TYPEORM_MIGRATIONS_DIR
    ],
   
  });
  
