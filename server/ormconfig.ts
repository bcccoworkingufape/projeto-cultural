import dotenv from 'dotenv';
import { DataSource } from "typeorm";
dotenv.config({ path: './.env' });

console.log(process.env.TYPEORM_PASSWORD)
export const AppDataSource = new DataSource({
    type: 'postgres',
    url: String(process.env.TYPEORM_URL),
    port: Number(process.env.TYPEORM_PORT),
    username: String(process.env.TYPEORM_USERNAME),
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    synchronize: true,
    logging: false,
    entities: [process.env.TYPEORM_ENTITIES_DIR],
    migrations: [
         __dirname + process.env.TYPEORM_MIGRATIONS_DIR
    ],
  });
  
